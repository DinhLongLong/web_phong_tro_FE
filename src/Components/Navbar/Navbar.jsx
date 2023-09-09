import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // mo navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    // tat navBar
    const closeNav = () => {
        setActive('navBar')
    }

  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoNav flex'>
                <div className="logoDiv">
                    <a href="./" className='logo flex'>
                        <img src={logo} alt="" />
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <Link to="./" className="navLink">Trang chủ</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/kytucxa" className="navLink">Ký túc xá</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/chungcu" className="navLink">Chung cư</Link>
                        </li>
                        <li className="navItem">
                            <Link to="/nhatro" className="navLink">Nhà trọ</Link>
                        </li>
                        <button className='btn'>
                            <Link to="/postsell">ĐĂNG TIN NGAY</Link>
                        </button>
                        <button><Link to="/admin">ADMIN</Link></button>
                    </ul>

                    <div onClick={closeNav} className="closeNavbar">
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </div>
            </div>

            <div className="searchDiv flex">
                <input type="text" placeholder='Nhập để tìm kiếm'/>
                <button className='btn'>
                    <Link to="/postbuy">Tìm Kiếm</Link>
                </button>
            </div>

            <div class="ctaDiv">
                <Link to="/login" className="ctaLink">Đăng nhập</Link>
                <Link to="/register" className="ctaLink --yellow">Đăng ký</Link>
            </div>

            <div onClick={showNav} className="toggleNav">
                <TbGridDots className='icon'/>
            </div>
        </header>
    </section>    
  )
}

export default Navbar