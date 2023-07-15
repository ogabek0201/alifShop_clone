import React from "react";
import { Link } from "react-router-dom";
import er from '../../assets/img/404.svg'

const Error = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-[80vh]">
      <div className="mt-10 mb-6 text-center">
            <img src={er} alt="" />
            <h1 className="font-bold text-2xl leading-9 mb-3">Здесь ничего нет</h1>
            <p className="mb-4">Попробуйте вернуться назад или поищите что-нибудь другое.</p>
            <Link to='/' className="inline-flex items-center justify-center rounded outline-none focus:outline-none  bg-[#ffc01fcd] hover:bg-[#ffc01f84] active:bg-[#ffc01f] py-3 px-5 text-base">Перейти на главную</Link>
      </div>
    </div>
  );
};

export default Error;
