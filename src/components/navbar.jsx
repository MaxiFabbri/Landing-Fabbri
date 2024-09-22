function NavItem (props) {
    return <li style={{width: props.width}}> { props.item }</li>;
}

export default function Navbar (props) {
    const items = [...props.navbarElements]
    return<>
        <div className="sticky">
            <ul className="navbar-container">
                <li style={{width:props.width}}>LOGO</li>
                {items.map((el)=> <NavItem item={el} width={props.width}/>)}
            </ul>
        </div>    
    </> 
}


