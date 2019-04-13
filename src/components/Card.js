import React from 'react'

const Card = ({id, name, email}) => {
    return (
        <div className="tc w-20 grow bg-light-green br3 pa3 ma2 dib bw1 shadow-3">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="Robots"/>
            <div>
                <h2 className="truncate-m">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card
