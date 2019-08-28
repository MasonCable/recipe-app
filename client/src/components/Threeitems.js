import React from 'react'

const Threeitems = (props) => {
    const { foodArr } = props

    return (
        <div className="card">
            <img src={foodArr.image} alt=""/>
        </div>
    )
}

export default Threeitems