"use client";
import React, { useEffect, useState } from "react";
import { cloths } from "@/all-json/cloths";

const FilterDynamic = () => {

  const category: string[] = [
    "T-shirts",
    "Jeans",
    "Shirts",
    "Jackets",
    "Shorts",
  ];

  const[activeCategory,setActiveCategory] =useState<String[]>([])

const manageActiveCategory=(category:String)=>{
    console.log("cat: ",category)

    if(activeCategory.includes(category)){

        const newActiveCategory = activeCategory.filter((el)=>el!=category);
        setActiveCategory(newActiveCategory);

    }else{
        setActiveCategory([...activeCategory,category])
    }
}

console.log(activeCategory)


  useEffect(() => {
    console.log(cloths);
  }, []);

  return <div>
    <div className=" mt-4">
        {
            category.map((cat:String,i: number)=>(
                <button onClick={()=>manageActiveCategory(cat)} className=" text-white bg-pink-600 rounded-md p-1 px-2 mx-4 font-bold" key={i}>{cat}</button>

            ))
        }
    </div>
  </div>;
};

export default FilterDynamic;
