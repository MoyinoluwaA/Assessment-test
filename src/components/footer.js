import React from 'react'

const Footer = () => {
    return(
        <footer>
            <div>
                Contact us
                <span>
                    <i className='fa fa-twitter' />
                    <i className='fa fa-youtube-play' />
                    <i className='fa fa-facebook' />
                </span>
            </div>
            <div className='copyright'>
                <span>Terms &amp; Conditions. Privacy Policy</span>
                <span>&copy; Copyright 2021 FoodBag is a registered trademark</span>
            </div>
        </footer>
    )
}

export default Footer