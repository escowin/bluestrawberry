import React from "react";

function Nav () {
    const categories = [
        {
            name: "bluestrawberry-one",
            description: "original run",
        },
        {
            name: "bluestrawberry-two",
            description: "second",
        },
        {
            name: "hebdomas",
            description: "seven days",
        },
        {
            name: "days",
            description: "days gone by"
        },
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a data-testid="link" href="/" aria-label="title">
                    Bluestrawberry
                </a>
            </h2>
            <nav>
                <ul className="flex" id="nav-links">
                    <li>
                        <a data-testid="about" href="#about">About</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* dynamically generates remaining li */}
                    {categories.map((category) => (
                        <li key={category.name}> {/* map(), outermost element must have unique key attribute*/}
                            {/* anon arrow function: onClick expects callback function declaration */}
                            <span onClick={() => categorySelected(category.name)}> 
                                {category.name}
                            </span> 
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )

}

export default Nav;