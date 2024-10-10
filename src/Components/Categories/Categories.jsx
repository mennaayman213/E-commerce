import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function Categories() {
  const [allCategory, setAllCategory] = useState([]);

  // ! Get All Category
  async function getAllCategory() {
    try {
      let { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      setAllCategory(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <>
      <div className="py-10 flex flex-wrap justify-center gap-y-10 w-[90%] mx-auto">
        {allCategory.data ? (
          allCategory.data.map((category) => (
            <div key={category._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center p-4 border-2 rounded-3xl border-none hover:shadow-lg hover:shadow-[#0AAD0A] duration-700">
              <img
                src={category.image}
                className="w-full h-[300px] object-cover"
                alt={category.name}
              />
              <h2 className="font-medium mt-5">{category.name}</h2>
            </div>
          ))
        ) : <div className="py-7 flex justify-center">
        <Loading />
    </div> }
      </div>
    </>
  );
}
