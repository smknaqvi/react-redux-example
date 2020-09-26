import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const ResizableImage = ({ image }) => {
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);

  const onSizeChange = useCallback(() => {
    setHeight(700);
    setWidth(700);
  }, []);

  return (
    <img src={image} height={height} width={width} onClick={onSizeChange} />
  );
};

ResizableImage.prototypes = {
  image: PropTypes.string.isRequired,
};

export default ResizableImage;
