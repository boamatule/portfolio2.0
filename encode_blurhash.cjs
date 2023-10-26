import { encode } from 'blurhash';
const Jimp = require('jimp');

// Your JSON data containing the image objects
const imageData = [
  {
    imageUrl: 'image1.jpg',
    width: 800,
    height: 600,
  },
  {
    imageUrl: 'image2.jpg',
    width: 1200,
    height: 800,
  },
  // ...more image objects
];

// Loop through the image objects and generate Blurhash for each image
imageData.forEach(async (image) => {
  const { imageUrl, width, height } = image;

  // Read the image using Jimp
  const img = await Jimp.read(imageUrl);

  // Resize the image to the specified width and height
  img.resize(width, height);

  // Get the pixel data from the image
  const imageData = img.bitmap.data;

  // Encode the image data into a Blurhash string
  const blurhash = encode(imageData, width, height, 4, 4);

  // Update the image object with the generated Blurhash
  image.blurhash = blurhash;

  // You can now use the 'blurhash' property in your application
});
