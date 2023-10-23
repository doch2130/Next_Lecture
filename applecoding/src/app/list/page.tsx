import React from 'react'
import Image from 'next/image'
import Food0 from '/public/food0.jpg'
import Food1 from '/public/food1.jpg'
import Food2 from '/public/food2.jpg'

export default function List() {
  let product:string[] = ['Tomatoes', 'Pasta', 'Coconut'];
  let food = [Food0, Food1, Food2];

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {
        product.map((el:string, index:number) => {
          return (
            <div className='food' key={index}>
              <Image src={food[index]} alt='food' className='food-img' />
              {/* Image 태그에서 외부주소를 사용할 경우 width, height는 필수로 작성해야 한다. */}
              {/* next.config.js에서 셋팅도 해야 함 */}
              {/* <Image src='http://외부주소' alt='food' width={} height={} className='food-img' /> */}
              <h4>{el} $40</h4>
            </div>
          )
        })
      }
      {/* <div className='food'>
        <h4>{product[0]} $40</h4>
      </div>
      <div className='food'>
        <h4>{product[1]} $40</h4>
      </div>
      <div className='food'>
        <h4>{product[2]} $40</h4>
      </div> */}
    </div>
  )
}
