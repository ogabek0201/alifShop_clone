import React from "react";
import pod from "../../assets/img/category/pod.jpg";
import kos from "../../assets/img/category/kos.png";
import sim from "../../assets/img/category/sim.png";
import sum from "../../assets/img/category/sum.png";
import fen from "../../assets/img/category/fen.jpg";
import nau from "../../assets/img/category/nau.jpg";
import sti from "../../assets/img/category/sti.jpg";
import iph from "../../assets/img/category/iph.jpg";
import det from "../../assets/img/category/det.png";
import nou from "../../assets/img/category/nou.jpg";
import wru from "../../assets/img/category/wru.jpg";
import mic from "../../assets/img/category/mic.jpg";
import elec from "../../assets/img/category/elec.jpg";
import home from "../../assets/img/category/home.jpg";
import obr from "../../assets/img/category/obr.jpg";
import vel from "../../assets/img/category/муд.jpg";

const Catalog = () => {
  return (
    <div>
      <div className="container mx-auto px-10">
        <h1 className="text-2xl leading-9 font-bold mt-5">Каталог товаров</h1>
        <div className="pt-8 pb-10 flex flex-wrap justify-between gap-x-5 gap-y-9 md:gap-x-3">
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={iph} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Смартфоны и планшеты
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Samsung,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                iPhone,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Xiaomi,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Другие смартфоны,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Планшеты,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Кнопочные телефоны
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={sti} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Бытовая техника
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Телевизоры,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Стиральные машины,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Холодильники,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Кондиционеры,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Кухонные плиты,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Варочные панели
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={nau} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Наушники и аксессуары
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Наушники,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Умные часы и браслеты,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Умные колонки,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Беспроводные колонки,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Универсальные внешние аккумуляторы,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Стилусы
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={nou} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Компьютерная техника
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Ноутбуки,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Мониторы,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Принтеры и МФУ,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Комплектующие для ПК,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Периферийные устройства,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Wi-Fi роутеры
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={mic} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Мелкая бытовая техника
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Микроволновые печи,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Мини-печи,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Мясорубки,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Блендеры,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Кухонные комбайны и измельчители,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Утюги,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Пылесосы
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={wru} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Строительство и ремонт
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Наборы инструментов,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Электрические шуруповерты,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Аккумуляторные отвертки,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Полировальные и шлифовальные машины,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Сварочные аппараты и комплектующие,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Перфораторы
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={elec} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Электромобили
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={home} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Товары для дома
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Фильтры для воды,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Очистители и увлажнители воздуха,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Отпариватели,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Вытяжные вентиляторы,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Освещение,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Триммеры,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Системы безопасности
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={kos} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Товары для красоты
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Парфюмерия,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Наборы,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Декоративная косметика,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Уходовая косметика,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Инструменты и аксессуары
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={fen} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Техника для красоты
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Фены и фен-щётки,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Щипцы,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                плойки и выпрямители,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Машинки для стрижки волос и триммеры,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Электробритвы,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Эпиляторы и женские электробритвы
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={sim} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Интернет пакеты и красивые номера
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Megafon
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={det} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Детские товары
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Товары для младенцев,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Велосипеды,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Детский транспорт,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Коляски,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Гироскутеры,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Самокаты,
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                {" "}
                Игрушки и игры
              </a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={obr} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Образование
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >
                Образовательные курсы
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={sum} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Сумки и аксессуары
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >Наручные часы,</a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              > Сумки и рюкзаки для ноутбуков,</a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              > Городские сумки и рюкзаки</a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
            </div>
          </a>
          <a href="#" className="min-h-[245px] w-52 m:w-36">
            <img src={vel} alt="" />
            <a
              href="#"
              className="text-black text-base mt-1 mb-0.5 leading-5 overflow-hidden hover:text-[#ffc01f]"
            >
              Сумки и аксессуары
            </a>
            <div>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              >Гироскутеры,</a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              > Самокаты ,</a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              > Велосипеды</a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#ffc01f] text-[13px]"
              ></a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
