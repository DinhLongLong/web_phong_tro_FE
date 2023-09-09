import React from 'react'
import './footer.css'
import {FiSend} from 'react-icons/fi'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Liên Lạc</small>
            <h2>Trọ Sinh Viên LK</h2>
          </div>
        </div>

        <div className="inputDiv flex">
          <input type='email' placeholder='Nhập địa chỉ email...'/>
           <button className='btn flex' type='submit'>
            Xác Nhận <FiSend className='icon'/>
           </button>
        </div>

        <div className="footerSocials">
          <AiFillFacebook className="icon" />
          <AiFillYoutube className="icon" />
          <AiFillTwitterCircle className="icon" />
        </div>
      </div>
    </section>
  )
}

export default Footer