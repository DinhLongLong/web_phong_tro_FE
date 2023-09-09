import React from 'react'
import './detail.css'
import img1 from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import {RiMoneyDollarBoxLine} from 'react-icons/ri'


const Detail = () => {
  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 className="title">
            Thông tin chi tiết
          </h3>
        </div>

        <div className="secContent flex">
            <div className="singleDestination">
              <div className="imageDiv">
                <img src={img1} alt="" />
              </div>

              <div className="titleDiv">
                <h2>Phong tro gia re full noi that quan 1</h2>
              </div>

              <div className="cardInfo">
                <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon'/>
                  <span className='name'>Địa chỉ: Quan 1</span>
                </span>

                <div className="price flex">
                  <RiMoneyDollarBoxLine className='icon'/>
                  <h5>5000000 vnd/ 1 Tháng</h5>
                </div>

                <div className="isFurniture">
                  Tình trạng nội thất: Có
                </div>   
                <h3>Mô tả chi tiết</h3>
                <div className="descDiv">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cumque est impedit iusto repellat? Magni non nisi voluptates harum rem. Earum tempore ea, ullam inventore voluptates nostrum repellat placeat magni?  
                </div>                  
              </div>
            </div>
        </div>


    </section>
  )
}

export default Detail