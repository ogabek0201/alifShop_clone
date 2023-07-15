import React from "react";
import { Link } from "react-router-dom";
import telev from "../../assets/img/sti.webp";

const Stiralka = () => {
  return (
    <div>
      <div className="container mx-auto px-10">
        <div className="flex items-center mb-5">
          <h1 class="text-black font-bold text-2xl">Стиральные машины </h1>
          <span class="text-gray-500 text-base font-medium mx-2 min-w-max pt-1">
            191 товар
          </span>
        </div>
        <div>
          <ul className="flex items-start justify-start flex-wrap">
            <li>
              <Link
                className="bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 mb-1 mr-1 block"
                to="/"
              >
                Автоматические
              </Link>
            </li>
            <li>
              <Link
                className="bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 mb-1 mr-1 block"
                to="/"
              >
                Полуавтоматические
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-between ml-[244px] m:ml-[0] m:justify-center gap-x-2 gap-y-8 mb-5 mt-5">
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  className="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-0.5 mb-0.5">
                <span className="font-family-bold text-base">5 162</span>
                <span className="font-family-bold text-base"> c.</span>
                <span className="text-gray-400 line-through text-sm">
                  5 445
                </span>
                <span className="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div className="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span className="text-sm">165</span>
                <span className="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p className="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  className="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-0.5 mb-0.5">
                <span className="font-family-bold text-base">5 162</span>
                <span className="font-family-bold text-base"> c.</span>
                <span className="text-gray-400 line-through text-sm">
                  5 445
                </span>
                <span className="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div className="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span className="text-sm">165</span>
                <span className="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p className="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  className="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-0.5 mb-0.5">
                <span className="font-family-bold text-base">5 162</span>
                <span className="font-family-bold text-base"> c.</span>
                <span className="text-gray-400 line-through text-sm">
                  5 445
                </span>
                <span className="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div className="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span className="text-sm">165</span>
                <span className="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p className="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">5 162</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">5 445</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">165</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">5 162</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">5 445</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">165</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">5 162</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">5 445</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">165</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">5 162</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">5 445</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">165</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">5 162</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">5 445</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">165</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">5 162</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">5 445</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">165</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">5 162</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">5 445</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">165</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">5 162</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">5 445</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">165</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
          <a href="#" className="relative w-52">
            <div className="mb-12">
              <img src={telev} alt="" />
              <div>
                <span
                  class="bg-[red] text-white flex justify-center items-center w-[44px] h-[23px] text-xs absolute mt-3"
                  style={{ borderRadius: "6px", display: "flex" }}
                >
                  .
                </span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-0.5 mb-0.5">
                <span class="font-family-bold text-base">5 162</span>
                <span class="font-family-bold text-base"> c.</span>
                <span class="text-gray-400 line-through text-sm">5 445</span>
                <span class="text-gray-400 line-through text-sm"> с.</span>
              </div>
              <div class="flex items-center space-x-0.5 mb-0.5 text-gray-500 text-sm">
                <span class="text-sm">165</span>
                <span class="text-sm"> c.</span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "2px;" }}
                >
                  <path d="M1.5 2L6.5 7M6.5 2L1.5 7" stroke="#73787d"></path>
                </svg>
                24 мес
              </div>
              <p class="overflow-ellipsis overflow-hidden ellipsis-vertical text-sm hover:text-[#ffc01f]">
                Стиральная машина LG Steam F2J3HS4L, 7 кг
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stiralka;
