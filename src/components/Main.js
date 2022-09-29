import Products from "../services/Mock";

function Product({ product }) {
    console.log(product)
}

export default function Main() {
    return(
        <>
            {Products.map(product => <Product product={product} />)}
        </>
    )
}