import React, { useState } from 'react'

function SingleProductComponent({product}) {
const[currentImage,setCurrentImage]=useState(0)

function handleCurrentImage(i){
    setCurrentImage(i)
}
  return <div className='flex items-start justify-between'>
        <div className='flex flex-col gap-5'>
            {/* Velika slika */}
            <img src={product.images[currentImage]} alt="" />
            {/* Male slike */}
           <div className='flex items-center gap-4'>
           {product.images.map((el,i)=>{
                return <img className='w-[100px] object-cover border-2 border-slate-300' src={el} key={i} alt="" onClick={()=>handleCurrentImage(i)}/>
            })}
           </div>
        </div>
        <div>
            {/* Content */}
        </div>
    </div>
  
}

export default SingleProductComponent