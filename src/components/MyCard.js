import React from 'react'
import "./MyCard.css"
export default function MyCard() {
    return (
        

        <div class="card" >
        <div className="myprofile">
        <img class="card-img-top" src="images/my_profile.jpg" alt="Card image cap" /></div>

        <div class="card-body">
            <h5 class="card-title">Lokesh Choubisa</h5>
            <p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p class="card-text">7073221407,lokeshchoubisa26@gmail.com</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>
            
       
    )
}
