import React from 'react'

const Navmenu = (props) => {
    return ( 
        <div className="nav-menu">
            <a href="#"><img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
                alt="Docplanner Group" /></a>
            <ul className="menu">
                {props.elem.map(el =>
                    <li className="menu-item">{el.item}{el.dropdown && <ul className="departements">
                        {el.dropdown.map(el => <li className="depar-item">{el}</li>)}
                    </ul>}
                    </li>
                )
                }
            </ul>
        </div>
    )
}

export default Navmenu
