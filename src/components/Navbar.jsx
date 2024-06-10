import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux';

const Navbar = () => {

  const {cart} = useSelector(state => state);

  return (
    
      <nav className=' w-10/12 max-w-[1048px] mx-auto flex flex-row justify-between items-center py-5'>
          <NavLink to={"/"} className={'text-green-600 text-2xl font-bold'}>
            ECOMZY
          </NavLink>

          <div className=' relative flex items-center text-white gap-4'>
            <NavLink to={"/"} className={' hover:text-green-600 text-base font-bold'}>
              <p>Home</p>
            </NavLink>
            <NavLink to={"/cart"} className={'group'}>
              <FaShoppingCart className='text-xl group-hover:text-green-600'/>
              {
                cart.length > 0 &&
                <span className=' absolute -top-1 -right-2 text-[11px] bg-green-600 rounded-full w-5 h-5 flex justify-center
                 items-center animate-bounce'>{cart.length}</span>
              }
            </NavLink>
          </div>

      </nav>
  )
}

export default Navbar