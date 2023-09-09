import React from 'react'
import './admin.css'
import img1 from '../../Assets/img1.jpeg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiMoneyDollarBoxLine} from 'react-icons/ri'

function Admin() {
  return (
    <section className='admin-section'>
        <h1 className='hello'>Xin chào Admin</h1>
        <div className="admin-container">
            <aside>
                <div className="navbar-vertical">
                    <h3>Quản lý</h3>
                    <ul>
                        <li>Tài khoản</li>
                        <li>Nhà trọ</li>
                    </ul>
                </div>
            </aside>

            <div className="admin-content">
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
                <button className='btn'>Duyệt</button>
            </div>
        </div>
    </section>
  )
}

export default Admin