import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default function ReviewPage({
    params,
}: {
    params: { productId: string; reviewId: string };
}) {
    const random = getRandomInt(2);
    if(random == 1){
        throw new Error("error loading review")
    }
    const { productId, reviewId } = params;
    if(parseInt (reviewId)>1000) 
        notFound();
    // redirect("/products")
    return <h1>Review {reviewId} for product {productId}</h1>;
}