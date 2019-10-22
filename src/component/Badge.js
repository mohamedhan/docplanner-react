import React from 'react'

const Badge = (props) => {
    return (
        <div className="badges" >
            {props.badge.map(el =>
                <div   className={el.class}>
                    <h2 className="title">{el.title}</h2>
                    <p className="description">{el.description}</p>
                    {el.list && <select class="serviceCardSelect">{el.list.map(el=>
                        
                    <option>{el}</option>)}
                       
                    </select>
                        }
                    <img className="image" src={el.image} />
                   

                </div>
                
           )
            }

        </div>
    )
}

export default Badge
