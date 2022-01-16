import React, { useState } from 'react'

function Footer() {

    const [count, setCount] = useState(0)



    return (
        <div className='footer'>
            <div className="counter">
                <button 
                    onClick={() => setCount(count + 1)}>
                    <img src="./images/icon-plus.svg" alt="plus image" />
                </button>

                <span className='current-count body-bold'> {count} </span>

                <button 
                    onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>
                    <img src="./images/icon-minus.svg" alt="minus image" />
                </button>
            </div>
            <div className="reply">
                <button className='reply-btn'>
                    <img src="./images/icon-reply.svg" alt="reply icon" />
                    <span className='body-bold'>Reply</span>
                </button>
            </div>
        </div>
    )
}

export default Footer
