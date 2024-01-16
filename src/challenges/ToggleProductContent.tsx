"use client"
import { products } from "@/all-json/product";
import { useEffect, useState } from "react";

export default function ToggleProductContent() {

    const [productId, setProductId] = useState(0)


    useEffect(() => {

        setProductId(products[0].product_id)

    }, [])

    const setCurrentId = (id: number) => {
        setProductId(id)
        console.log(productId)
    }
    return (
        <div className="w-full flex flex-col justify-center items-center mt-5">
            <div className=" flex justify-between items-center ">
                {
                    products.map((product) => (
                        <button onClick={() => setCurrentId(product.product_id)} className={`bg-sky-600 p-2 rounded-md m-2 text-white ${product.product_id === productId && "bg-red-700"}`} key={product.product_id}>{product.name}</button>
                    ))

                }

            </div>
            <div className=" flex flex-col justify-center items-center mt-6 ">
                {
                    products.map((product) => (
                        product.product_id === productId && <div key={product.product_id} className=" p-2 flex flex-col justify-center items-start">

                            <span className=" text-2xl text-green-900">Title-- {product.name}</span>
                            <span className=" text-2xl">Category-- {product.category}</span>
                            <span className=" text-2xl">Price-- {product.price}</span>
                            <span className=" text-2xl">Stock-- {product.stock_quantity}</span>

                        </div>
                    ))

                }

            </div>
        </div>
    )
}
