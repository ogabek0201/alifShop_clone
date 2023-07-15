import React from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/img/emptycart.png";

const Cart = () => {
  return (
    <div>
      <div className="container mx-auto h-[85vh] px-10">
        <h1 className="text-black font-bold text-2xl">Корзина</h1>
        <div className="mt-10 mb-6 flex items-center justify-center">
          <div className="text-center mb-10">
            <img src={cart} alt="" className="block mx-auto" />
            <h2 className="font-bold text-2xl leading-9 mb-3">Внутри пока нет товаров</h2>
            <p className="mb-4">Перейдите в раздел с товарами, чтобы оставить заявку</p>
            <Link to='/catalog' className="inline-flex items-center justify-center rounded outline-none focus:outline-none  bg-[#ffc01fc6] hover:bg-[#ffc01f5f] active:bg-[#ffc01f] py-3 px-5 text-base ">
            Перейти в раздел
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
