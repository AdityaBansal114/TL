import React from "react";
import './LandingSection1.css';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

function Landing_section1() {


    const [text] = useTypewriter({
        words: ['Life','Future'],
        loop: {},  
    });

    return (

            <section className=" flex">
                <div className="w-[50%] flex items-center">

                    
                <span className="ml-32">
                    <span className="text-5xl text-sky-800 font-extrabold font-rubik">
                        Turning {' '}
                        <span className="text-5xl text-black font-rubik">
                        {text}
                        </span>
                        <span className="text-black"><Cursor
                        cursorStyle='_'
                        typeSpeed={1}
                        deleteSpeed={1}
                        /></span>
                    </span>
                    
                </span>





                </div>


                <div className="w-[50%] mt-32 mr-24">
                    <img src="./src/images/l_img2.png" />
                 <div>
                    <img src="./src/images/flag1.png" className="h-14 absolute top-[30.5rem] right-[38rem] animate-Ani1" />
                </div>

                <div  >
                    <img src="./src/images/flag2.png" className="h-14 absolute top-[17.7rem] right-[19rem] animate-Ani2" />
                </div>

                <div >
                    <img src="./src/images/falg3.png" className="h-14 absolute top-[28rem] right-[24rem] animate-Ani3" />
                </div>

                </div>
               
            </section>
    )
}

export default Landing_section1;