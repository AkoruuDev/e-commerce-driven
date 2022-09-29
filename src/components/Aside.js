function Item({ item }) {
    console.log(item)
    return (
        <>
        
        </>
    )
}

export default function Aside({ setShop, shop }) {
    return(
        <>
            {shop?.map(item => <Item key={item.id} item={item} />)}
        </>
    )
}