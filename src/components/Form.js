import React, { useState } from 'react'
import fire from '../firebase';
// import ProjectComponent from './projectComponent';

export default function Form() {

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

 
    const [showThankyou,setThankyou]=useState(false);
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [reason,setReason]=useState("");
    const onSubmit=()=>
    {
    fire.database().ref("/users").push({
        lastName:lname,
        firstName:fname,
        email:email,
        reason:reason
    });
 

    setThankyou(true);

    // sleep(1000);
    
    setLname("");
    setFname("");
    setEmail("");
    setReason("");

    
    // setThankyou(false);

}

    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault();
                onSubmit();
            }} className="contact-form needs-validation"  novalidate >
            <div className="form-row">
            <div className="form-group col-md-6">

                <label for="inputEmail4">First name</label>
                <input value={fname} onChange={(e)=>setFname(e.target.value)} type="text" class="form-control" id="inputEmail4" placeholder="First name" required />
                
                
                </div>

                <div class="form-group col-md-6">
                <label for="inputEmail4">Last name</label>
                <input value={lname} onChange={(e)=>setLname(e.target.value)} type="text" class="form-control" id="inputEmail4" placeholder="Last name" required />
                </div>



            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                <label for="inputEmail4">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="inputEmail4" placeholder="Email" required />
                </div>
            </div>
            <div className="form-row" >
                <div className="form-group col-md-12">
                    <label for="reasonText">Reason for contact</label>
                    <textarea value={reason} onChange={(e)=>setReason(e.target.value)} type="text" className="form-control" id="reasonText" placeholder="Enter reason for contact"  />
                </div>
            </div>
            <div className="form-row" >
                <div className="form-group col-md-12">
                    <button onSubmit={(e)=>{
                        // console.log("yes");
                        e.preventDefault();
                        console.log("submitted");
                        // onSubmit();
                        }}  type="submit" className="btn btn-primary btn-medium">Submit</button> 
                </div>
            </div>
            {showThankyou && <p className="text-success">Thank you for contacting :)</p>}
           </form>
           
        </div>
    )
}
