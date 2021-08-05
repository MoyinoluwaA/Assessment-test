import React from 'react'

const Footer = () => {
    return(
        <footer>
            <div>
                Contact us
                <div className='sm-block'>
                    <i className='fa fa-twitter sm-icon' />
                    <i className='fa fa-youtube-play sm-icon' />
                    <i className='fa fa-facebook sm-icon' />
                </div>
            </div>
            <div className='copyright'>
                <span>Terms &amp; Conditions. Privacy Policy</span>
                <span>&copy; Copyright 2021 FoodBag is a registered trademark</span>
            </div>
        </footer>
    )
}

export default Footer