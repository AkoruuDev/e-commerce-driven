import { useState } from "react"

function Item({ item }) {
    return (
        <></>
    )
}

export default function Aside() {
    const [shop, setShop] = useState([])
    return(
        <>
            {shop?.map(item => <Item key={item.id} item={item} />)}
        </>
    )
}