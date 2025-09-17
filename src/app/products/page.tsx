import Link from "next/link"
export default function ProductList() {
    const pid=100;
    return (
        <div>
        <Link href="/">Home</Link>
        <h1>Product List</h1>
        <h2>Product 1</h2>
        <h2>Product 2</h2>
        <h2>Product 3</h2>
        <Link href={`/products/${pid}`}>Product {pid} </Link>
         </div>
    )  
}

//REPLACE CONCEPT IN LINKS- EASY - DIDNT SHOW HERE- LAZY