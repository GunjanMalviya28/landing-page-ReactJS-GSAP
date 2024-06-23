import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const App = () => {
  useGSAP(()=>{
 var tl = gsap.timeline()
 tl.from(".navleft",{
  y:-100,
  duration:0.5,
  delay:0.5
 })
 tl.from(".navright h4",{
  y:-100,
  duration:0.5,
  delay:0.5,
  stagger:1
 })
 tl.from(".section1",{
  x:-1000,
  duration:0.5,
  delay:0.5,
 })
 tl.from(".section2 img",{
  x:-100,
  duration:1,
  delay:0.5,
  rotateX:360,
  scale:0,
  stagger:1
 })
  })
  
  return (
    <div className='bg-black h-screen w-screen  text-white'>
      <div className='nav w-full h-20 md:w-screen flex justify-between items-center '>
       <div className='navleft ml-10'>
        <h1 className='text-4xl	font-bold'>Logo</h1>
        </div> 
       <div className='navright flex gap-10 mr-10'>
        <h4 className='text-lg font-medium'>About</h4>
        <h4 className='text-lg font-medium' >Journal</h4>
        <h4 className='text-lg font-medium'>Contact</h4>
        </div>
      </div>
      
      <div className='section flex w-full h-[85vh]'>
       <div className='section1  w-2/3 p-24'>
        <h1 className='text-6xl font-bold mb-4'>Hard work beats talent when talent doesn't work hard</h1>
        <p className='text-lg mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At blanditiis temporibus impedit quos rerum repellendus debitis nisi non voluptas officia!</p>
        <button className='rounded-3xl font-bold bg-zinc-800 w-40 h-10'>Explore More</button>
       </div>

       <div className='section2 w-1/3'>
       <img className='w-[50vh] h-[40vh]  mb-5 rounded-lg border-2 border-white' src="https://images.unsplash.com/photo-1719032168861-994a74306944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />
       <img className='w-[50vh] h-[40vh] ml-24 rounded-lg border-2 border-white' src="https://plus.unsplash.com/premium_photo-1718198501619-77a74ccbda55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
      </div>
      

      
    </div>
  )
}

export default App
