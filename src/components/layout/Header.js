import React from 'react'

function Header(){
    return (
        <header style={headerStyle}>
         <h2>To Do List</h2>

        </header>
    )
}
const headerStyle ={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '2px'
}
export default Header