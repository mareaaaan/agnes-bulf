export default function getImageSource(imageNameWithExtension) {
  const path = `../src/assets/${imageNameWithExtension}`;
  return new URL(path, import.meta.url).href;
}
