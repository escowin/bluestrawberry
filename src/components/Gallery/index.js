import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
// hooks
// - only call hooks from react functions
// - only call hooks at the top level. cannot be used inside for loops, nested functions, or conditionals.

// passed down prop from App
function Gallery({ currentCategory }) {
    // destructure currentCategory's name and description
    const { name, description } = currentCategory;

    return (
        <section>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            {/* prop drilling | passes down currentCategory.name as a prop into PhotoList from Gallery */}
            <PhotoList category={currentCategory.name}/>
        </section>
    );
}

export default Gallery;