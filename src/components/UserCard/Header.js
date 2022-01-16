import React from 'react'

function Header(props) {
    return (
        <div className='header'>
            <img src={props.userAvatar} alt="" />
            <h4> {props.userName} </h4>
        </div>
    )
}

export default Header
