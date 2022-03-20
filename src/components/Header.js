import React from "react"
import image from "../images/TrollFace.png"
export default function Header(){
    return(
        <div className="header">
          <img src={image} className="headerImg"/>
          <h2>Meme Generator</h2>
         
        </div>
    )
}