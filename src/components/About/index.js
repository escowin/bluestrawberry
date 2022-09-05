import React from "react";

function About() {
    const copyrightYear = new Date().getFullYear()

    return (
        <footer className="flex-column" id="about">
            <h2>About bluestrawberry</h2>
            <p>iterations of the wordless narrative</p>
            <p id="copyright">
                &copy; {copyrightYear}
                <a href="/"> edwin m. escobar</a>
            </p>
        </footer>
    )
}

export default About;