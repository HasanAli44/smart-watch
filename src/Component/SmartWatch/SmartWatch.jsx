import WatchImg from "../../../public/images/product-gallery.png";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ReactIcon from "../../../public/images/000.svg";
import { useState } from "react";
const SmartWatch = () => {
  const [count, setcount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setcount(newCount);
  };
  return (
    <div>
      <div className="grid grid-cols-2 xl:px-[300px] pt-[120px] gap-x-[60px]">
        <div>
          <img className="rounded-[4px]" src={WatchImg} alt="" />
        </div>
        <div className="my-auto">
          <h2 className="text-[40px] font-bold leading-[44px] text-[#364A63]">
            Classy Modern Smart watch
          </h2>
          <div className="flex pt-3 items-center">
            <FaStar className="text-[#FFD200] mr-[4.5px]"></FaStar>
            <FaStar className="text-[#FFD200] mr-[4.5px]"></FaStar>
            <FaStar className="text-[#FFD200] mr-[4.5px]"></FaStar>
            <FaStarHalfAlt className="text-[#FFD200] mr-[4.5px]"></FaStarHalfAlt>
            <FaRegStar className="text-[#FFD200] mr-2"></FaRegStar>
            <p className=" text-[#8091A7] text-[14px]">(2 Reviews)</p>
          </div>
          <div className="py-5">
            <del className="mr-[5px] text-[#8091A7] text-xl">$99.00</del>
            <span className="text-[#6576FF] font-bold text-2xl">$79.00</span>
          </div>
          <p className="text-[18px] text-[#8091A7]">
            I must explain to you how all this mistaken idea of denoun cing ple
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teaching.
          </p>
          <div className="pt-5">
            <p className="font-bold text-[18px] pb-[14px]">Band Color</p>
            <div className="flex">
              <a className="mr-[19px]" href="#">
                <div className="bg-[#816BFF] w-4 h-4 rounded-full"></div>
              </a>
              <a className="mr-[19px]" href="#">
                <div className="bg-[#1FCEC9] w-4 h-4 rounded-full"></div>
              </a>
              <a className="mr-[19px]" href="#">
                <div className="bg-[#4B97D3] w-4 h-4 rounded-full"></div>
              </a>
              <a className="" href="#">
                <div className="bg-[#3B4747] w-4 h-4 rounded-full"></div>
              </a>
            </div>
          </div>
          <div className="flex ">
            <div className="pt-[20.5px] mr-[43px] ">
              <p className="text-[#8091A7] text-[14px] pb-2">Type</p>
              <p className="text-[16px] font-bold text-[#364A63]">Watch</p>
            </div>
            <div className="pt-[20.5px]">
              <p className="text-[#8091A7] text-[14px] pb-2">Model Number</p>
              <p className="text-[16px] font-bold text-[#364A63]">
                Forerunner 290XT
              </p>
            </div>
          </div>
          <p className="font-bold text-[18px] pb-[10px] pt-5">Wrist Size</p>
          <div className=" flex  gap-x-3">
            <a
              href="#"
              className="border border-[#DBDFEA] w-[73px] h-[36px] rounded-[3px] flex items-center justify-center"
            >
              <p className="text-[12px]">
                <span className="pr-3 font-bold text-sm">S</span>$69
              </p>
            </a>
            <a
              href="#"
              className="border border-[#DBDFEA] w-[73px] h-[36px] rounded-[3px] flex items-center justify-center"
            >
              <p className="text-[12px]">
                <span className="pr-3 font-bold text-sm">M</span>$79
              </p>
            </a>
            <a
              href=""
              className="border border-[#DBDFEA] w-[73px] h-[36px] rounded-[3px] flex items-center justify-center"
            >
              <p className="text-[12px]">
                <span className="pr-3 font-bold text-sm">L</span>$89
              </p>
            </a>
            <a
              href=""
              className="border border-[#DBDFEA] w-[73px] h-[36px] rounded-[3px] flex items-center justify-center"
            >
              <p className="text-[12px]">
                <span className="pr-3 font-bold text-sm">XL</span>$99
              </p>
            </a>
          </div>
          <div className="pt-5 flex gap-3 items-center">
            <div className=" rounded-[4px] w-[130px] h-[36px] border border-[#DBDFEA] flex">
              <div className="border-r border-[#DBDFEA] ">
                <a
                  href="#"
                  className="text-[#8091A7] text-[18px] flex items-center justify-center w-[35px] h-[36px] rounded-tl-[4px] rounded-bl-[4px]"
                >
                  -
                </a>
              </div>
              <div className="border-r border-[#DBDFEA] ">
                <a
                  href="#"
                  className="text-[#364A63] text-[14px] flex items-center justify-center   w-[60px] h-[36px] rounded-tl-[4px] rounded-bl-[4px]"
                >
                  0
                </a>
              </div>
              <div className="">
                <a
                  href="#"
                  className="text-[#8091A7] text-[18px] flex items-center justify-center   w-[35px] h-[36px] rounded-tl-[4px] rounded-bl-[4px]"
                >
                  +
                </a>
              </div>
            </div>
            <button
              onClick={handleAdd}
              className="bg-[#6576FF] text-white px-[18px] py-2 rounded-[3px] font-bold text-[13px]"
            >
              Add to Cart
            </button>
            <a href="#">
              <img src={ReactIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-[92px] pb-5 ">
        <button className="bg-[#FFBB5A] px-6 py-2 text-[#364A63] font-bold text-sm rounded-[20px] ">
          Checkout
          <span className="bg-white px-[6px] py-[2px] rounded-[5px] ml-[10px]">
            {count}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SmartWatch;
