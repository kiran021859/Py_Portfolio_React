import React from 'react'
import './communication.css'
import slide from './pictures/background.png';

function Communication() {
  return (
    <section id='contact' className='h-screen flex justify-center items-center'>
      <div id='form-container' className='w-full h-full rounded-2xl bg-center bg-cover flex justify-center items-center' style={{backgroundImage: `url(${slide})`}}>
        <form id='form' className=''>
          <div id='inside-form' className=''>
            <div id='input' className='rounded-2xl'>

              <div className='flex justify-center items-center'>
                <label className='flex justify-center items-center rounded-2xl'>
                  Name:
                </label>
              </div>

              <div className='flex items-center'>
                <input className='rounded-2xl'>
                </input>
              </div>

            </div>

            <div id='input' className=''>

              <div className='flex justify-center items-center'>
                <label className='flex justify-center items-center rounded-2xl'>
                  Surname:
                </label>
              </div>

              <div className='flex items-center'>
                <input className='rounded-2xl'>
                </input>
              </div>
            </div>

            <div id='input' className=''>

              <div className='flex justify-center items-center'>
                <label className='flex justify-center items-center rounded-2xl'>
                  Email:
                </label>
              </div>

              <div className='flex items-center'>
                <input className='rounded-2xl'>
                </input>
              </div>

            </div>

            <div id='input' className=''>

              <div className='flex justify-center items-center'>
                <label className='flex justify-center items-center rounded-2xl'>
                  Text:
                </label>
              </div>

              <div className='flex items-center'>
                <textarea  className='rounded-2xl'>
                </textarea>
              </div>

            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Communication