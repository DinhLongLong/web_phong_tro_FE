import React from 'react'
import './postSell.css'
import avatar from '../../Assets/default-user.png'

const PostSell  = () => {
    return (
        <section className="dashboard">
            <div className="container">
                <div className="info flex">
                    <div className="userInfo">
                        <div className="userAvar">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="userName">
                            khainguyen
                        </div>
                    </div>
                    <h1 className="title">
                        Đăng tin mới
                    </h1>
                </div>

                <form id='form_dangban' action="">
                    
                    <div className="locateDetail">
                        <h2>Địa chỉ cho thuê</h2>
                        <label htmlFor="district_id">Quận</label>
                        <select name="district_id" id="district_id">
                            <option value="quan1">Quận 1</option>
                            <option value="quan2">Quận 2</option>
                            <option value="quan3">Quận 3</option>
                            <option value="quan4">Quận 4</option>
                            <option value="quan5">Quận 5</option>
                            <option value="quan6">Quận 6</option>
                            <option value="quan7">Quận 7</option>
                            <option value="quan8">Quận 8</option>
                            <option value="quan9">Quận 9</option>
                            <option value="quan10">Quận 10</option>
                            <option value="quan11">Quận 11</option>
                            <option value="quan12">Quận 12</option>
                        </select>
                    </div>
                
                    <div className="infomation">
                        <h2>Thông tin mô tả</h2>
                        <label htmlFor="post_type"><h3>Loại phòng</h3></label>
                        <select name="post_type" id="post_type">
                            <option value="kytucxa">Ký túc xá</option>
                            <option value="chungcu">Chung cư</option>
                            <option value="nhatro">Nhà trọ</option>
                        </select>
                        <label htmlFor="title"><h3>Tiêu đề</h3></label>
                        <input type="text" id='title'/>
                        <label htmlFor="desc"><h3>Nội dung mô tả</h3></label>
                        <textarea name="desc" id="desc" cols="100" rows="10"></textarea>
                        <h3>Tình trạng nội thất</h3>
                        <input type="radio" id='co' value="Co" name="isfurniture"/>
                        <label htmlFor='co'>Có</label>
                        <input type="radio" id='khong' value="Khong" name="isfurniture"/>
                        <label htmlFor='khong'>Không</label>
                        <h3>Giá cho thuê</h3>
                        <input type="text" placeholder='Nhập giá cho thuê' />
                    </div>

                    <div className="imginfo">
                        <h2>Hình ảnh</h2>
                        <input type="file" name="imginfo" accept='png,jpg' multiple />
                    </div>
                    <button className='btn' type='submit'>Xác nhận</button>
                </form>
            </div>
            <div className="card-body">
                <div className="card-title">
                    <h3>Lưu ý đăng tin</h3>
                </div>
                <ul>
                    <li>Nội dung phải viết bằng tiếng Việt có dấu</li>
                    <li>Tiêu đề tin không dài quá 100 kí tự</li>
                    <li>Các bạn nên điền đầy đủ thông tin vào các mục</li>
                    <li>Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh</li>
                </ul>
            </div>
        </section>
    )
}

export default PostSell