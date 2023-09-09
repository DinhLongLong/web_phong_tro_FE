import React, { useState } from "react";
import "./home.css";
import video from "../../Assets/video.mov";
import { GrLocation } from "react-icons/gr";
import { useEffect } from "react";
import { HiFilter } from "react-icons/hi";
import { BsFillHouseGearFill } from "react-icons/bs";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mov"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Trọ tốt SV</span>
          <h1 className="homeTitle">
            Cho Thuê Phòng Trọ, Cần Tìm Nhà Trọ TPHCM Giá Rẻ 2023
          </h1>
        </div>

        <div className="cardDiv grid">
          <div className="locationInput">
            <label htmlFor="">Chọn quận:</label>
            <div className="input flex">
              <select name="location" id="">
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
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="furnitureInput">
            <label htmlFor="furniture">Tình trạng nội thất:</label>
            <div className="input flex">
              <input type="radio" id="yes" value="Có" name="furniture" />
              <label id="radio" htmlFor="yes">
                Có
              </label>
              <input type="radio" id="no" value="Không" name="furniture" />
              <label id="radio" htmlFor="no">
                Không
              </label>
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Giá cao nhất:</label>
              <h3 className="total">10,000,000 VND</h3>
            </div>
            <div className="input flex">
              <input type="radio" id="1to3" value="low" name="price" />
              <label id="radio" htmlFor="1to3">
                1m-3m
              </label>
              <input type="radio" id="3to6" value="mid" name="price" />
              <label id="radio" htmlFor="3to6">
                3m-6m
              </label>
              <input type="radio" id="6to10" value="high" name="price" />
              <label id="radio" htmlFor="6to10">
                6m-10m
              </label>
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>Lọc....</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
