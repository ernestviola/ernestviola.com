import React from 'react'

const Contact = () => {
  return (
    <div className='page'>
        <form>
            <label>First Name:
                <input type='text' name='first name' />
            </label>
            <label>Last Name:
                <input type='text' name='last name' />
            </label>
            <label>Email:
                <input type='text' name='email' />
            </label>
            <label>Message:
                <input type='text' name='message' />
            </label>
            <input type='submit' value='Submit' />
        </form>
    </div>
  )
}

export default Contact