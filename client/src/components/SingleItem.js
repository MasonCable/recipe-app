import React from 'react'


const SingleItem = ( props ) => {

    const { foodArr } = props

    
    return (
        <div className='card d-flex m-5'>
            <img src={foodArr.image} alt={foodArr.label}  style={{ width: 100 + '%' }}/>
            <div className="card-body">
                <h5 className="card-title">{ foodArr.label }</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                 </ul>
            </div>
        </div>
    )
}

export default SingleItem