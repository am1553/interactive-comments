import React, { useState } from 'react'
import Data from '../../data.json'
import Footer from './Footer'
import Header from './Header'
import Message from './Message'

function UserCard(props) {
    

    return (
        <div className='user-card'>
            <Header userAvatar={Data.comments[props.arrayCount].user.image.webp} userName={Data.comments[props.arrayCount].user.username}  />
            <Message userMessage={Data.comments[props.arrayCount].content} />
            <Footer />
        </div>
    )
}

export default UserCard
