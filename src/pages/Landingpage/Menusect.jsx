import React from "react";
import { MdFoodBank } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoIosRestaurant } from "react-icons/io";
import Card from "./Card";

const Menusect = () => {
  return (
    <div className="px-5 py-15 bg-white">
      <div className="flex items-center justify-center">
        <p className="text-[#c05204] text-center font-semibold bg-gray-100 rounded-full p-2 w-fit">
          Browse Our Menu
        </p>
      </div>
      <h1 className="text-2xl sm:text-4xl md:text-5xl text-[#8B4513] font-bold text-center mt-5">
        Delicious meals <i className="text-[#c05204]">at your fingertips</i>{" "}
      </h1>
      <div className="flex flex-wrap justify-center mt-5 gap-5 p-5">
        <Card
          icon={<MdFoodBank size={"40px"} className="" />}
          header={"Breakfast"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae porro sed illum recusandae est pariatur eius iusto explicabo dolorum eligendi. At consequatur quod commodi harum? Inventore ad maxime earum dicta!"
          }
        />

        <Card
          icon={<FaBowlFood size={"40px"} className="" />}
          header={"Main Dishes"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae porro sed illum recusandae est pariatur eius iusto explicabo dolorum eligendi. At consequatur quod commodi harum? Inventore ad maxime earum dicta!"
          }
        />

        <Card
          icon={<IoFastFoodOutline size={"40px"} className="" />}
          header={"Drinks"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae porro sed illum recusandae est pariatur eius iusto explicabo dolorum eligendi. At consequatur quod commodi harum? Inventore ad maxime earum dicta!"
          }
        />

        <Card
          icon={<IoIosRestaurant size={"40px"} className="" />}
          header={"Deserts"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae porro sed illum recusandae est pariatur eius iusto explicabo dolorum eligendi. At consequatur quod commodi harum? Inventore ad maxime earum dicta!"
          }
        />
      </div>
    </div>
  );
};

export default Menusect;
