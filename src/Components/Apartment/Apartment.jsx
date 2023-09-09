import React from 'react'
import './apartment.css'
import img1 from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import {RiMoneyDollarBoxLine} from 'react-icons/ri'

const Apart = [
    {
        id: 3,
        imgSrc: img3,
        location: 'Quận 3',
        fees: '3000000',
        isFurniture: true,
        type:'apartment',
        isStatus: true,
        title: 'Phong tro gia re full noi that quan 3',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cumque est impedit iusto repellat? Magni non nisi voluptates harum rem. Earum tempore ea, ullam inventore voluptates nostrum repellat placeat magni?'
      }
]

const Apartment = () => {
  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 className="title">
            Thông tin các chung cư
          </h3>
        </div>

        <div className="secContent flex">
            {
              Apart.map(({id, imgSrc, location, fees, title, isFurniture, isStatus, desc})=>{
                return(
                  <a href="#">
                    <div key={id} className="singleDestination">
                      <div className="imageDiv">
                        <img src={imgSrc} alt="" />
                      </div>

                      <div className="titleDiv">
                        <h2>{title}</h2>
                      </div>

                      <div className="cardInfo">
                        <span className='continent flex'>
                          <HiOutlineLocationMarker className='icon'/>
                          <span className='name'>Địa chỉ: {location}</span>
                        </span>

                        <div className="price flex">
                          <RiMoneyDollarBoxLine className='icon'/>
                          <h5>{fees} vnd/ 1 Tháng</h5>
                        </div>

                        <div className="isFurniture">
                          Tình trạng nội thất: {isFurniture === true && <span>Có</span>} {isFurniture === false && <span>Không</span>}
                        </div>   

                        <div className="descDiv">
                          {desc}  
                        </div>                  
                        
                        <a href="#">
                          <button className='btn flex'>
                            Chi Tiết <HiOutlineClipboardCheck className="icon" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </a>
                )
              })
            }
        </div>


    </section>
  )
}

export default Apartment