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

function getDivider(_type, isLightToDark) {
  return {
    _type,
    isLightToDark,
  };
}

function addBackgroundColorToSection(section, isLight) {
  return {
    ...section,
    isLight,
  };
}

function addBackgroundColortoSections(sections) {
  sections = [
    ...sections
      .slice(0, sections.length / 2)
      .map((section) => addBackgroundColorToSection(section, false)),
    getDivider("arch_divider", false),
    ...sections
      .slice(sections.length / 2)
      .map((section) => addBackgroundColorToSection(section, true)),
  ];
  return sections;
}

export {
  addOrientationToSections,
  addTitleSection,
  addImageBordersToSections,
  addBackgroundColortoSections,
};
