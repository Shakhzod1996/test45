import React from "react";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import katta_savdo from "../../assets/katta_savdo.png"
import tugatish from "../../assets/tugatish.png"
import xiomi from "../../assets/xiomi.png"
import toyMavsumi from "../../assets/toy_mavsumi.png"
import { TbShoppingBagPlus } from "react-icons/tb";
const Telifon = ({ phone, addtoCartFunc }) => {




  return (
    <div>
          <div className="swiper_bottom_buttons_bar">
            <button>
              <img src={katta_savdo} alt="Katta savdo" />
              Katta savdo
            </button>
            <button>
              <img src={xiomi} alt="Xiomi savdo" />
              Xiomi savdo
            </button>
            <button>
              <img src={tugatish} alt="Tugatish" />
              Tugatish
            </button>
            <button>
              <img src={toyMavsumi} alt="To'y mavsumi" />
              To'y mavsumi
            </button>
          </div>
    <div className="tavars"  >
      {phone.map((item) => (
        <div className="tavarDiv" key={item.id}>
          <Link to={`Viw/${item.id}`}>
          <img src={item.rasm} alt={item.nomi} />
            </Link>
         <div className="left">
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p><IoStar /> Lorem, ipsum.</p>
          <h4>15000 so`m oyiga</h4><br />
          <br />
          <br />

          <div className="display">
          <div>
          <p className="linear">659 000</p><br />
          <p>{item.narxi} so`m</p>
          </div>
            <button className="zindex" onClick={() => addtoCartFunc(item, "+")}><TbShoppingBagPlus /></button>
          </div>
         </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Telifon;
