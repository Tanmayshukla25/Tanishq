import { useState } from "react";
import Navbarpage from "./navbar";
import Slider from "./Sliderimages";
import "./App.css";
import Earing from "./images/earing.webp";
import jewellery from "./images/jewellery.jpg";
import chains from "./images/dailywear-chains.webp";
import earrings from "./images/earrings-cat.webp";
import ring from "./images/ring.jpg";
import pendant from "./images/pendants-cat.webp";
import mangalsutra from "./images/mangalsutra-cat.jpg";
import bracelets from "./images/bracelets-cat.webp";
import bangles from "./images/bangles.jpg";
import chainsImg from "./images/chainsImg.webp";
import weddingImages from "./images/weddingImages.webp";
import diamondimages from "./images/diamondImages.webp";
import images3 from "./images/images3.webp";
import dailywear from "./images/dailyWearImages.webp";
import diamond from "./images/diamond.svg";
import backGroundImages from "./images/backgroundImages.webp";
import mangalsutraImages from "./images/mangalsutra.webp";
import pendantimg from "./images/pendantsimages.webp";
import tanishqimg from "./images/tanishqImg.svg";
import heartimg from "./images/heartimg.svg";
import tanishqtransparency from "./images/tanishq-transparency.svg";
import tanishqexchange from "./images/tanishq-exchange-logo.svg";
import tanishqpurity from "./images/tanishq-purity-logo.svg";
import tanishqlifetime from "./images/tanishqlifetime.svg";
import CuratedImgge from "./images/CuratedImgges.jpg";
import sbgmen from "./images/sbg-men.webp";
import sbgkid from "./images/sbg-kids.webp";
import flower from "./images/flower.svg";
import homeexchange from "./images/home-exchange-icon.svg";
import store from "./images/store-locator.jpg";
import book from "./images/book.webp";
import talk from "./images/talk.webp";
import digigold from "./images/Digigold.webp";
import blogs from "./images/blogs.webp";
import guide from "./images/guide.webp";
import tanishqQr from "./images/tanishq-app-QR-code.svg";
import footerPlaystore from "./images/footer-playstore.svg";
import footerIos from "./images/footer-ios.svg";
import footerLogo from "./images/tanishq-footer-logo.svg";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaComments,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcDinersClub,
  FaCcDiscover,
} from "react-icons/fa";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const images = [
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw70645f50/homepage/HeroBanner/prettypink-mobile.jpg",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb9bcbcfb/homepage/HeroBanner/prettypink-desktop.jpg",
  "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04a43e9c/homepage/HeroBanner/dailywear-desktop.jpg",
];

function App() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <Navbarpage />
      <div className="relative w-full mx-auto mt-6  mb-[20px]">
        <div className="overflow-hidden rounded-xl shadow-md h-[75vh]">
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            className="w-full h-auto object-cover transition duration-700 ease-in-out "
          />
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
        >
          <GrPrevious />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
        >
          <GrNext />
        </button>
      </div>

      <div className="text-center">
        <div className="mt-[50px] mb-6 pt-[40px]">
          <h1 className="text-4xl text-amber-950">Tanishq Collections</h1>
          <p className="text-2xl text-gray-500">
            Explore our newly launched collection
          </p>
        </div>

        <div className="flex flex-wrap-reverse sm:flex-wrap items-center justify-center gap-2.5">
          <div className="w-full sm:w-[700px]">
            <img src={Earing} alt="" className="rounded-xl w-full" />
          </div>

          <div className="w-full sm:w-auto">
            <div className="w-full sm:w-[480px] h-[auto] sm:h-[411px]">
              <img
                src={jewellery}
                alt=""
                className="rounded-xl w-full h-full"
              />
            </div>
            <div className="w-full sm:w-[480px] h-[auto] sm:h-[411px] mt-1">
              <img src={chains} alt="" className="rounded-xl w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="mt-[50px] mb-6 pt-[40px]">
          <h1 className="text-4xl text-amber-950">Find Your Perfect Match</h1>
          <p className="text-2xl text-gray-500">Shop by Categories</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="w-[280px]">
            <img
              src={earrings}
              alt="Gold Earrings"
              className="rounded-xl w-full object-cover"
            />
            <h2 className="p-4 text-xl">EARRINGS</h2>
          </div>
          <div className="w-[280px]">
            <img
              src={ring}
              alt="Finger Ring"
              className="rounded-xl w-full object-cover"
            />
            <h2 className="p-4 text-xl">FINGER RINGS</h2>
          </div>
          <div className="w-[280px]">
            <img
              src={pendant}
              alt="Pendant"
              className="rounded-xl w-full object-cover"
            />
            <h2 className="p-4 text-xl">PENDANTS</h2>
          </div>
          <div className="w-[280px]">
            <img
              src={mangalsutra}
              alt="Mangalsutra"
              className="rounded-xl w-full"
            />
            <h2 className="p-4 text-xl">MANGALSUTRA</h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="w-[280px]">
            <img
              src={bracelets}
              alt="Gold Earrings"
              className="rounded-xl w-full object-cover"
            />
            <h2 className="p-4 text-xl">BRACELETS</h2>
          </div>
          <div className="w-[280px]">
            <img
              src={bangles}
              alt="Finger Ring"
              className="rounded-xl w-full object-cover"
            />
            <h2 className="p-4 text-xl">BANGLES</h2>
          </div>
          <div className="w-[280px]">
            <img
              src={chainsImg}
              alt="Pendant"
              className="rounded-xl w-full object-cover"
            />
            <h2 className="p-4 text-xl">CHAINS</h2>
          </div>
          <div className="">
            <div className="w-[280px] h-[340px] border-1 border-gray-400 rounded-2xl flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl text-orange-900">10+</h1>
              <p>Categories to choose from</p>
            </div>
            <h2 className="p-4 text-xl text-center">VIEW ALL</h2>
          </div>
        </div>
      </div>

    <div className="text-center">

  <div className="mt-[50px] mb-6 pt-[40px]">
    <h1 className="text-3xl sm:text-4xl text-amber-950">Tanishq World</h1>
    <p className="text-xl sm:text-2xl text-gray-500">
      A companion for every occasion
    </p>
  </div>

  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2">
   
    <div className="w-full sm:w-[606px]">
     
      <div className="relative w-full sm:w-[606px] h-[auto] sm:h-[385px]">
        <img
          src={weddingImages}
          alt="Wedding"
          className="rounded-xl w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-[40%] flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg">
            Wedding
          </h2>
        </div>
      </div>

     
      <div className="relative w-full sm:w-[606px] h-[auto] sm:h-[432px] mt-1">
        <img
          src={images3}
          alt="Gold"
          className="rounded-xl w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-[40%] flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg">
            Gold
          </h2>
        </div>
      </div>
    </div>

    <div className="w-full sm:w-[606px]">
  
      <div className="relative w-full sm:w-[606px] h-[auto] sm:h-[432px]">
        <img
          src={diamondimages}
          alt="Diamond"
          className="rounded-xl w-full h-full"
        />
        <div className="absolute bottom-10 left-[40%] flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg">
            Diamond
          </h2>
        </div>
      </div>

    
      <div className="relative w-full sm:w-[606px] h-[auto] sm:h-[385px] mt-1">
        <img
          src={dailywear}
          alt="Dailywear"
          className="rounded-xl w-full h-full"
        />
        <div className="absolute bottom-10 left-[40%] flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg">
            Dailywear
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="relative mb-[20rem]">
        <div
          className="bg-cover bg-center h-[400px] w-full mt-20 relative"
          style={{ backgroundImage: `url(${backGroundImages})` }}
        >
          <div className="absolute top-14 left-[7%] px-4 sm:px-8">
            <div className="flex flex-wrap items-center pt-[20px]">
              <h1 className="text-white text-3xl sm:text-5xl mr-5">
                New Arrivals
              </h1>
              <span className="flex flex-wrap bg-gray-50 px-3 py-2 rounded-4xl opacity-70 text-sm sm:text-base">
                <img src={diamond} alt="" className="mr-2" />
                500+ New Items
              </span>
            </div>
            <p className="text-white text-lg sm:text-3xl w-full sm:w-[750px] mt-3">
              New Arrivals Dropping Daily, Monday through Friday. Explore the
              Latest Launches Now!
            </p>
          </div>
        </div>

       <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 absolute top-[63%]  w-full px-4 sm:px-8">

          <div className="relative w-full sm:w-[606px] h-[auto] sm:h-[385px] p-3 sm:p-4 rounded-[10px] bg-white">
            <img
              src={mangalsutraImages}
              alt="Mangalsutra"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="relative w-full sm:w-[606px] h-[auto] sm:h-[385px] p-3 sm:p-4 rounded-[10px] bg-white">
            <img
              src={pendantimg}
              alt="Pendant"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap align-items-center justify-center w-[100%] gap-25 h-[400px] border-t-1 border-gray-300">
        <div className="w-[40%] border-r-1 border-gray-300 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl">
            Tanishq <span className="text-amber-700">Assurance</span>
          </h1>
          <p className="text-gray-400 text-2xl">
            Crafted by experts, cherished by you
          </p>
        </div>

        <div className="flex flex-wrap align-items-center justify-between w-[30%] mt-[8rem]">
          <div className="w-[100px]">
            <img src={tanishqimg} alt="" className="mix-blend-color-burn" />
            <h2 className="w-[200xp]">Quality Craftmanship</h2>
          </div>

          <div className="w-[100px]">
            <img src={heartimg} alt="" className="mix-blend-color-burn" />
            <h2 className="w-[200xp]">Ethically Sourced</h2>
          </div>

          <div className="w-[100px]">
            <img
              src={tanishqtransparency}
              alt=""
              className="mix-blend-color-burn"
            />
            <h2 className="w-[200xp]">100% Transparency</h2>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <div>
          <h1 className="text-4xl ">Exchange Program</h1>
          <p className="text-2xl text-gray-500">Trusted by 2.8M+ families</p>
        </div>
        <div className="mt-10">
          <video autoPlay muted loop controls className="w-full">
            <source
              src="https://staticimg.tanishq.co.in/videos/ge-dt.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="text-center ">
        <p className="text-gray-500 text-2xl">
          Trust us to be part of your precious moments and to deliver jewellery
          that you'll <br />
          cherish forever.
        </p>
      </div>

      <div>
        <div className="flex flex-wrap align-items-center justify-center gap-45 mt-10 h-[200px]">
          <div className="w-[100px]">
            <img
              src={tanishqexchange}
              alt=""
              className="mix-blend-color-burn"
            />
            <h2 className="w-[100xp]">Tanishq Exchange</h2>
          </div>

          <div className="w-[100px]">
            <img src={tanishqpurity} alt="" className="mix-blend-color-burn" />
            <h2 className="w-[100xp]">The Purity Gurantee</h2>
          </div>

          <div className="w-[150px]">
            <img
              src={tanishqtransparency}
              alt=""
              className="mix-blend-color-burn"
            />
            <h2 className="w-[100xp]">Complete Transprancy and Trust </h2>
          </div>
          <div className="w-[100px]">
            <img
              src={tanishqlifetime}
              alt=""
              className="mix-blend-color-burn"
            />
            <h2 className="w-[100xp]">Lifetime Maintenance</h2>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 h-[90vh]">
        <div>
          <h1 className="text-4xl ">Curated For You</h1>
          <p className="text-2xl text-gray-500">Shop By Gender</p>
        </div>
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="w-[400px] h-[450px]">
              <img
                src={CuratedImgge}
                alt="Gold Earrings"
                className="rounded-xl w-full h-full object-cover"
              />
              <h2 className="p-4 text-xl">Women jewellery</h2>
            </div>

            <div className="w-[400px] h-[450px]">
              <img
                src={sbgmen}
                alt="Gold Earrings"
                className="rounded-xl w-full h-full object-cover"
              />
              <h2 className="p-4 text-xl">Men jewellery</h2>
            </div>
            <div className="w-[400px] h-[450px]">
              <img
                src={sbgkid}
                alt="Gold Earrings"
                className="rounded-xl w-full h-full object-cover"
              />
              <h2 className="p-4 text-xl">Kids jewellery</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-20 mb-[20px]">
        <div className="bg-[#f2e7e9] mt-1 w-full sm:w-[645px] h-[640px] shadow-[0_0px_2px_gray] rounded-4xl relative">
          <div className="bg-orange-800 w-[40px] h-[640px] absolute left-0 sm:left-23"></div>
          <div className="bg-orange-800 w-full sm:w-[645px] h-[40px] absolute bottom-0 sm:bottom-23"></div>

          <div className="w-[200px] absolute bottom-4 sm:bottom-13 left-4 sm:left-12">
            <img src={flower} alt="" />
          </div>
          <div className="absolute top-12 sm:top-30 right-4 sm:right-25">
            <h1 className="text-3xl sm:text-6xl text-amber-900">
              #GiftOfChoice
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl mt-4 sm:mt-5">
              Breathtaking gifts for your loved one’s
            </p>
            <h3 className="text-amber-900 text-xl sm:text-2xl">
              STARTING AT ₹10,000
            </h3>
            <button className="bg-white px-6 py-3 sm:px-8 sm:py-3 text-lg sm:text-xl rounded-3xl flex items-center border-1 mt-4 sm:mt-6 border-amber-950">
              Explore Now{" "}
              <span className="mt-1 ml-2">
                <GrNext />
              </span>
            </button>
          </div>
        </div>

        <div className="bg-[#fffcf7] mt-1 w-full sm:w-[545px] h-[640px] rounded-4xl border-1 border-amber-400 relative">
          <div className="bg-[#fffcf7] w-[65px] h-[570px] mt-[35px] rounded-3xl border-l-1 border-amber-400 absolute left-[-45px] sm:left-[-45px]"></div>
          <div className="bg-[#fffcf7] w-[65px] h-[570px] mt-[35px] rounded-3xl border-r-1 border-amber-400 absolute right-[-45px] sm:right-[-45px]"></div>

          <div className="absolute left-7 top-12 sm:top-20 w-[80px] sm:w-[100px]">
            <img src={homeexchange} alt="" className="w-full" />
          </div>

          <div className="absolute top-36 sm:top-50 right-4 sm:right-25 w-[90%] sm:w-auto">
            <h1 className="text-xl sm:text-4xl">
              Exchange your Old Gold for 100% Value!
            </h1>
            <p className="text-lg sm:text-xl mt-4 sm:mt-5">
              Unlock full value for your old gold today with our{" "}
              <span className="text-black font-extrabold">
                Exchange Program !
              </span>
            </p>

            <button className="bg-white px-6 py-3 sm:px-8 sm:py-3 rounded-3xl flex text-lg sm:text-xl items-center border-1 mt-8 sm:mt-16 border-amber-500">
              Know More
              <span className="mt-1 ml-2">
                <GrNext />
              </span>
            </button>
          </div>
        </div>
      </div>

      <Slider />

      <div className="text-center mt-25 h-[110vh]">
        <div className="mb-15 ">
          <h1 className="text-4xl ">Tanishq Experience</h1>
          <p className="text-2xl text-gray-500">
            Find a Boutique or Book a Consultation
          </p>
        </div>
        <div className="text-center mb-[60px]">
          <div className="flex flex-wrap items-center justify-center  ">
            <div className="w-[400px] h-[450px] ">
              <img
                src={store}
                alt="Gold Earrings"
                className=" w-full h-full object-cover shadow-4xl"
              />
              <h2 className="p-4 text-xl">VISIT OUR STORE</h2>
            </div>

            <div className="w-[400px] h-[450px]">
              <img
                src={book}
                alt="Gold Earrings"
                className=" w-full h-full object-cover shadow-4xl"
              />
              <h2 className="p-4 text-xl">TALK TO AN EXPERT</h2>
            </div>
            <div className="w-[400px] h-[450px]">
              <img
                src={talk}
                alt="Gold Earrings"
                className=" w-full h-full object-cover shadow-4xl"
              />
              <h2 className="p-4 text-xl">Kids jewellery</h2>
            </div>
          </div>
        </div>
        <div className="text-center mb-[20px]">
          <div className="flex flex-wrap items-center justify-center  ">
            <div className="w-[400px] h-[450px] ">
              <img
                src={digigold}
                alt="Gold Earrings"
                className=" w-full h-full object-cover shadow-4xl"
              />
              <h2 className="p-4 text-xl">DIGI GOLD</h2>
            </div>

            <div className="w-[400px] h-[450px]">
              <img
                src={blogs}
                alt="Gold Earrings"
                className=" w-full h-full object-cover shadow-4xl"
              />
              <h2 className="p-4 text-xl">BLOGS</h2>
            </div>
            <div className="w-[400px] h-[450px]">
              <img
                src={guide}
                alt="Gold Earrings"
                className=" w-full h-full object-cover shadow-4xl"
              />
              <h2 className="p-4 text-xl">JEWELLERY GUIDE</h2>
            </div>
          </div>
        </div>

        <footer className="bg-[#2c0000] text-white py-10 mt-[100px] px-6 md:px-16 font-serif">
          <div>
            <img src={footerLogo} alt="" className="p-[20px] ml-[10%]" />
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-start gap-32 mb-10">
            <div className="flex flex-col items-center text-center">
              <p className="text-lg mb-4 font-semibold">
                Download the Tanishq App Now
              </p>
              <img src={tanishqQr} alt="QR Code" className="w-40 h-40 mb-4" />
              <div className="flex gap-4">
                <img src={footerPlaystore} alt="Play Store" className="w-28" />
                <img src={footerIos} alt="App Store" className="w-28" />
              </div>
            </div>

            <div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-40">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-left">
                    Useful Links
                  </h3>
                  <ul className="space-y-2 text-sm text-left">
                    <li>Delivery Information</li>
                    <li>International Shipping</li>
                    <li>Payment Options</li>
                    <li>Track your Order</li>
                    <li>Returns</li>
                    <li>Find a Store</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-left">
                    Information
                  </h3>
                  <ul className="space-y-2 text-sm text-left">
                    <li>Blog</li>
                    <li>Offers & Contest Details</li>
                    <li>Help & FAQs</li>
                    <li>About Tanishq</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-left">
                    Contact Us
                  </h3>
                  <p className="text-sm mb-4 text-left">1800-266-0123</p>
                  <h3 className="text-lg font-semibold mb-1">Chat With Us</h3>
                  <p className="text-xs mb-3">+91 8147349242</p>
                  <hr />
                  <div className="flex gap-4 text-xl mt-2 ">
                    <FaWhatsapp className="hover:text-green-400 hover:cursor-pointer" />
                    <FaEnvelope className="hover:text-yellow-400 hover:cursor-pointer" />
                    <FaComments className="hover:text-blue-600 hover:cursor-pointer" />
                  </div>
                </div>
              </div>

              <hr className="border-gray-600 my-6" />

              <div className="flex flex-col lg:flex-row justify-between mb-[20px] items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold">Social</span>
                  <FaInstagram className="hover:text-pink-700 hover:cursor-pointer" />
                  <FaFacebookF className="hover:text-blue-600 hover:cursor-pointer" />
                  <FaYoutube className="hover:text-red-600 hover:cursor-pointer" />
                </div>
              </div>
              <hr className="text-gray-600" />
              <div className="flex items-center gap-4 mt-[20px] mb-[20px] text-2xl">
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcPaypal />
                <FaCcDinersClub />
                <FaCcDiscover />
              </div>
              <hr className="text-gray-600" />

              <div className="mt-10  flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-center md:text-left text-gray-300">
                <div>
                  <p>© 2025 Titan Company Limited. All Rights Reserved.</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 text-xs">
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Disclaimer</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
