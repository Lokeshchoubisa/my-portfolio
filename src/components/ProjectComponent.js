import React from 'react'
import "./projectComponent.css"

function ProjectComponent(props) {
    console.log("inside project component");
    return (
        <>
       
        <div class="project text-black">
            <img class="project-img" src={props.imageSrc} alt="Card image" />
            <div className="project-text">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <a target="_blank" href={props.link} class="btn text-black btn-primary">Visit project</a>
            </div>
        </div>

        </>
    )
}

export default  ProjectComponent;