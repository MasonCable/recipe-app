import React,{ Component } from 'react'
import { Button } from 'semantic-ui-react'

class InitialForm extends Component {
    state = {
        fName: '',
        lName: '',
        weight: '',
        height: '',
        gender: '',
        goal: '',
        buttonColor:'blue'
    }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log(this.state)
        // localStorage.setItem('userData', this.state)
        // console.log(localStorage.getItem('userData'))
    }

    handleChange = (e) => {
        e.preventDefault()
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){ 
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="three fields">
                    <div className="field">
                        <label>First name</label>
                        <input type="text" placeholder="First Name" name='fName' value={this.state.fName} onChange={this.handleChange}/>
                    </div>
                    
                    <div className="field">
                        <label>Last name</label>
                        <input type="text" placeholder="Last Name" name="lName" value={this.state.lName} onChange={this.handleChange}/>
                    </div>

                    <div className="field">
                        <label>Weigth</label>
                        <input type="text" placeholder="Weigth" name="weight" value={this.state.weight} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className='ui form'>
                <div className="inline fields">
                  <label >What is your gender?</label>
                    <div className="ui radio checkbox">
                          <div className="field">

                        <input type="radio" 
                               value="male" 
                               name="gender"
                               checked={this.state.gender === 'Male'} 
                               onChange={this.handleChange}                                  
                               />

                        <label >Male</label>  
                    </div>
                    </div>
                    <div className="ui radio checkbox">
                        <div className="field">
                                <input type="radio" 
                                    value="female" 
                                    name='gender'
                                    checked={this.state.gender === 'Female'}
                                    onChange={this.handleChange}
                                    
                                />
                            <label>Female</label>  
                        </div>
                    </div>
                    </div>
                </div>

                {/* <div className="form-group">
                    <label>What is your gender</label>
                    <select className="form-control" onChange={this.handleChange} id='genderForm'>
                        <option value='female' name='gender' >Female</option>
                        <option value='male' name='gender' >Male</option>
                    </select>
                </div> */}

                <div className="inline fields">
                    <label>Are you looking to loose weight or gain weight? </label>
                        <div className="field">
                            <input type="radio"
                                   name="goal"
                                   value="loose"
                                   checked={this.state.goal === 'Loose Weight'}
                                   onChange={this.handleChange}
                                   className='hidden'
                             />
                             <label>Loose Weight</label>
                        </div>

                        <div className="field">
                            <input type="radio"
                                   name="goal"
                                   value="gain"
                                   checked={this.state.goal === 'Gain Weight'}
                                   onChange={this.handleChange}
                                   className='hidden'
                             />
                             <label>Gain Weight</label>
                        </div>
                </div>
                <Button className="loginSubmit" size="huge" id='shadow'
	 						color={this.state.buttonColor} type="submit" content="Click Here to Register" />
            </form>
        )
    }
}

export default InitialForm