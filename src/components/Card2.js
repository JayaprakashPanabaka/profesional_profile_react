import React from "react";

export default function Card2(props) {
    return (
        <div className="card-container">
            <div className="card2-div1 col-7">
                <h1>My Career so Far</h1>
                <p className="text">Alwyas up for a challenge, I have worked for lean start-ups  <br/>
                    and was a member of the first New Zealand start-up to  <br/>
                     attend Y Combinator,the largest start-up accelerator in the  <br/>
                     world from there, I worked my way up to Art Director and  <br/>
                     team lead at Appster where I oversaw the design of 30+  <br/>
                     mobile and desktop apps. Currently , I lead UI/UX design or  <br/>
                     Saas start-up VideoMyJob.
                </p>
            </div>
            <div className="card2-div2 col-5">
                <h1>SKILLS</h1>
                <span>{props.skills}</span> 
                <span>UX DESIGN</span>
                <span>PROTOTYPING</span>
                <br/>
                <span>BRANDING</span>
                <span>HTML/CSS</span>
                <span>WIREFRAMING</span>
                <br/>
                <span>INFORMATION ARCHITECTURE</span>
                <br/>
                <span>USER RESEARCH</span>
                <span>USER INTERVIEWS</span>
                <br/>
                <span>LEADERSHIP</span>
                <span>SKETCH</span>
                <span>ADOBE SUITE</span>
            </div>
        </div>
    );
}











