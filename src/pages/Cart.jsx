import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import CartItem from "../components/CartItem"
import toast from 'react-hot-toast';
import { clearCart } from '../redux/Slices/cartSlice';


const Cart = () => {

  const navigate = useNavigate();
  const {cart} = useSelector((state) => state);
  const [totalAmount , setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  function ClickHandler(){
      dispatch(clearCart());
      navigate('/');
      toast.success("Thank you for Shoping")
  };

  useEffect(() => {
      setTotalAmount(cart.reduce( (acc,curr) => acc + curr.price ,0));
  }, [cart])

  return (
    <div className=' pt-[100px] w-10/12 max-w-[1028px] mx-auto pb-10'>
          {
          
            cart.length > 0 ? 
            (<div className='flex flex-row justify-between'>
              <div className='w-[55%] '>
                  {
                    cart.map( (item , index) => (
                        <CartItem item={item} key={item.id} itemIndex={index} cart={cart} />
                    ))
                  }
              </div>

              <div className='w-[40%] h-[500px]  flex flex-col justify-between'>
                <div className='pt-10'>
                    <p className=' text-lg font-semibold text-green-600 uppercase'>
                        Your Cart
                    </p>
                    <p className=' text-4xl font-bold text-green-600 uppercase'>
                      Summary
                    </p>
                    <p className=' text-base font-semibold pt-5'>
                      Total Item : {cart.length}
                    </p>
                </div>
                  
                <div>
                  <p className=' text-base text-gray-700 font-semibold '>Total Amount: <span className='text-black font-extrabold'>${totalAmount.toFixed(2)}</span></p>
                  <button className='w-full py-2 bg-green-600 rounded-xl mt-4 text-white font-bold  hover:text-slate-950
                    hover:bg-white border-2 border-green-600 ' onClick={ClickHandler}>
                    Checkout Now
                  </button>
                </div>

              </div>
              
            </div>) : 

            (<div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-xl font-semibold flex flex-col 
              justify-between items-center gap-5 text-slate-950'>
              <h1>Your cart is empty!</h1>
              <Link to={"/"} className=' px-10 py-2 bg-green-600 text-white text-base rounded-lg uppercase hover:text-slate-950
               hover:bg-white border-2 border-green-600'>
                Shop Now
              </Link>
            </div>)
            
          }

    </div>
  )
}

export default Cart