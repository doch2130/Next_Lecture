'use client'

export default function Home() {
  const makeApiCall = async () => {
    // await fetch('/api/example', {
    await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({ hello: 'world' }),
    })
  }

  return (
    <div>
      <button type='button' onClick={makeApiCall}>Make Call</button>
    </div>
  )
}
