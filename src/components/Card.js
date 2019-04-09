import React from 'react'

const Card = ({id, name, email}) => {
    return (
        <div className="tc grow bg-light-green br3 pa ma2 dib bw1 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="Robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card
