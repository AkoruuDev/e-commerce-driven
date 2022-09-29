import Products from "../services/Mock";

function Product({ product }) {
    console.log(product)
    return (
        <div>
            <img src={product.imagem} />
            <div>
                <p>{product.nome}</p>
                <p>{product.preco}</p>
            </div>
            <div>Comprar</div>
        </div>
    )
}

export default function Main() {
    return(
        <>
            {Products.map(product => <Product key={product.id} product={product} />)}
        </>
    )
}