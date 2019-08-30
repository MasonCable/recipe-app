import React from 'react'

const Threeitems = (props) => {
    const { foodArr } = props

    return (
        <div className="card">
            <img src={foodArr.image} style={{width: 5 + 'em'}}/>
        </div>
    )
}

export default Threeitems