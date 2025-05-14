import tanishqLogo from "./images/tanishqLogo.svg";
import AllJewellery from "./images/all Jewellery.svg";
import goldImages from "./images/goldImage.svg";
import Earring from "./images/earrings.svg";
import diamond from "./images/diamond.svg";
import Ring from "./images/rings.svg";
import Wedding from "./images/wedding.svg";
import collection from "./images/collection.svg";
import gifting from "./images/gifting.svg";
import more from "./images/more.svg";
import dailyWear from "./images/dailywear.svg";
import { IoSearchOutline, IoDiamondOutline } from "react-icons/io5";
import { TbCameraPlus } from "react-icons/tb";
import { PiMicrophoneBold, PiShoppingBagBold } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";

function Navbarpage() {
  return (
    <>
      <div className="bg-white shadow-[0_0px_10px_gray] p-5 ">
        <nav className="flex flex-wrap items-center justify-around fixed top-0 left-0 right-0 z-50 bg-white p-2 sm:p-4">
          <div className="w-[70px] h-[50px]">
            <img src={tanishqLogo} alt="Tanishq Logo" />
          </div>

          <form className="relative w-full max-w-[600px] flex items-center">
            <span className="absolute top-3 left-2.5 text-amber-900 text-xl">
              <IoSearchOutline />
            </span>
            <input
              className="w-full border px-10 py-2.5 rounded-[25px] border-gray-300 text-sm sm:text-base"
              type="text"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              placeholder="Search for Gold jewellery, Diamond jewellery and more..."
            />
            <span className="absolute top-3 right-14 text-amber-900 text-xl">
              <TbCameraPlus />
            </span>
            <span className="absolute top-3 right-4 text-amber-900 text-xl">
              <PiMicrophoneBold />
            </span>
          </form>

          <div className="flex items-center gap-6 text-xl sm:text-xl mt-3 text-amber-900">
            <span>
              <IoDiamondOutline />
            </span>
            <span>
              <CiShop />
            </span>
            <span>
              <FaRegHeart />
            </span>
            <span>
              <RiContactsLine />
            </span>
            <span>
              <PiShoppingBagBold />
            </span>
          </div>
        </nav>

        <div
          className="flex flex-wrap items-center justify-around pt-5 px-[5rem] font-Playfair Display text-sm font-medium text-gray-700 mt-13"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={AllJewellery} alt="" />{" "}
            </div>{" "}
            All Jewellery
          </span>
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={goldImages} alt="" />{" "}
            </div>{" "}
            Gold
          </span>
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={diamond} alt="" />{" "}
            </div>
            Diamond
          </span>
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={Earring} alt="" />{" "}
            </div>
            Earrings
          </span>
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={Ring} alt="" />{" "}
            </div>
            Rings
          </span>
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={dailyWear} alt="" />{" "}
            </div>
            Daily Wear
          </span>
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={collection} alt="" />{" "}
            </div>
            Collections
          </span>
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={Wedding} alt="" />{" "}
            </div>
            Wedding
          </span>
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={gifting} alt="" />{" "}
            </div>
            Gifting
          </span>
          <span className="flex items-center gap-1 text-gray-700 transition-all duration-300 hover:text-orange-800 hover:underline hover:scale-105">
            {" "}
            <div className="w-[20px] h-[20px]">
              {" "}
              <img src={more} alt="" />{" "}
            </div>
            More
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbarpage;
