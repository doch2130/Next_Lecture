import Image from "next/image";
import nextImage from '/public/next.svg';



export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <Image src={nextImage} alt='test' />
    </>
  )
}
