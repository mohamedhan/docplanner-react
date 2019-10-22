import React from 'react'

const Country = props => {
    return (
        <div className="country-se">
            <h2 class="improve-lives-title">Improve the lives of millions.<br /> Change yours forever</h2>
            <p class="improve-lives-parag">More than 1000 team mates share our same vision, goals and passion.<br /> With
                offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City<br /> and Curitiba, our search for great talent
                never stops.</p>
            <div className="country-section">
                {props.country.map(el =>
                    <div className={el.class}>
                        <img className="photo" src={el.image} />
                        <div className="menu-country">
                            <p className="name-country">{el.pays}</p>
                            <button className="btn-country"> {el.btn} </button>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Country
