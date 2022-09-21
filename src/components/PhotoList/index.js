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
      { name: 'issue 08', category: 'volume-one', description: "eigth"},

      { name: 'issue 001', category: 'volume-two', description: "something"},
      { name: 'issue 002', category: 'volume-two', description: "fgsfkdg"},
      { name: 'issue 003', category: 'volume-two', description: "dfgd"},
      { name: 'issue 004', category: 'volume-two', description: "bdsfd"},
      { name: 'issue 005', category: 'volume-two', description: "dfgfg"},
      { name: 'issue 006', category: 'volume-two', description: "dfgfg"},

      { name: 'friday', category: 'hebdomas', description: "friday"},
      { name: 'saturday', category: 'hebdomas', description: "saturday"},
      { name: 'sunday', category: 'hebdomas', description: "sunday"},
      { name: 'monday', category: 'hebdomas', description: "dfgfg"},
      { name: 'tuesday', category: 'hebdomas', description: "dfgfg"},
      { name: 'wednesday', category: 'hebdomas', description: "dfgfg"},
      { name: 'thursday', category: 'hebdomas', description: "dfgfg"},

      { name: 'saturday', category: 'hebdomas-ii', description: "friday"},
      { name: 'sunday', category: 'hebdomas-ii', description: "saturday"},
      { name: 'monday', category: 'hebdomas-ii', description: "sunday"},
      { name: 'tuesday', category: 'hebdomas-ii', description: "dfgfg"},
      { name: 'wednesday', category: 'hebdomas-ii', description: "dfgfg"},
      { name: 'thursday', category: 'hebdomas-ii', description: "dfgfg"},
      { name: 'friday', category: 'hebdomas-ii', description: "dfgfg"},

      { name: '0001', category: 'days-01', description: "01"},
      { name: '0002', category: 'days-01', description: "01"},
      { name: '0003', category: 'days-01', description: "01"},
      { name: '0004', category: 'days-01', description: "01"},
      { name: '0005', category: 'days-01', description: "01"},

      { name: '0006', category: 'days-02', description: "02"},
      { name: '0007', category: 'days-02', description: "02"},
      { name: '0008', category: 'days-02', description: "02"},
      { name: '0009', category: 'days-02', description: "02"},
      { name: '0010', category: 'days-02', description: "02"},

      { name: '0011', category: 'days-03', description: "03"},
      { name: '0012', category: 'days-03', description: "03"},
      { name: '0013', category: 'days-03', description: "03"},
      { name: '0014', category: 'days-03', description: "03"},
      { name: '0015', category: 'days-03', description: "03"},

      { name: '0016', category: 'days-04', description: "04"},
      { name: '0017', category: 'days-04', description: "04"},
      { name: '0018', category: 'days-04', description: "04"},
      { name: '0019', category: 'days-04', description: "04"},
      { name: '0020', category: 'days-04', description: "04"},

      { name: '0021', category: 'days-05', description: "05"},
      { name: '0022', category: 'days-05', description: "05"},
      { name: '0023', category: 'days-05', description: "05"},
      { name: '0024', category: 'days-05', description: "05"},
      { name: '0025', category: 'days-05', description: "05"},

      { name: '0026', category: 'days-06', description: "06"},
      { name: '0027', category: 'days-06', description: "06"},
      { name: '0028', category: 'days-06', description: "06"},
      { name: '0029', category: 'days-06', description: "06"},
      { name: '0030', category: 'days-06', description: "06"},

      { name: '0031', category: 'days-07', description: "07"},
      { name: '0032', category: 'days-07', description: "07"},
      { name: '0033', category: 'days-07', description: "07"},
      { name: '0034', category: 'days-07', description: "07"},
      { name: '0035', category: 'days-07', description: "07"},
  ]);

  // only photos in the selected category appear
  // - goes through each photo in [photos], finding every photo that matches the selected category. if photo matches condition, it is returned in an array and assigned to currentPhotos.
  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div className="horizontal">
      <div className="series-wrapper">
        {/* [currentPhotos] is mapped to render each photo that matches the currently selected category */}
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.jpg`)} // incremental via i
            alt={image.name} // accessibility
            className="run"
            key={image.name} // must be a unique string
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
