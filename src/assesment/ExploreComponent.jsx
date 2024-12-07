// import React, { useState, useEffect } from "react";
// import "./index.css"
// const CircleImage = ({ image, index }) => {
//     console.log(image)
//   const [error, setError] = useState(image.error);
//   const [ready, setReady] = useState(image.ready);
//   const [retryCount, setRetryCount] = useState(0);


//   return (
//     <div
//       className="circle-container"
//       title={`Status: ${
//         error ? "Error" : ready ? "Ready" : "Loading"
//       }, Retry count: ${retryCount}`}
//     >
//       {error ? (
//         <div className="error-icon">⚠️</div>
//       ) : ready ? (
//         <img
//           src={image.url}
//           alt={`Image ${index + 1}`}
//           className="circle-image"
//           onError={() => setError(true)}
//         />
//       ) : (
//         <div className="placeholder" />
//       )}
//     </div>
//   );
// };

// const ExploreComponent = ({ name, count, images }) => {
//     // console.log( name, count, images );
//   const placeholders = Array(4 - images.length).fill({});
   
//   const hasError = images.some((img) => img.error);

//   return (
//     <div className="component-container">
//       <div className="image-row">
        
//           {images.map((image, index) => (
//             <CircleImage key={index} image={image} index={index} />
//           ))}
        
//         {placeholders.map((_, index) => (
//           <div key={`placeholder-${index}`} className="placeholder" />
//         ))}
//       </div>
//       <div className="text-content">
//         <h1>{name}</h1>
//         <p>{count}+ offline centers</p>
//       </div>
//       {hasError && <div className="large-error-icon">⚠️</div>}
//     </div>
//   );
// };

// export default ExploreComponent;


import React, { useState } from "react";

const CircleImage = ({ image, index }) => {
  const [error, setError] = useState(image.error);
  const [ready, setReady] = useState(image.ready);
  const [retryCount, setRetryCount] = useState(0);

  return (
    <div
      className="relative w-[38px] h-[38px] rounded-full overflow-hidden bg-gray-300 flex items-center justify-center"
      title={`Status: ${
        error ? "Error" : ready ? "Ready" : "Loading"
      }, Retry count: ${retryCount}`}
    >
      {error ? (
        <div className="text-red-600 text-lg">⚠️</div>
      ) : ready ? (
        <img
          src={image.url}
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gray-200"></div>
      )}
    </div>
  );
};

const ExploreComponent = ({ name, count, images }) => {
  const placeholders = Array(4 - images.length).fill({});
  const hasError = images.some((img) => img.error);

  return (
    <div className="flex items-center justify-between bg-[#0d2745] text-white p-4 rounded-lg max-w-[600px] w-full">
      {/* Left Section: Image Row */}
      <div className="flex gap-2">
        {images.map((image, index) => (
          <CircleImage key={index} image={image} index={index} />
        ))}
        {placeholders.map((_, index) => (
          <div
            key={`placeholder-${index}`}
            className="w-[38px] h-[38px] bg-gray-200 rounded-full"
          />
        ))}
      </div>

      {/* Right Section: Text Content */}
      <div className="flex flex-col justify-center text-left flex-1 ml-4">
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-sm text-gray-400">{count}+ offline centers</p>
      </div>

      {/* Large Error Icon */}
      {hasError && <div className="text-red-600 text-2xl ml-2">⚠️</div>}
    </div>
  );
};

export default ExploreComponent;
