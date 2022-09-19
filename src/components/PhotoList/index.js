import React, { useState } from "react";

// passing down props
// - PhotoList(props) {...}
// - or destructure props as:
function PhotoList({ category }) {
    // hook | useState
    const [photos] = useState([
      { name: 'issue 01', category: 'volume-one', description: "the set up"},
      { name: 'issue 02', category: 'volume-one', description: "second"},
      { name: 'issue 03', category: 'volume-one', description: "third"},
      { name: 'issue 04', category: 'volume-one', description: "fourth"},
      { name: 'issue 05', category: 'volume-one', description: "fifth"},
      { name: 'issue 06', category: 'volume-one', description: "sixth"},
      { name: 'issue 07', category: 'volume-one', description: "seventh"},

      { name: 'issue 001', category: 'volume-two', description: "something"},
      { name: 'issue 002', category: 'volume-two', description: "fgsfkdg"},
      { name: 'issue 003', category: 'volume-two', description: "dfgd"},
      { name: 'issue 004', category: 'volume-two', description: "bdsfd"},
      { name: 'issue 005', category: 'volume-two', description: "dfgfg"},

      { name: 'friday', category: 'hebdomas', description: "dfgfg"},
      { name: 'saturday', category: 'hebdomas', description: "dfgfg"},
      { name: 'sunday', category: 'hebdomas', description: "dfgfg"},
      { name: 'monday', category: 'hebdomas', description: "dfgfg"},
      { name: 'tuesday', category: 'hebdomas', description: "dfgfg"},
      { name: 'wednesday', category: 'hebdomas', description: "dfgfg"},
      { name: 'thursday', category: 'hebdomas', description: "dfgfg"},
  ]);

  // only photos in the selected category appear
  // - goes through each photo in [photos], finding every photo that matches the selected category. if photo matches condition, it is returned in an array and assigned to currentPhotos.
  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="horizontal">
        {/* [currentPhotos] is mapped to render each photo that matches user-selected category */}
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.jpg`)} // incremental via i
            alt={image.name} // accessibility
            className="first-run"
            key={image.name} // must be a unique string
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
