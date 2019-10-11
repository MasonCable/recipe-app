import React, { Component} from 'react'
import { Link, Redirect } from 'react-router-dom'


class Proteins extends Component {
    state = {
        protein: [
            {
                name: 'beef',
                image: 'https://media.istockphoto.com/photos/grilled-beef-steaks-picture-id540233806?k=6&m=540233806&s=612x612&w=0&h=9y2uufwDYHT0f6oBzyCsFnyvEvzscdAEy6GRjrDY5Is='
            },
            {
                name: 'chicken',
                image: 'https://s3.envato.com/files/232149407/DSC_5813%20finish%20joy.jpg'
            },
            {
                name: 'shrimp',
                image: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1487276867/GettyImages-506910100.jpg?itok=mOHRx-27'
            },
            {
                name: 'pork',
                image: 'https://thumbs.dreamstime.com/b/raw-pork-chop-38311503.jpg'
            },
            {
                name: 'salmon',
                image: 'https://media.istockphoto.com/photos/raw-salmon-fillet-picture-id148284125?k=6&m=148284125&s=612x612&w=0&h=A1M3vyrQgy5_ZhuXek-KbmMjQnzpv1f5HX9qvo4dYDI='
            },
            {
                name: 'crab',
                image: 'https://media.istockphoto.com/photos/crab-picture-id182053357?k=6&m=182053357&s=612x612&w=0&h=dqmQzhlaQMgCQtIyTwd0LFht4lszNLHvhm7LV5U85ZA='
            },
            {
                name: 'lobster',
                image: 'data:image/jpeg;base64,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'
            },
            {
                name: 'tofu',
                image: 'https://media.istockphoto.com/photos/block-and-cubes-of-tofu-picture-id465944034?k=6&m=465944034&s=612x612&w=0&h=cgyC-zC3onKzYpgO-w8yAam-CLsJtrO7GtMXa_fHNnM='
            }
        ]
        
    }

    render(){        
        return (                
            <div className="container mt-4 d-flex flex-wrap justify-content-around">                            
                {this.state.protein.map(item => (
                    
                        <div className='card hoverState' style={cardStyle} key={item.name}>
                            <Link to={`/recipes/${item.name}`}>
                            <img src={item.image}  
                                style={{width: 100 + '%', height: 10 + 'em'}}
                                alt={item.name}
                            />
                                <h2 style={{color: 'black'}}>{item.name}</h2>
                            </Link>
                        </div>
                    
                ))}
            </div>
        )
    }
}

export default Proteins

const cardStyle = {width: 15 + 'em', textAlign: 'center', margin: 2 + 'em', border: 'none'}