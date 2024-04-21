import React from 'react' 
import Back from '/Back.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  return (
    <section name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-500 px-12 via-gray-800' > 
      <div className='max-w-creen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-3xl text-white font-bold '>I'm a front end developer, GIS analyst, and Architectural designer</h2>
          <p className='text-gray-500 py-4 max-w-md'>With purpose of each of my skills or integrating them, whenever necessary, as a solution for some of real wold problems.</p>
          <div>
            <button className=' group cursor-pointer text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-100 to-green-950 '>Portifolio
              <span className=' group-hover:rotate-90 duration-300'  ><FaArrowRightLong size={25} /></span>
            </button>
          </div>
        </div>
        <div> <img src={Back} alt='home profile' className='rounded-full mx-auto md:w-full ' /> </div>
      </div>
    </section>
  );
}

export default Home
