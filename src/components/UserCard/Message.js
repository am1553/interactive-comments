import React from 'react'

function Message(props) {
    return (
        <div className='message'>
            <p> {props.userMessage} </p>
        </div>
    )
}

export default Message
