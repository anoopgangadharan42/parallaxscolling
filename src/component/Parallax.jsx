import React, { useEffect, useState } from 'react'


const Parallax=()=> {
    const [Scroll ,setscroll] =useState(0);
    useEffect(()=>{
        const handscroll =()=> {
        setscroll(window.scroll);
        
    };
    window.addEventListener('Scoll',handscroll);
    return()=>{
        window.removeEventListener('Scroll',handscroll);

    };
},[]);
      
  return (
      <section className='parallax '>
       <div className='parallex-inner '>
        <h2>Parallax and image slider effect </h2>
       </div>
   </section>
   
   
   
  );
  };

export default Parallax