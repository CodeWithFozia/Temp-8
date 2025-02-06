"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { allCategories } from "@/sanity/lib/quries";
import { urlFor } from "@/sanity/lib/image";

const TopCategories = () => {
    
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproducts() {
            const fetchedProducts : Product[] = await client.fetch(allCategories)
            setProducts(fetchedProducts)
        }
        fetchproducts()
    },[])

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Top Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {products.map((products) =>  (
                <div 
                key={products._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                    
                
                
                 {products.image && (
                    <Image
                    src={urlFor(products.image).url()}
                    alt={products.title}
                    width={600}
                    height={200}
                    
                    />
                 )}
                 <h2 className="text-lg font-semibold mt-4">  {products.title}</h2>
                 
                 
                
                </div>
            ))}
            </div>
           </div>
    )

}

export default TopCategories;