import React, { useRef, useEffect } from 'react';
import { decode } from 'blurhash';

const BlurhashImage = ({ hash, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const imageData = decode(hash, width, height);
    const imageDataArray = new Uint8ClampedArray(imageData);

    const imageDataObject = new ImageData(imageDataArray, width, height);
    context.putImageData(imageDataObject, 0, 0);
  }, [hash, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default BlurhashImage;
