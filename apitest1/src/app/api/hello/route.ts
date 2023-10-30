// 현재 api 방식
// src/app/api
// api/hello/example.ts

import { redirect } from "next/navigation";
import { NextRequest } from "next/server";


// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()
 
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}
 
function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
 
const encoder = new TextEncoder()
 
async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}
 
export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)
 
  return new Response(stream)
}



// export async function GET(request: Request) {
//   // 요청을 받아서 리다이렉션 할 수 있음 - start
//   // redirect('thisurldoesntexist.com');
//   redirect('http://localhost:3000');
//   // redirect는 return 기능도 같이 작동해서 아래 return은 필요없다.
//   // 요청을 받아서 리다이렉션 할 수 있음 - end
//   // return new Response('hi');
// }

// // export async function POST(req: Request) {
// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   console.log(req.cookies.get('cookie'));
//   console.log(body);
//   console.log(req.headers.get('Authorization'));

//   // return new Response('OK');
//   return new Response(JSON.stringify({ hello: 'world' }));
// }