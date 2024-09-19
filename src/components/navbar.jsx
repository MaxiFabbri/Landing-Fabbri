export const Button = (props) =>{
    console.log(props)
    
    return (
        <button onClick={props.click} style={{backgroundColor: props.color , width: props.width, height: props.height}}>{props.texto}</button>
    )
}

export const Navbar = () => {

    return<></>

}


