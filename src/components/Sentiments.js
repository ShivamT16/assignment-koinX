import { useState } from "react";
import image from "./images/analysis.png"
import newsIcon from "./images/newsIcon.png"

export const Sentiments = () => {
  const [slide, setSlide] = useState(0)

  const handleClick = () => { slide === 3 ? setSlide(0) : setSlide( slide + 1) }

  return(

  <section className="bg-white p-4 rounded-lg relative overflow-hidden">
    <h1 className="text-2xl font-semibold py-2">Sentiments </h1>
    <h3 className="text-lg font-medium text-slate-600 mb-4">Key Events <span className="border text-sm px-2 text-white bg-slate-400 rounded-full">ⅰ</span> </h3>

  <div className="flex gap-2 flex-nowrap w-screen" style={{transform: `translateX(-${slide *20}%)`, transitionDuration: "1s" }}>
  <div className="flex gap-4">
    <div className="flex gap-2 p-6 text-sm bg-blue-100 rounded-xl">
       <img alt="blog-img" className="h-9 rounded-full" src={newsIcon} />
       <div>
        <h2 className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h2>
        <p className="text-slate-500 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse svvhj sdfghj laborum.</p>
        </div>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="flex gap-2 p-5 text-sm bg-green-100 rounded-xl">
       <img alt="blog-img" className="h-9 rounded-full" src={newsIcon} />
       <div>
        <h2 className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h2>
        <p className="text-slate-500 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse svvhj sdfghj laborum.</p>
        </div>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="flex gap-2 p-5 text-sm bg-blue-100 rounded-xl">
       <img alt="blog-img" className="h-9 rounded-full" src={newsIcon} />
       <div>
        <h2 className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h2>
        <p className="text-slate-500 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse svvhj sdfghj laborum.</p>
        </div>
    </div>
  </div>

  </div>
  <button onClick={handleClick} className="bg-white text-xl bottom-28 left-[30rem] md:left-[48rem] px-4 py-2 text-slate-500 font-bold rounded-full relative"> {">"} </button>


    <h3 className="text-lg font-medium text-slate-600">Analyst Estimates <span className="border text-sm px-2 text-white bg-slate-400 rounded-full">ⅰ</span> </h3>
    <img className="w-[70%]" alt="analysis loading" src={image} ></img>
  
  </section>

)};