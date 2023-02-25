import React, { useState } from 'react'

const Contact = () => {
    const [message, setMessage] = useState('')
    return (
        <div>
            <h1>Get in Touch!</h1>
            <form>
                <div>
                    <label>
                        Name:
                        <br />
                        <input type='text' name='name' />
                    </label>
                    <label>
                        Email Address:
                        <br />
                        <input type='text' name='email' />
                    </label>
                    <label>Message:
                        <textarea name='message' value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                    </label>
                </div>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default Contact