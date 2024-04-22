"use client";
import React, { useEffect, useState } from "react";
import {cloths } from "@/all-json/cloths";

const FilterDynamic = () => {

  const[allCloths,setAllCloths] =useState<any[]>(cloths);

  const category: string[] = [
    "T-shirts",
    "Jeans",
    "Shirts",
    "Jackets",
    "Shorts",
  ];
  const[activeCategory,setActiveCategory] =useState<String[]>([]);

  const colors: string[] = [
    "Red",
    "Blue"
  ];
  const[activeColor,setActiveColor] =useState<String[]>([])

  

const manageActiveCategory=(category:String)=>{
   

    if(activeCategory.includes(category)){

        const newActiveCategory = activeCategory.filter((el)=>el!=category);
        setActiveCategory(newActiveCategory);

    }else{
        setActiveCategory([...activeCategory,category])
    }
}

console.log("activeCategory: ",activeCategory)

const manageActiveColor=(color:String)=>{


    if(activeColor.includes(color)){

        const newActiveColor = activeColor.filter((el)=>el!=color);
        setActiveColor(newActiveColor);

    }else{
        setActiveColor([...activeColor,color])
    }
}

console.log("activeColor: ",activeColor)


const manageData=()=>{
    
       const newData = allCloths.filter((cloth)=>(activeCategory.length===0 || activeCategory.includes(cloth.category)) && (activeColor.length===0 || activeColor.includes(cloth.color)));

        setAllCloths(newData)



}


  useEffect(() => {
    manageData();
  }, [activeCategory, activeColor]);

  return <div>
    {/* category buttons */}
    <div className=" mt-4">
        {
            category.map((cat:String,i: number)=>(
                <button onClick={()=>manageActiveCategory(cat)} className=" text-white bg-pink-600 rounded-md p-1 px-2 mx-4 font-bold" key={i}>{cat}</button>

            ))
        }
    </div>

    {/* color buttons */}
    <div className=" mt-4">
        {
            colors.map((color:String,i: number)=>(
                <button onClick={()=>manageActiveColor(color)} className=" text-white bg-pink-900 rounded-md p-1 px-2 mx-4 font-bold" key={i}>{color}</button>

            ))
        }
    </div>
        {/* cloths Data */}
        <div className=" mt-10">
        {
            allCloths?.map((cloth,i: number)=>(
               <div key={i} className=" m-2 text-white bg-slate-400 rounded-md p-1 px-2 mx-1 font-bold flex flex-col justify-start items-center">
                 <span  className="my-1" >{cloth.name}</span>
                 <span  className="my-1" >{cloth.category}</span>
                 <span  className="my-1" >{cloth.color}</span>
               </div>

            ))
        }
    </div>
  </div>;
};

export default FilterDynamic;
