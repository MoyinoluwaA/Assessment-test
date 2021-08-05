import React from 'react'

const Nav = () => {
    return(
        <div>
            <div className='intro-text'>
                <h1>FoodBag</h1>
                <p>Anything food, we have you covered.</p>
            </div>
            <div className='select-location'>
                <h2>Where are you?</h2>
                <select>
                    <option value='Bodija market'>Bodija Market</option>
                </select>
            </div>
        </div>
    )
}

export default Nav