import React from 'react'

const Threeitems = (props) => {
    const { foodArr } = props

    return (
        <div className="container d-flex justify-content-around ">
            <div className="flex-wrap" style={{textAlign: 'center'}}>
                <img src={foodArr.image} style={{width: 10 + 'em'}}/>
                <h5 style={{color: '#fff'}}>{foodArr.label}</h5>
            </div>
        </div>
    )
}

export default Threeitems