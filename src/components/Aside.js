import styled from "styled-components"

function Item({ item }) {
    console.log(item)
    return (
        <>
        oioi
        </>
    )
}

export default function Aside({ setShop, shop }) {
    return(
        <Container>
            {shop?.map(item => <Item key={item.id} item={item} />)}
        </Container>
    )
}

const Container = styled.div`
    width: 30vw;
    height: 100vh;
    background-color: #f8f8f8;
    box-shadow: 0 10px 20px 0 grey;

    position: fixed;
    right: 0;
    top: 0;
`