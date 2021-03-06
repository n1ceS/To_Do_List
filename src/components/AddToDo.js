import React,{Component} from 'react'

export class AddToDo extends Component {
    state= {
        title: ''
    }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddToDo(this.state.title);
        this.setState({title: ''})
    }
    render(){
        return (
            <form onSubmit={this.onSubmit} className="addToDoForm">
                <input 
                    type="text"
                    name="title"
                    placeholder="Add Todo ..." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="ADD"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddToDo