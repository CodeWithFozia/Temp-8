import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


interface ProductPageProps {
    params : Promise<{slug : string}>
}

async function getProduct(slug : string) : Promise<Product> {
    return client.fetch(
        groq`*[_type == "products" && slug.current == $slug][0] {
        _id,
        title,
        _type,
        image,
        description,
        price,
        }`, {slug}
    )
}


export default async function ProductPage({params} : ProductPageProps){
    const {slug} = await params;
    const products = await getProduct(slug)

    return(
        <div className="max-w-7xl- mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
                <div className="aspect-square">
                    {products.image && (
                        <Image src={urlFor(products.image).url()} alt={products.title} width={500} height={500}
                        className="rounded-lg shadow-md"/>
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">
                        {products.title}
                    </h1>
                    <p>
                        {products.description}
                    </p>
                    
                    <p className="text-2xl font-sans">
                        ${products.price}
                    </p>
                </div>
            </div>
        </div>
    )
}