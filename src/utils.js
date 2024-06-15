export default function getImageSource(imageNameWithExtension) {
  const path = `../images/${imageNameWithExtension}`;
  return new URL(path, import.meta.url).href;
}
