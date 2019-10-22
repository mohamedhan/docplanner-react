import React from 'react';
const Stat = (props) => {
    return (
        <div className='stats'>
            <div className="intro">
                <h4> The world's biggest healthcare platform</h4>
                <p class="statIntro">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            </div>
            <div className="statBoxes">
                {props.stat.map(el => <div className={el.class}>
                    <div className="box">
                        <img  src={el.img} />
                        <h5>{el.title}</h5>
                        <p>{el.parag}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};
export default Stat;