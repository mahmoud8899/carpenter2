
import React from "react"




export default function TheButton(props) {

    const { TheName, LinkCall } = props


    return <a href={LinkCall} className="Telefon_link">
        <p className="button__">{TheName}</p>
    </a>


}