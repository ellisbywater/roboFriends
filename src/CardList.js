import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
    return (
        <div>
            {robots.map(robot => {
                return <Card key={robot.email} name={robot.name} email={robot.email} imgUrl={robot.imgUrl} />
            })}
        </div>
    )
}

export default CardList