import styled from "styled-components"

function handleRemoveItem(setShop, shop, item) {
    const newArray = shop.filter(prod => prod.id !== item.id)
    setShop(newArray)
}

function Item({ item, setShop, shop }) {
    console.log(item)
    return (
        <ProdBox>
            <Image src={item.imagem} />
            <Info>
                <p>{item.nome}</p>
                <p>{item.preco}</p>
            </Info>
            <Button onClick={() => handleRemoveItem(setShop, shop, item)}>x</Button>
        </ProdBox>
    )
}

export default function Aside({ setShop, shop }) {
    return(
        <Container>
            {shop?.map(item => <Item key={item.id} item={item} setShop={setShop} shop={shop} />)}
        </Container>
    )
}

const Container = styled.div`
    width: 30vw;
    height: 100vh;
    background-color: #f8f8f8;
    box-shadow: 0 10px 20px 0 grey;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    right: 0;
    top: 0;
`

const ProdBox = styled.div`
    width: 90%;
    height: 50px;
    margin: 20px 0;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Image = styled.img`
    height: 90%;
    margin: 0 0 0 3%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button = styled.div`
    width: 20px;
    height: 20px;
    margin: 0 3% 0 0;
    background-color: #ccccc9;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: #a9a9a9;
        box-shadow: 1px 1px 3px 1px #b8b8b8;
    }
`