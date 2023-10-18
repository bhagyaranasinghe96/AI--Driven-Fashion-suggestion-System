const imageContext = require.context('../images', false, /\.(jpg|png|jpeg|gif)$/);

const images = {};

imageContext.keys().forEach((imagePath) => {
  const imageName = imagePath.replace('./', '');
  images[imageName] = imageContext(imagePath);
});

export default images;