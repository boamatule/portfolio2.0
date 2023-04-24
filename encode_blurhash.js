import { encode } from 'blurhash';

// Your JSON data containing the image objects
const imageData = [
  {
    imageUrl: 'image1.jpg',
    width: 800,
    height: 600
  },
  {
    imageUrl: 'image2.jpg',
    width: 1200,
    height: 800
  }
  // ...more image objects
];

// Loop through the image objects and generate Blurhash for each image
imageData.forEach((image) => {
  const { imageUrl, width, height } = image;

  // Create an image element
  const img = new Image();

  // Set the source of the image to the imageUrl
  img.src = imageUrl;

  // Wait for the image to load
  img.onload = () => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set the canvas size to match the image size
    canvas.width = width;
    canvas.height = height;

    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0, width, height);

    // Get the pixel data from the canvas
    const imageData = ctx.getImageData(0, 0, width, height);

    // Encode the image data into a Blurhash string
    const blurhash = encode(imageData.data, width, height, 4, 4);

    // Update the image object with the generated Blurhash
    image.blurhash = blurhash;
  };
});
