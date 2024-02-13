import React from "react";
import './LandingSection1.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

function Landing_section1() {


    const [text] = useTypewriter({
        words: ['Life', 'Future'],
        loop: {},
    });

    return (

        <section className=" flex container">


            <div className="w-[46%]">


                <div className="h-[100%] flex  flex-col justify-end">

                    <div className="ml-36">

                        {/* typewriter */}

                        <span className="text-7xl text-sky-800/[.9] font-extrabold font-rubik">
                            Turning {' '}
                            <span className="text-7xl text-black/[.9] font-rubik">
                                {text}
                                <span className="text-black/[.9]"><Cursor
                                    cursorStyle='_'
                                    typeSpeed={1}
                                    deleteSpeed={1}
                                /></span>
                            </span>
                        </span>

                        {/* tagline */}

                        <p className="ml-2 mt-8 text-3xl text-black/[.7] font-rubik">
                            Study Beyond Borders :
                        </p>
                        <p className="ml-2 mt-1 text-3xl text-black/[.7] font-rubik">
                            Let The Dreams Take Flight !
                        </p>


                        {/* buttons */}
                        <div className="flex mt-5 ml-2 gap-4">
                            <Link to="/CheckCollege" className='flex items-center justify-center '>
                                <div className=' flex items-center justify-center font-rubik text-white bg-sky-800 py-3 text-[1.2rem] px-7 max-w-54 rounded-md hover:bg-slate-800 duration-75'>
                                    Check College
                                </div>
                            </Link>

                            <Link to="/AboutUs" className='flex items-center justify-center '>
                                <div className=' flex items-center font-rubik justify-center border-[1px] border-sky-800 text-[1.2rem] text-black max-w-54 py-3 px-10 rounded-md hover:text-white hover:bg-slate-800 duration-75'>
                                    About Us
                                </div>
                            </Link>
                        </div>


                        {/* stats */}
                        <div className="flex mt-3">
                            <div>
                                <img src="./src/images/1.png" className="w-[13rem] mt-1" />
                            </div>
                            <div className="flex flex-col ml-5">
                                <span className=" font-rubik font-semibold  mt-6">5500+</span>
                                <span className="font-rubik text-black/[.6]">Happy Students</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            <div className="w-[50%] mt-32">

                <img src="./src/images/l_img1.png" className=" h-full" />

                <div>
                    <img src="./src/images/flag1.png" className="h-14 absolute top-[26rem] right-[38rem] animate-Ani1" />
                </div>

                <div  >
                    <img src="./src/images/flag2.png" className="h-14 absolute top-[15.7rem] right-[19rem] animate-Ani2" />
                </div>

                <div >
                    <img src="./src/images/falg3.png" className="h-14 absolute top-[28rem] right-[24rem] animate-Ani3" />
                </div>

            </div>

        </section>
    )
}

export default Landing_section1;