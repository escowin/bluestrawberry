import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/images/bluestrawberry-01/0.jpg';
// hooks
// - only call hooks from react functions
// - only call hooks at the top level. cannot be used inside for loops, nested functions, or conditionals.

function Gallery(props) {
    const currentCategory = {
        name: "bluestrawberry-one",
        description: "original run",
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div className='flex-wrap'>
                <img src={photo} alt="issue 01" className='first-run'/>
            </div>
        </section>
    );
}

export default Gallery;