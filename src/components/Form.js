import React, { useState } from 'react'

export default function Form() {

    const [showThankyou,setThankyou]=useState(false);

    return (
        <div>
            <form className="contact-form">
            <div className="form-row">
            <div class="form-group col-md-6">

                <label for="inputEmail4">First name</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="First name" />
                </div>

                <div class="form-group col-md-6">
                <label for="inputEmail4">Last name</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Last name" />
                </div>



            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                </div>
            </div>
            <div className="form-row" >
                <div className="form-group col-md-12">
                    <label for="reasonText">Reason for contact</label>
                    <textarea type="text" className="form-control" id="reasonText" placeholder="Enter reason for contact" />
                </div>
            </div>
            <div className="form-row" >
                <div className="form-group col-md-12">
                    <button onClick={(e)=>{
                        setThankyou(true);
                        e.preventDefault();
                        }} type="submit" className="btn btn-primary btn-medium">Submit</button> 
                </div>
            </div>
            {showThankyou && <p className="text-success">Thank you for contacting :)</p>}
           </form>
           
        </div>
    )
}
