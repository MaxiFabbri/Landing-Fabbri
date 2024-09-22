import Button from "./button"

export default function Card (props) {
    const handleClick = () => {
        console.log(`Compre el producto: ${props.productName}`)
      }
    const path = `./images/${props.img}`
    return <div className="card">
            <img className="card-img" src={path} alt={props.alt} />
            <h3>{props.productName}</h3>
            <h4>{props.productPrice}</h4>
            <p>{props.productDescription}</p>
            <Button texto="Comprar" color={'#9999ff'} click={handleClick} />
        </div>
}