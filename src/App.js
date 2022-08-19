import React from 'react';
import data from "./data"
import Questions from './Questions';

function App() {
 return(
    <section className='white'>
      <div>
        <p className='ii'>questions and answers about login</p>
      </div>
      <div className='single'>
        {
        data.map((datas)=>{
          return(
            <Questions key={datas.id} {...datas}/>
          )
        })
        }
      </div>
    </section>
  )
}

export default App;
