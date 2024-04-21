import React from 'react'
import Agecalc from '/Agecalc.jpg'
import Contact from '/Contact.jpg'
import Bugeseratopo from '/Bugeseratopo.jpg'
import Muyanzaphysical from '/Muyanzaphysical.jpg'
import Render1 from '/Render1.jpg'
import Render2 from '/Render2.jpg'

const Experience = () => {
    const portifolios=[
        {
            id:1,
            src:Agecalc
        },
        {
          id:2,
          src:Contact
        },
        {
            id:3,
            src:Bugeseratopo
        },
        {
            id:4,
            src:Muyanzaphysical
        },
        {
            id:5,
            src:Render1
        },
        {
            id:6,
            src:Render2
        },
    ]
    
      return (
        <div
          name="portfolio"
          className="bg-gradient-to-b from-gray-800 to-gray-500 w-full text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Experience
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  sm:px-0">
              {portifolios.map(({ id, src }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Experience;