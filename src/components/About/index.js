import React from "react";

function About() {
    const copyrightYear = new Date().getFullYear()

    return (
        <footer className="flex-column">
            <div id="about">
                <h2>About bluestrawberry</h2>
                <p>iterations of wordless narrative</p>
                <p id="copyright">
                    &copy; {copyrightYear}
                    <a href="/"> edwin m. escobar</a>
                </p>
            </div>
        </footer>
    )
}

export default About;