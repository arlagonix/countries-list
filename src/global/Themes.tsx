const colors = {
  blackOne: "#17181A",
  blackTwo: "#2B3743",
  blackThree: "#202D36",

  whiteOne: "#FFFFFF",
  whiteTwo: "#FEFEFE",

  grayOne: "#777777",
  grayTwo: "#C5C5C5",
  grayThree: "#EEEEEE",

  greenOne: "rgb(15, 169, 88)",
  greenTwo: "rgb(0, 255, 0)",
  ligthGreenOne: "rgba(15, 169, 87, 0.1)",
  ligthGreenTwo: "rgba(15, 169, 88, 0.3)",

  redOne: "rgb(217, 0, 77)",
  redTwo: "#FF0000",
  lightRedOne: "rgba(217, 0, 77, 0.1)",
  lightRedTwo: "rgba(255, 44, 44, 0.2)",

  blueOne: "#007BE5",
  blueTwo: "#55B0FF",
  lightBlueOne: "rgba(0, 123, 229, 0.1)",
  lightBlueTwo: "rgba(0, 137, 255, 0.25)",
};

const sizes = {
  sizes: {
    lg: "1440px",
    md: "720px",
  },
};

export const lightTheme = {
  ...sizes,
  colors: {
    pageBg: colors.whiteTwo,
    nav: {
      bg: colors.whiteOne,
      text: colors.blackOne,
      hover: colors.blueOne,
    },
    input: {
      border: colors.grayTwo,
      bg: colors.whiteOne,
      placeholder: colors.grayOne,
      text: colors.blackOne,
      focus: colors.blueOne,
      icon: colors.grayOne,
    },
    countryCard: {
      bg: colors.whiteOne,
      border: colors.grayTwo,
      propertyName: colors.grayOne,
      icon: colors.grayOne,
      text: colors.blackOne,
      hover: colors.blueOne,
    },
    footer: {
      bg: colors.whiteOne,
      text: colors.blackOne,
    },
    nothingFound: {
      header: colors.blackOne,
      caption: colors.grayOne,
    },
    countryPage: {
      header: colors.blackOne,
      text: colors.blackOne,
      tableBorder: colors.grayTwo,
      tableBg: colors.whiteOne,
    },
    chip: {
      text: colors.blueOne,
      bg: colors.lightBlueOne,
    },
  },
  shadows: {
    standard: "0px 0px 16px rgba(0, 0, 0, 0.1)",
  },
};

export const darkTheme = {
  ...sizes,
  colors: {
    pageBg: colors.blackThree,
    nav: {
      bg: colors.blackThree,
      text: colors.whiteOne,
      hover: colors.blueTwo,
    },
    input: {
      border: colors.grayOne,
      bg: colors.blackTwo,
      placeholder: colors.whiteOne,
      text: colors.whiteOne,
      focus: colors.blueTwo,
      icon: colors.whiteOne,
    },
    countryCard: {
      bg: colors.blackTwo,
      border: colors.grayOne,
      propertyName: colors.grayTwo,
      icon: colors.grayTwo,
      text: colors.whiteOne,
      hover: colors.blueTwo,
    },
    footer: {
      bg: colors.blackThree,
      text: colors.whiteOne,
    },
    nothingFound: {
      header: colors.whiteOne,
      caption: colors.grayTwo,
    },
    countryPage: {
      header: colors.whiteOne,
      text: colors.whiteOne,
      tableBorder: colors.grayOne,
      tableBg: colors.blackTwo,
    },
    chip: {
      text: colors.blueTwo,
      bg: colors.lightBlueTwo,
    },
  },
  shadows: {
    standard: "0px 0px 16px rgba(255, 255, 255, 0.15)",
  },
};

export type ThemeType = typeof lightTheme;
