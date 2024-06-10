import React from 'react'
import { toast } from 'react-hot-toast';
import {MdDelete} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/cartSlice';

const CartItem = ({item, cart, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div>
      <div className={`flex flex-row justify-between py-6  ${cart.length === itemIndex+1 ? ' border-0' : 'border-b-2 border-slate-950' }`}>

        <div className=' h-[200px] pl-7 w-[180px]'>
          <img src={item.image} className=' w-full h-full'/>
        </div>

        <div className='w-[60%] space-y-4'>

          <h1 className=' text-xl text-slate-950 font-semibold '>{item.title}</h1>

          <p className='text-sm'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>

          <div className='flex flex-row justify-between items-center'>

            <p className='text-green-600 text-base font-extrabold'>${item.price}</p>
            <button 
              className='mr-10 text-red-700 text-[14px] w-8 h-8 rounded-full bg-red-200 flex justify-center items-center '
              onClick={removeFromCart}
              >
              <MdDelete/>
            </button>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem
