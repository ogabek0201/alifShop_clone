import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import sli_1 from "../../assets/img/slider/1.jpg";
import sli_2 from "../../assets/img/slider/2.jpg";
import skidki from "../../assets/img/category/skidki.jpg";
import pod from "../../assets/img/category/pod.jpg";
import kos from "../../assets/img/category/kos.png";
import fen from "../../assets/img/category/fen.jpg";
import nau from "../../assets/img/category/nau.jpg";
import sti from "../../assets/img/category/sti.jpg";
import iph from "../../assets/img/category/iph.jpg";
import tel from "../../assets/img/category/tel.jpg";
import nou from "../../assets/img/category/nou.jpg";
import wru from "../../assets/img/category/wru.jpg";
import mic from "../../assets/img/category/mic.jpg";
import elec from "../../assets/img/category/elec.jpg";
import pro from "../../assets/img/category/pro.webp";

const HomePage = () => {

  return (
    <>
      <div className="mb-20">
        <div className="container mx-auto px-10">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="w-full mx-auto"
          >
            <SwiperSlide>
              <img src={sli_1} alt="" className='w-full' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sli_2} alt="" className='w-full' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-20">
        <div className="container mx-auto px-10">
          <h1 className="text-xl font-bold mb-5">Популярные категории</h1>
          <div className="flex items-center gap-x-4 gap-y-5 flex-wrap justify-between">
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28 "
            >
              <img src={skidki} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Скидки
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={pod} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Подарочные сертификаты
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={kos} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Товары для красоты
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={fen} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Техника для красоты
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={nau} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Наушники
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={sti} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Бытовая техника
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={iph} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Смартфоны и планшеты
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={tel} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Телевизоры
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={nou} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Ноутбуки
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={wru} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Строительство и ремонт
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={mic} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Мелкая бытовая техника
              </p>
            </a>
            <a
              href="#"
              className="text-black hover:text-[#ffc01f] flex flex-col items-center w-40 m:w-28"
            >
              <img src={elec} alt="" />
              <p className="mt-1 text-center leading-5 overflow-ellipsis overflow-hidden ellipsis-vertical">
                Электромобили
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto  px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Подборка подарков</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Подарочные сертификаты</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Скидочные товары</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Смартфоны</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Умные часы и браслеты</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Наушники</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Товары для красоты</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto  px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Ноутбуки</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto  px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Телевизоры</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto  px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Мелкая бытовая техника</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="mb-0">
        <div className="container mx-auto  px-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 m:justify-between m:w-full">
              <h3 className="text-xl font-bold">Стиральные машины</h3>
              <a
                href="#"
                className="text-[#0040ff] hover:text-[#ffc01f] text-base"
              >
                Смотреть все
              </a>
            </div>
            <div class="flex gap-3 m:hidden">
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-gray-250">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#73787D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="w-[40px] h-[40px] flex justify-center items-center rounded-3xl cursor-pointer bg-[#ffc01f]">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L7 7L1 1"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            // modules={}
            className="h-96 mt-4"
          >
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="relative">
                <div className="mb-12">
                  <img src={pro} alt="" />
                  <div>
                    <span
                      class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                      style={{ borderRadius: "6px", display: "flex" }}
                    >
                      -4%
                    </span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center space-x-0.5 mb-0.5">
                    <span class="font-family-bold text-base">2 196</span>
                    <span class="font-family-bold text-base"> c.</span>
                    <span class="text-gray-400 line-through text-sm">
                      2 297
                    </span>
                    <span class="text-gray-400 line-through text-sm"> с.</span>
                  </div>
                  <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                    <span class="text-sm">125</span>
                    <span class="text-sm"> c.</span>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "2px;" }}
                    >
                      <path
                        d="M1.5 2L6.5 7M6.5 2L1.5 7"
                        stroke="#73787d"
                      ></path>
                    </svg>
                    24 мес
                  </div>
                  <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                    Беспроводные наушники Apple AirPods Pro, белый
                  </p>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomePage;
