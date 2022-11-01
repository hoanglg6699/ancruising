import React, { useState } from "react";
import "./React360.css";


const pixelsPerDegree = 3;

const React360 = (props) => {
  const [dragging, setDragging] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [dragStartIndex, setDragStartIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);

  const handleMouseDown = (e) => {
    e.persist();
    setDragging(true);
    setDragStartIndex(imageIndex);
    setDragStart(e.screenX)
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const updateImageIndex = (currentPosition) => {
    let numImages = props.numImages;
    const pixelsPerImage = pixelsPerDegree * (360 / numImages);
    // pixels moved
    let dx = (currentPosition - dragStart) / pixelsPerImage;
    let index = Math.floor(dx) % numImages;

    if (index < 0) {
      index = numImages + index - 1;
    }
    index = (index + dragStartIndex) % numImages;
    // console.log(index, dragStartIndex, numImages)
    if (index !== imageIndex) {
        setImageIndex(index)
    }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      updateImageIndex(e.screenX);
    }
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  const renderImage = () => {
    return (
      <div className="react360">
        <img
          className="react-360-img"
          alt=""
        src={`${props.dir}/${imageIndex + 1}.jpg`}
        />
      </div>
    );
  };
  return (
    <div
        className="react-360-img"
        onMouseDown={handleMouseDown}
        onDragStart={preventDragHandler}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {renderImage()}
      </div>
  );
};

export default React360;
