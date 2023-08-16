import { encode } from 'blurhash';
import React from 'react';


const BlurhashCanvas = ({ hash, width, height }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    if (canvasRef.current && hash) {
      const context = canvasRef.current.getContext('2d');
      const pixels = encode(hash, width, height, 4, 4);

      const imageData = context.createImageData(width, height);
      imageData.data.set(pixels);
      context.putImageData(imageData, 0, 0);
    }
  }, [hash, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default BlurhashCanvas;
