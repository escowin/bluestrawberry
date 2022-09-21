import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// look into passing down multiple props into Nav
function Nav(props) {
  // defining the passed down props from parent App component
  const { categories = [], setCurrentCategory, currentCategory } = props;
  console.log(categories)

  // hook | first argument = callback function; second argument directs hook to re-render component on changes to this state's value.
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  // function categorySelected(name) {console.log(`${name} clicked`)}

  return (
    <header>
      <h1>
        <a data-testid="link" href="/" aria-label="title">
          {" "}
          Bluestrawberry
        </a>{" "}
      </h1>
      <nav>
        <ul className="flex-wrap" id="nav-links">
          {/* dynamically generates remaining li */}
          {categories.map((category) => (
            <li
              className={`series-link ${
                // evaluates ===, if true, navActive is returned
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name} // map(), outermost element must have unique key attribute
            >
              <span
                onClick={() => setCurrentCategory(category)} // anon arrow function: onClick expects callback function declaration
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
