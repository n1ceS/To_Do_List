import React,{Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
    getStyle = () => {
        return {
            fontWeight:'bold',
            fontSize: '1.2em',
            color:'#474747',
            width:'25%',
             padding: '2px',
             border:this.props.todo.done ? '2px solid #32a852'  : '2px solid #ccc',
             marginLeft: 'auto',
             marginRight: 'auto',
             marginTop: '20px',
             borderRadius: '5px',
             backgroundColor: 'none'
         }
    }
    buttonStyle = () => {
        return {
            visibility: this.props.todo.done ? 'visible' : 'hidden',
            fontWeight: 'bold',
            fontSize:'1em',
            background: "#ff4040",
            color: '#fff',
            border: 'none', // '2px solid #ccc',
            padding: '3px 6px',
            borderRadius: '20%',
            cursor: 'pointer',
            float: 'right'
        }
    }
    render(){
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
            <p>
                <input type="checkbox" 
                onChange = {this.props.markComplete.bind(this, id)}/>{' '}
            { title }
                <button  onClick={this.props.deleteToDo.bind(this,id)} style={this.buttonStyle()}>x</button>
            </p>
            </div>
        )    
        
    } 

}


TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired
}

export default TodoItem