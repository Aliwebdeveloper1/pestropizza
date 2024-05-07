import React from 'react'
import  Image from 'next/image'
import logo from '../../assets/logo.png'
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <div>   
            <div className='h-24 bg-slate-700 w-full flex justify-around items-center'>
                <Image
                className='h-24 w-24'
                src={logo}
                alt="Pizza Logo"
                />

                <div className='flex justify-around items-center gap-5'>
                    <a href='' className='text-white text-lg'>HOME</a>
                    <a href='' className='text-white text-lg'>MENU</a>
                    <a href='' className='text-white text-lg'>RESERVATION</a>
                    <a href='' className='text-white text-lg'>CONTACT US </a>
                </div>
                <div className='flex justify-around items-center gap-3'>
                    <div className='text-white text-lg flex gap-2'><IoCallOutline className='text-yellow-400 font-{20px}'/> +12 345 23455</div>
                    <div className='text-white text-lg flex gap-2'><AiOutlineShoppingCart className='text-yellow-400 font-bold'/> 0 items</div>

                </div>

                <button className='p-2 bg-yellow-400 rounded-full'>
                    <p>ORDER ONLINE</p>
                </button>

            </div>

        </div>
    )
}

export default Navbar