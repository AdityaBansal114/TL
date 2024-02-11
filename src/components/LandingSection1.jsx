import React from "react";
import './LandingSection1.css';

function Landing_section1() {
    return (
        <div>
            <div className="h-20 z-0">
            </div>

            <section className=" flex">
                <div className="w-[50%]">

                </div>
                <div className="w-[50%] mt-32 mr-24">
                    <img src="./src/images/l_img2.png" />

                </div>
                <div>
                    <img src="./src/images/flag1.png" className="h-14 absolute top-[30.5rem] right-[38rem] animate-Ani1" />
                </div>

                <div  >
                    <img src="./src/images/flag2.png" className="h-14 absolute top-[17.7rem] right-[19rem] animate-Ani2" />
                </div>

                <div >
                    <img src="./src/images/falg3.png" className="h-14 absolute top-[28rem] right-[24rem] animate-Ani3" />
                </div>
            </section>
        </div>

    )
}

export default Landing_section1;