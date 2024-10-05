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

function addImageBordersToSections(sections) {
  var count = 0;
  sections.forEach((section) => {
    if (section._type === "textWithIllustration") {
      section.image = {
        ...section.image,
        border: count == 0 ? "arch-border" : "oval-border",
      };

      count++;
    }
  });
  return sections;
}

export { addOrientationToSections, addTitleSection, addImageBordersToSections };
