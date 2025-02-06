"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { four } from "@/sanity/lib/quries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { addToCart } from "@/app/action/actions";

const FeaturedProduct = () => {
    
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproducts() {
            const fetchedProducts : Product[] = await client.fetch(four)
            setProducts(fetchedProducts)
        }
        fetchproducts()
    },[])

     const handleAddToCart = (e:React.MouseEvent,product:Product) => {
            e.preventDefault()
            Swal.fire({
    
                position : "top-right",
                icon : "success",
                title : `${product.title} added to cart`,
                showConfirmButton : false,
                timer : 1000
            })
            addToCart(product)
            
        }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Featured Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((products) =>  (
                <div 
                key={products._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                    
                
                <Link href={`/product/${products.slug.current}`}>
                 {products.image && (
                    <Image
                    src={urlFor(products.image).url()}
                    alt={products.title}
                    width={200}
                    height={200}
                    
                    />
                 )}
                 <h2 className="text-lg font-semibold mt-4">  {products.title}</h2>
                 <p className="text-gray-500 mt-2">
                    {products.price ? `$${products.price}` : "price not available"}
                 </p>
                 <button 
                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                 onClick={(e) => handleAddToCart(e,products)}

                 >
                    Add To Cart
                 </button>
                 </Link>
                
                </div>
            ))}
            </div>
           </div>
    )

}

export default FeaturedProduct;