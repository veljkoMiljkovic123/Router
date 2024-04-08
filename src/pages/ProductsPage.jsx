import React, { useEffect, useState } from 'react'
import PostService from '../services/postService'
import {toast} from 'react-toastify'
import SingleProductComponent from '../components/SingleProductComponent'
function ProductsPage() {
    const[singleProduct,setSingleProduct] = useState({})
    const[isLoading,setIsLoading] = useState(false)
    useEffect(()=>{

        PostService.getSingleProduct()
        .then(res=>{
            setSingleProduct(res.data);
            console.log(singleProduct);
            toast.success('Stigli su podaci')
            setIsLoading(true)
        })
        .catch(err=>console.log(err))
    },[])

  return (
    <div className='container mx-auto'>
        <h2>SINGLE PRODUCT</h2>
        {isLoading?        <SingleProductComponent product={singleProduct}/>
:<h2 className='text-4xl uppercase font-bold text-center'>Loading...</h2>}
    </div>
  )
}

export default ProductsPage