import React from "react";
import coverPhoto from "../../assets/images/edwin-escobar-20200901-bluestrawberry-001.jpg"

function About() {
    return (
        <section className="flex-column">
            <h1 id="about">About | Bluestrawberry</h1>
            <img src={coverPhoto} style={{ width: "100%" }} alt="cover"/>
        </section>
    )
}

export default About;