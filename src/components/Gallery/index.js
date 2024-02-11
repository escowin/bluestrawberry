import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";
// hooks
// - only call hooks from react functions
// - only call hooks at the top level. cannot be used inside for loops, nested functions, or conditionals.

// passed down prop from App
function Gallery({ currentCategory }) {
  // destructure currentCategory's name and description
  const { name, description } = currentCategory;

  return (
    <>
      <article id="details">
        <h2 className="header">{capitalizeFirstLetter(name)}</h2>
        <p className="description">{description}</p>
      </article>

      {/* prop drilling | passes down currentCategory.name as a prop into PhotoList from Gallery */}
      <PhotoList category={name} />
    </>
  );
}

export default Gallery;
