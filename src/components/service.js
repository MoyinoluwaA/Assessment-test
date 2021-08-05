import React from 'react'
import IllustrationOne from '../images/Illustration_1.svg'
import IllustrationTwo from '../images/illustration_2.svg'
import IllustrationThree from '../images/illustration_3.svg'

const Service = () => {
    return(
        <section id='service'>
            <h2>How we serve you</h2>
            
            <div id='steps'>
                <div>
                    <img src={IllustrationOne} alt='illustration' />
                    <h4>Tell us where you are</h4>
                    <p>Select the location you want us to deliver.</p>
                </div>
                <div>
                    <img src={IllustrationTwo} alt='illustration' />
                    <h4>Tell us what you want</h4>
                    <p>Browse the type of food that interest you.</p>
                </div>
                <div>
                    <img src={IllustrationThree} alt='illustration' />
                    <h4>We'll come running</h4>
                     <p>Your order will be delivered to you in no time.</p>
                </div>
            </div>
        </section>
    )
}

export default Service