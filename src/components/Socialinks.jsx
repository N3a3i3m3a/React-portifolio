import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Socialinks = () => {
    const links = [
        {
            id:1,
            child:(
                <>LinkedIn<FaLinkedin size={30}/> </>
            ),
            href:'https://www.linkedin.com/in/naima-nishimwe-581b77263/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>Github<FaGithub size={30} /> </>
            ),
            href:'https://github.com/N3a3i3m3a',
            
        },
        {
            id:3,
            child:(
                <>Whatsapp<FaWhatsapp size={30}/> </>
            ),
            href:'',
            
        },
        {
            id:4,
            child:(
                <>Resume<BsFillPersonLinesFill size={30}/> </>
            ),
            href:'/NISHIMWE.pdf',
            style: 'rounded-br-md', 
            download: true,
        }
    ]

  return (
    <section className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child,href,style,download})=>(
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  hover:rounded-md  bg-green-950" + " " + style}>
            < a href={href} 
            className='flex justify-between items-center w-full text-white' 
            download={download}
            >  
            {child}</a>   
            </li>))}
            
        </ul>
     
    
    </section>
  )
}

export default Socialinks