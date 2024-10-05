function addOrientationToSections(sections) {
  var count = 0;
  sections.forEach((section) => {
    if (section._type === "textWithIllustration") {
      section.orientation = count % 2 === 0 ? "right" : "left";
      count++;
    }
  });
  return sections;
}

function addTitleSection(sections, title) {
  sections = [
    {
      _type: "pageTitle",
      title: title,
    },
    ...sections,
  ];
  return sections;
}

export { addOrientationToSections, addTitleSection };
