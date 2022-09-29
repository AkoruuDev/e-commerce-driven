import styled from "styled-components";
import Products from "../services/Mock";

function Product({ product, setShop, shop }) {
    console.log([product])
    return (
            <ProdBox>
                <Image src={product.imagem} />
                <Info>
                    <p>{product.nome}</p>
                    <p>{product.preco}</p>
                </Info>
                <Button onClick={() => setShop([product])}>Comprar</Button>
            </ProdBox>
    )
}

export default function Main({ setShop, shop }) {
    return(
        <Container>
            {Products.map(product => <Product
                key={product.id}
                product={product}
                setShop={setShop}
                shop={shop}
            />)}
        </Container>
    )
}

const Container = styled.main`
    width: 70vw;
    height: 100vh;

    display: flex;
    flex-wrap: wrap;
    
`

const ProdBox = styled.div`
   width:  300px;
   height: 400px;
   background-color: white;
   border-radius: 10px;
   margin: 5px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const Image = styled.img`
    width: 90%;
    height: 70%;
`

const Info = styled.div`
    width: 90%;
    height: 15px;
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
`

const Button = styled.div`
    width: 90%;
    height: 30px;
    background-color: #d0d0d0;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: #b0b0b0;
        box-shadow: 0 4px 10px 4px #c8c8c8;
    }
`