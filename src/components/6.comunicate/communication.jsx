import React from 'react'
import './communication.css'
import slide from './pictures/background.png';

function Communication() {
  return (
    <section id='contact' className='h-screen flex justify-center items-center'>
      <div id='form-container' className='w-full h-full rounded-2xl bg-center bg-cover flex justify-center items-center' style={{backgroundImage: `url(${slide})`}}>
        <form id='form' className=''>
          <div id='inside-form' className=''>
            <div id='input' className=''>

              <div className='flex justify-center items-center'>
                <label>
                  Name:
                </label>
              </div>

              <div className='flex justify-center items-center'>
                <input>
                </input>
              </div>

            </div>

            <div id='input' className=''>

              <div className='flex justify-center items-center'>
                <label>
                  Surname:
                </label>
              </div>

              <div>
                <input>
                </input>
              </div>
            </div>

            <div id='input' className=''>

              <div>
                <label>
                  Email:
                </label>
              </div>

              <div>
                <input>
                </input>
              </div>

            </div>

            <div id='input' className=''>

              <div>
                <label>
                  Text:
                </label>
              </div>

              <div>
                <textarea>
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