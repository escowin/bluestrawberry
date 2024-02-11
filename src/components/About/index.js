import React from "react";

function About() {
    const copyrightYear = new Date().getFullYear()

    return (
        <footer className="flex-column">
                <h2 className="header">About bluestrawberry</h2>
                <p>wordless iteration</p>
                <p id="copyright">
                    &copy; {copyrightYear}
                    <a href="/"> edwin m. escobar</a>
                </p>
        </footer>
    )
}

export default About;