const sharedColors = {
  primary: "#565EEF",
  primaryHover: "#33399b",
  gray: "#94A6BE",
  white: "#FFFFFF",
  activeDayBg: "#94A6BE",

  topicWebDesign: {
    bg: "#FFE4C2",
    text: "#FF6D00",
  },
  topicResearch: {
    bg: "#B4FBE1",
    text: "#06B16E",
  },
  topicCopywriting: {
    bg: "#E9D4FF",
    text: "#9A48F1",
  },
};

export const lightTheme = {
  colors: {
    ...sharedColors,
    bg: "#EAEEF6",
    headerBg: "#FFFFFF",
    cardBg: "#FFFFFF",
    text: "#000000",
    activeDayText: "#FFFFFF",
  },
};

export const darkTheme = {
  colors: {
    ...sharedColors,
    bg: "#151419",
    headerBg: "#20202C",
    cardBg: "#20202C",
    text: "#FFFFFF",
    activeDayText: "#151419",

    topicWebDesign: {
      bg: "#FF6D00",
      text: "#FFE4C2",
    },
    topicResearch: {
      bg: "#06B16E",
      text: "#B4FBE1",
    },
    topicCopywriting: {
      bg: "#9A48F1",
      text: "#E9D4FF",
    },
  },
};
