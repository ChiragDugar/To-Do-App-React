import React, {Component} from 'react'

class Addtodo extends Component {
    state = {
        content: ""
    }

    handleChange = (e) =>{
        this.setState({
            content: [e.target.value]
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addtodo(this.state)
        this.setState({
            content: ""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>Add a new Todo: </label>
                    <input type="text" onChange={ this.handleChange } value={ this.state.content }/>
                </form>               
            </div>
        )
    }
}

export default Addtodo