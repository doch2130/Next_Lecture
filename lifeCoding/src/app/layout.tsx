import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Control } from './Control'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web tutorials',
  description: 'Generated by PHH',
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'topics', { cache: 'no-store' });
  // 길어지기 때문에 임시로 사용하는 방법
  // { next: { revalidate: 0 } } 캐시 사용 X
  // { next: { revalidate: 10 } } 10 초 동안만 캐시 유지
  // { cache: 'no-store' } 캐시 사용 X
  const topics = await resp.json();
  return (
    <html>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          {/* <li><Link href="/read/1">html</Link></li> */}
          {/* <li><Link href="/read/2">css</Link></li> */}
          {topics.map((topic:any) => {
            return <li key={topic.id}>
              <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
          })}

        </ol>
        {/* children 위에 있는 내용은 url이 변경 및 해당 페이지가 존재하지 않아도 고정값으로 출력된다. */}
        {children}
        <Control />
      </body>
    </html>
  )
}
