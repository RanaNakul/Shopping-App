import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add ,remove } from '../redux/Slices/cartSlice';

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className='flex flex-col justify-between items-center gap-3 rounded-xl p-4   outline outline-1 outline-gray-100 hover:scale-110
     transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] group'>

      <div >
        <p className=' text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='text-gray-400 font-normal text-[10px] text-left w-40 '>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className=' h-[180px]'>
        <img src={post.image} className=' w-full h-full'/>
      </div>
    

      <div className='w-full flex justify-between items-center mt-5'>
        <div>
           <p className='text-green-600 text-base font-extrabold'>${post.price}</p>
        </div>
          {
            cart.some( (p) => p.id === post.id) ? 
              ( 
                <button
                  className=' text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
                    group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in'
                  onClick={removeFromCart}>
                    Remove Item
                </button>
              ) 
              :
              (
                <button
                  className=' text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
                    group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in'
                  onClick={addToCart}>
                    Add To Cart
                </button>
              )
          }
      </div>

    </div>
  )
};

export default Product;