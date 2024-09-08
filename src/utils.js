export default function addOrientationToSections(sections) {
  var count = 0;
  sections.forEach((section) => {
    if (section._type === "textWithIllustration") {
      section.orientation = count % 2 === 0 ? "right" : "left";
      count++;
    }
  });
  return sections;
}
