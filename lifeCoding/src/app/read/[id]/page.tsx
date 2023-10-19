import React from 'react'

// 폴더는 경로에 해당하는데 1, 2와 같이 변하는 번호의 경우 [id] 형식으로 해서 값을 받을 수 있다.
// 이 경우 props에서 params.id로 값을 출력할 수 있다.

export default async function Read(props:any) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`
  , { cache: 'no-store' });
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
    </>
  )
}
