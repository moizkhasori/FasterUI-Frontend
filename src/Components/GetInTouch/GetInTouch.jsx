import React from 'react'
import "./getintouch.scss"
import Button from '../General/Button/Button'

const GetInTouch = () => {
  return (
    <section className='get-in-touch'>
        <div className="get-in-touch-wrapper">
            <h2>Let's Get in Touch</h2>
            <form>
                <label htmlFor="email">email</label>
                <input id='email' type="email" placeholder='example@email.com' />

                <label htmlFor="name">name</label>
                <input id='name' type="text" placeholder='fullname' />

                <label htmlFor="message">message</label>
                <textarea  id="message" cols="30" rows="10" placeholder='write your message'></textarea>

                <Button type={"primary"} text={"Get in Touch"} width={"100%"} padding={"1vw"} />
            </form>
            
        </div>
    </section>
  )
}

export default GetInTouch