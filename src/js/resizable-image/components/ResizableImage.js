import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const ResizableImage = (props) => {
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);

  const onSizeChange = useCallback(() => {
    setHeight(700);
    setWidth(700);
  }, [height, width]);

  const { image } = props;

  return (
    <img
      src={image}
      alt="water"
      height={height}
      width={width}
      onClick={onSizeChange}
    />
  );
};

ResizableImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ResizableImage;
