import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

  return (


    <div className="flex h-20 bg-white shadow-2xl shadow-[#00000089]">
        <Link to="/"><img src="" alt="" /></Link>
        <ul className=" w-[85%] flex gap-14 items-center justify-center text-[]  " >
            <li className=' h-[100%] hover:text-sky-600  ease-in duration-50 group'>
                    <div className='h-[97%] flex text-center justify-center'>

                        <Link to="/AboutUs" className='flex items-center'>About Us</Link>
                        
                    </div>
                    <div className='hidden h-[0.15rem] bg-sky-600 group-hover:block' ></div>  
            </li>

            <li className=' h-[100%] hover:text-sky-600  ease-in duration-50 group'>
                    <div className='h-[97%] flex text-center justify-center'>

                        <Link to="/ContactUs" className='flex items-center'>Contact Us</Link>
                        
                    </div>
                    <div className='hidden h-[0.15rem] bg-sky-600 group-hover:block' ></div>  
            </li>

            <li className=' h-[100%] hover:text-sky-600  ease-in duration-50 group'>
                    <div className='h-[97%] flex text-center justify-center'>

                        <Link to="/ChechCollege" className='flex items-center'>Check College</Link>
                        
                    </div>
                    <div className='hidden h-[0.15rem] bg-sky-600 group-hover:block' ></div>  
            </li>
            <li className=' h-[100%] hover:text-sky-600  ease-in duration-50 group'>
                    <div className='h-[97%] flex text-center justify-center'>

                        <Link to="/Chat" className='flex items-center'>Chat</Link>
                        
                    </div>
                    <div className='hidden h-[0.15rem] bg-sky-600 group-hover:block' ></div>  
            </li>
        </ul>
        <Link to="/Login" className='flex items-center justify-center '>
            <div className='flex items-center justify-center  text-white bg-slate-600 py-1 px-5 rounded-2xl hover:bg-slate-800 duration-75'>
                Login
            </div>
        </Link>

        <Link to="/Home">
            <div className='ml-5 h-[100%] p-2 flex items-center justify-center'>
                <img src="./src/icons/home_png.png" className='h-5 ' />
            </div>
        </Link>

        <Link to="/Profile">
            <div className='h-[100%] p-5 flex items-center justify-center'>
            <img src="./src/icons/user_png.png" className='h-5' />
            </div>
        </Link>
    </div>

  )
}

export default Navbar;
