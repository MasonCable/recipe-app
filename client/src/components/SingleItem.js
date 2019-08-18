import React from 'react'


const SingleItem = ( props ) => {

    const { foodArr } = props

    
    return (
        <div className='card d-flex m-5'>
            <img src={foodArr.image} alt={foodArr.label}  style={{ width: 100 + '%' }}/>
            <div className="card-body">
                <h5 className="card-title">{ foodArr.label }</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Calories</strong> {foodArr.calories}</li>
                    <li className="list-group-item" ><strong>Description</strong> {foodArr.dietLabels.join(', ')}</li>
                    <li className="list-group-item"><strong style={{color: '#ff6817'}}>Allergies</strong>: {foodArr.cautions}</li>
                 </ul>
            </div>
        </div>
    )
}

export default SingleItem