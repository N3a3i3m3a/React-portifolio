import React from 'react'

const About = () => {
  return (
   <section name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-green-800 text-white'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
         <div className='pb-8'>
            <p className='text-4xl font bold inline border-b-4 border-gray-500'>About</p></div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia nisi quaerat praesentium consequuntur quam, ad cupiditate architecto? Fugit quisquam explicabo laboriosam dolore quis repellendus corporis inventore officiis, quia est. </p>
            <br/>
            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis possimus assumenda, numquam at earum iste ipsa esse ducimus quaerat ratione consequuntur. Libero rem reiciendis nostrum laboriosam officia delectus tempore aut? </p>
       </div>
   </section>
  )
}

export default About