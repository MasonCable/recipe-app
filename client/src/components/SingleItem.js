import React from 'react'


const SingleItem = ( props ) => {

    const { foodArr } = props

    const styles = {
    backgroundImage: `url(${foodArr.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
    }

    return (
        <div className='card d-flex m-5' style={{width: 25 + 'em'}}>
            <img src={foodArr.image} alt={foodArr.label}  style={{ width: 100 + '%' }}/>
            <div className="card-body">
                <h5 className="card-title">{ foodArr.label }</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Calories</strong>: {Math.round(foodArr.calories)}</li>
                    <li className="list-group-item" ><strong>Description</strong>: {foodArr.dietLabels.join(', ')}</li>
                 </ul>
            </div>
        </div>
    )
}

export default SingleItem

