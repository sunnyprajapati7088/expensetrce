import React, { useState, useEffect } from "react";
import "./index.css"
const CircleImage = ({ image, index }) => {
    console.log(image)
  const [error, setError] = useState(image.error);
  const [ready, setReady] = useState(image.ready);
  const [retryCount, setRetryCount] = useState(0);


  return (
    <div
      className="circle-container"
      title={`Status: ${
        error ? "Error" : ready ? "Ready" : "Loading"
      }, Retry count: ${retryCount}`}
    >
      {error ? (
        <div className="error-icon">⚠️</div>
      ) : ready ? (
        <img
          src={image.url}
          alt={`Image ${index + 1}`}
          className="circle-image"
          onError={() => setError(true)}
        />
      ) : (
        <div className="placeholder" />
      )}
    </div>
  );
};

const ExploreComponent = ({ name, count, images }) => {
    console.log( name, count, images );
  const placeholders = Array(4 - images.length).fill({});
   
  const hasError = images.some((img) => img.error);

  return (
    <div className="component-container">
      <div className="image-row">
        
          {images.map((image, index) => (
            <CircleImage key={index} image={image} index={index} />
          ))}
        
        {placeholders.map((_, index) => (
          <div key={`placeholder-${index}`} className="placeholder" />
        ))}
      </div>
      <div className="text-content">
        <h1>{name}</h1>
        <p>{count}+ offline centers</p>
      </div>
      {hasError && <div className="large-error-icon">⚠️</div>}
    </div>
  );
};

export default ExploreComponent;
