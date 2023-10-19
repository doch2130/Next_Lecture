"use client"
// import { useRouter } from 'next/router';
// 13버전에서는 navigation에서 가져와야한다.
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Update() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id)
      .then(resp=>resp.json())
      .then(result => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);
  return (
    <form onSubmit={(e:any)=>{
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, body})
      }
      fetch(process.env.NEXT_PUBLIC_API_URL+`topics/`+id, options)
        .then(res=>res.json())
        .then(result=>{
          console.log(result);
          const lastid = result.id;
          router.refresh();
          // 서버 컴포넌트를 강제로 다시 랜더링 하도록 하는 기능
          router.push(`/read/${lastid}`);
        });
    }}>
      <p>
        <input type='text' name='title' placeholder='title' value={title} onChange={e=>setTitle(e.target.value)} />
      </p>
      <p>
        <textarea name='body' placeholder='body' value={body} onChange={e=>setBody(e.target.value)} ></textarea>
      </p>
      <p>
        <input type='submit' value='update' />
      </p>
    </form>
  )
}
