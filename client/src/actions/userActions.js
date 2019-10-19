import axios from 'axios'
import store from '../store'

const apiKey = 'c4ea27eb1bfbd60afdd06aa6769682f6'
const appId = '2ec14519'
const callLink = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?'

export const buildDishType = () => {
    // let types = ['breakfast', 'lunch', 'dinner', 'snacks']
    let types = [
        {
            breakfast: {
                title: 'breakfast',
                image: 'https://www.edamam.com/web-img/1c7/1c71765bd90bb8d013c5d8f3229c0c3a'
            },
            lunch: {
                title: 'lunch',
                image: ''
            }
        }
    ]

    for (let i = 0; i < types.length; i++) {
        axios.get(`${callLink}q='beef'&app_id=${appId}&app_key=${apiKey}&from=0&to=1&dishType=${types[i]}`)
            .then(res => {
                console.log(res.data.hits)
                store.dispatch({
                    type: 'FOOD_TYPES',
                    payload: res.data.hits
                })
            })
    }
}