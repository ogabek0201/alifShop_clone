import React, { useState } from "react";
import { LinkOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import { Select } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../assets/img/logo.svg";
import facebook from "../../assets/img/Facebook.svg";
import instagram from "../../assets/img/Instagram.svg";
import telegram from "../../assets/img/Telegram.svg";
import { Button, Drawer, Radio, Space } from "antd";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Layout = () => {
  const items = [
    getItem(
      <Link to="catalog">Каталог товаров</Link>,
      "link",
      <LinkOutlined />
    ),
    getItem(
      <Link to="telefony">Смартфоны и планшеты</Link>,
      "link",
      <LinkOutlined />
    ),
    getItem(
      <Link to="stiralny">Бытовая техника</Link>,
      "link",
      <LinkOutlined />
    ),
    getItem(
      <Link to="/">Наушники и аксессуары</Link>,
      "link",
      <LinkOutlined />
    ),
    getItem(<Link to="/">Компьютерная техника</Link>, "link", <LinkOutlined />),
    getItem(
      <Link to="/">Мелкая бытовая техника</Link>,
      "link",
      <LinkOutlined />
    ),
    getItem(
      <Link to="/">Строительство и ремонт</Link>,
      "link",
      <LinkOutlined />
    ),
    getItem(<Link to="/">Электромобили</Link>, "link", <LinkOutlined />),
    getItem(<Link to="/">Товары для дома</Link>, "link", <LinkOutlined />),
    getItem(<Link to="/">Товары для красоты</Link>, "link", <LinkOutlined />),
    getItem(<Link to="/">Техника для красоты</Link>, "link", <LinkOutlined />),
    getItem(
      <Link to="/">Интернет пакеты и красивые номера</Link>,
      "link",
      <LinkOutlined />
    ),
    getItem(<Link to="/">Детские товары</Link>, "link", <LinkOutlined />),
    getItem(<Link to="/">Образование</Link>, "link", <LinkOutlined />),
    getItem(<Link to="/">Сумки и аксессуары</Link>, "link", <LinkOutlined />),
    getItem(<Link to="/">Спорт и хобби</Link>, "link", <LinkOutlined />),
  ];
  const onClick = (e) => {
    setOpen(!open);
  };

  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="bg-white z-40 sticky top-0 my-1 ">
        <div className="container max-w mx-auto ">
          <div className="flex h-24 items-center gap-6 justify-center ">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <button
              className="h-12 inline-flex items-center justify-center rounded outline-none focus:outline-none  bg-[#ffc01fdf] hover:bg-[#ffc01f6e] active:bg-[#ffc01f] py-2 px-3 min-w-max text-base pr-3.5 transition-all "
              aria-label="Catalog"
              onClick={() => setOpen(!open)}
            >
              <svg
                classname="md:mr-1"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <span className="block md:hidden">Каталог</span>
            </button>
            <div className="flex w-2/4 m:hidden">
              <input
                type="text"
                name="search"
                autocomplete="off"
                className="h-12 block w-full pr-5 border-2 border-r-0 rounded-br-none transition-all rounded-tr-none rounded-md border-gray-300 hover:border-gray-400 focus:border-[#ffc01f7d] focus:ring-0 outline-none py-1 px-3 placeholder-gray-400"
                placeholder="название товара или артикул"
                id="options-menu"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button
                className="h-12 inline-flex items-center justify-center rounded outline-none focus:outline-none   bg-[#ffc01fd9] hover:bg-[#ffc01f7d] active:bg-[#ffc01f] py-2 px-3 text-sm rounded-bl-none rounded-tl-none "
                aria-label="Search"
              >
                <svg
                  color="#222222"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <Link to="cart">
              <ShoppingCartOutlined style={{ fontSize: "32px" }} />
            </Link>
            <div className="flex items-center cursor-pointer">
              <svg
                class="mr-0.5"
                height="32"
                width="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M20 10.1818C20 15.0742 15.2715 19.4293 13.0851 21.1815C12.4432 21.696 11.5568 21.696 10.9149 21.1815C8.72855 19.4293 4 15.0742 4 10.1818C4 8.01186 4.84285 5.93079 6.34315 4.3964C7.84344 2.86201 9.87827 2 12 2C14.1217 2 16.1566 2.86201 17.6569 4.3964C19.1571 5.93079 20 8.01186 20 10.1818Z"
                  stroke="#9BA1A7"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#9BA1A7"
                  stroke-width="2"
                ></path>
              </svg>
              <Select
                className="w-28 sm:hidden"
                bordered={false}
                defaultValue="Душанбе"
                options={[
                  {
                    value: "Душанбе",
                    label: "Душанбе",
                  },
                  {
                    value: "Кулоб",
                    label: "Кулоб",
                  },
                  {
                    value: "Истаравшан",
                    label: "Истаравшан",
                  },
                  {
                    value: "Вахдат",
                    label: "Вахдат",
                    disabled: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        title=" "
        closable={false}
        placement="left"
        onClose={openMenu}
        open={open}
        extra={
          <div className="flex justify-between gap-28 items-center">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <Button onClick={openMenu}>X</Button>
          </div>
        }
      >
        <Menu
          onClick={onClick}
          style={{
            width: 325,
          }}
          mode="vertical"
          items={items}
        />
      </Drawer>

      <Outlet />

      <div className=" bg-black text-white">
        <div className="container mx-auto py-20 ">
          <div className="flex justify-center items-start gap-x-40 gap-y-20 flex-wrap">
            <div>
              <p>Телефоны справочной службы</p>
              <ul>
                <li className="mb-3">
                  <Link
                    to="tel:900"
                    className="font-family-bold border-b border-dashed border-white border-opacity-50 hover:text-[#ffc01f]"
                  >
                    900
                  </Link>
                </li>
                <li>
                  <Link
                    to="tel:+992488881111"
                    class="font-family-bold border-b border-dashed border-white border-opacity-50 hover:text-[#ffc01f]"
                  >
                    +992 48-888-1111
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-3">
                  <Link className="hover:text-[#ffc01f]" to="/catalog">
                    Каталог товаров
                  </Link>
                </li>
                <li className="mb-3">
                  <Link className="hover:text-[#ffc01f]" to="smartfony">
                    Смартфоны
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#ffc01f]" to="televizory">
                    Телевизоры
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="mb-3">
                  <Link className="hover:text-[#ffc01f]" to="stiralny">
                    Стиральные машины
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-[#ffc01f]" to="kondisioner">
                    Кондиционеры
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p class="text-gray-400 text-sm mb-4">Мы в соцмедиа</p>
              <div className="flex gap-3 items-center">
                <Link
                  className="transform transition-all hover:scale-110"
                  to="#"
                >
                  <img src={facebook} alt="" />
                </Link>
                <Link
                  className="transform transition-all hover:scale-110"
                  to="#"
                >
                  <img src={instagram} alt="" />
                </Link>
                <Link
                  className="transform transition-all hover:scale-110"
                  to="#"
                >
                  <img src={telegram} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <hr className="text-white opacity-10 my-5" />
          <div class="flex justify-between px-10">
            <span class="text-gray-400 text-sm">
              © 2023 ОАО «Алиф Банк». г. Душанбе, 101 мкр-н, ул. Багаутдинова, 9
            </span>
            <Link to="mailto:support@alif.tj" className="hover:text-[#ffc01f]">
              support@alif.tj
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
