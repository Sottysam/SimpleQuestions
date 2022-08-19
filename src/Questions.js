import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Questions = ({title,info}) => {
  const[showInfo,setShowInfo] = useState(false)
  return(
    <main>
      <section className='ques'>
      <p>{title}</p>
      <div className='ion' onClick={()=> setShowInfo(!showInfo)}>
        {showInfo?<AiOutlineMinus className='icon'/>:<AiOutlinePlus className='icon'/>}
      </div>
      </section>
      {showInfo && <p>{info}</p>}
    </main>
  )
}

export default Questions