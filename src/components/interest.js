import React from 'react'
import Food from '../images/fast-food.svg'
import Veg from '../images/veg.svg'
import Drinks from '../images/drinks.svg'
import Restaurant from '../images/restaurant.svg'


const Service = () => {
    return(
        <section>
            <h2>Pick an interest</h2>
            <div id='interests'>
                <div>
                    <img src={Food} alt='food-img' />
                    <h4>Fast food</h4>
                    <p>All sorrows are lesss with bread.</p>
                </div>
                <div>
                    <img src={Veg} alt='veg-img' />
                    <h4>Vegetables &amp; Fruits</h4>
                    <p>May not want it, but good for you.</p>
                </div>
                <div>
                    <img src={Drinks} alt='drink-img' />
                    <h4>Drinks &amp; Cocktails</h4>
                    <p>I feel sad for those who don't drink.</p>
                </div>
                 <div>
                     <img src={Restaurant} alt='restaurant-img' />
                    <h4>Restaurants</h4>
                    <p>All sorrows are lesss with bread.</p>
                </div>
            </div>
        </section>
    )
}

export default Service