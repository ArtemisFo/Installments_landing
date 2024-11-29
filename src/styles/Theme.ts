import { ColorsThemeType } from "@interfaces/theme.ts";

// *****************   ______  COLOR SETUP ______   *******************
const Colors_Theme: ColorsThemeType = {
  // PRIMARY
  primary: {
    main: "#2847F2", // Reference to 50
    onMain: "#E5EBFF", // Reference to 100
    container: "#CBD7FF", // Reference to 99
    onContainer: "#0921A3", // Reference to 20
    0: "#020829",
    5: "#051052",
    10: "#07187A",
    15: "#081C8F",
    20: "#0921A3",
    25: "#0B25B8",
    30: "#0C29CC",
    35: "#0D2DE0",
    40: "#1233F1",
    50: "#2847F2",
    60: "#2F5FFF",
    70: "#4973FF",
    80: "#6387FF",
    90: "#7D9BFF",
    95: "#97AFFF",
    98: "#B1C3FF",
    99: "#CBD7FF",
    100: "#E5EBFF",
    101: "#F9FAFF",
  },

  // SECONDARY
  secondary: {
    main: "#F41565", // Reference to 40
    onMain: "#FFEDF3", // Reference to 100
    container: "#FDD3E1", // Reference to 99
    onContainer: "#8C0736", // Reference to 20
    0: "#1C010A",
    5: "#380317",
    10: "#54041F",
    15: "#72052C",
    20: "#8C0736",
    25: "#AA0841",
    30: "#C6094B",
    35: "#E20C56",
    40: "#F41565",
    50: "#F53278",
    60: "#F74986",
    70: "#F85F95",
    80: "#F977A5",
    90: "#FAA4C1",
    95: "#FAA4C1",
    98: "#FCBBD3",
    99: "#FDD3E1",
    100: "#FFEDF3",
    101: "#FFFAFC",
  },

  // SUCCESS
  success: {
    main: "#20A72E", // Reference to 35
    onMain: "#E7F9E9", // Reference to 100
    container: "#CEF6D3", // Reference to 99
    onContainer: "#15691C", // Reference to 20
    0: "#041505",
    5: "#08290A",
    10: "#0C4012",
    15: "#105417",
    20: "#15691C",
    25: "#177E22",
    30: "#1B9329",
    35: "#20A72E",
    40: "#25BD34",
    50: "#28D138",
    60: "#3DDA4D",
    70: "#55E063",
    80: "#6EE37A",
    90: "#86E98F",
    95: "#9DEDA6",
    98: "#B6F1BB",
    99: "#CEF6D3",
    100: "#E7F9E9",
    101: "#FAFFFA",
  },

  // ERROR
  error: {
    main: "#D51F1E", // Reference to 40
    onMain: "#FCE8E9", // Reference to 100
    container: "#F8D0D0", // Reference to 99
    onContainer: "#751111", // Reference to 20
    0: "#170302",
    5: "#2F0707",
    10: "#460A0A",
    15: "#5E0E0D",
    20: "#751111",
    25: "#8E1413",
    30: "#A61817",
    35: "#BD1A1B",
    40: "#D51F1E",
    50: "#E12F2F",
    60: "#E44645",
    70: "#E85C5B",
    80: "#EB7374",
    90: "#EE8A8A",
    95: "#F2A2A3",
    98: "#F5B9B9",
    99: "#F8D0D0",
    100: "#FCE8E9",
    101: "#FFFBFB",
  },

  // INFO
  info: {
    main: "#0059FF", // Reference to 50
    onMain: "#F1F6FF", // Reference to 100
    container: "#DDE9FF", // Reference to 99
    onContainer: "#002871", // Reference to 20
    0: "#000A1C",
    5: "#001439",
    10: "#001439",
    15: "#001E55",
    20: "#002871",
    25: "#00328E",
    30: "#003CAA",
    35: "#0045C6",
    40: "#004FE3",
    50: "#0059FF",
    60: "#1C6CFF",
    70: "#397EFF",
    80: "#5590FF",
    90: "#71A3FF",
    95: "#8EB5FF",
    98: "#AAC8FF",
    99: "#DDE9FF",
    100: "#F1F6FF",
    101: "#FCFDFF",
  },

  // WARNING
  warning: {
    main: "#EF8808", // Reference to 50
    onMain: "#FFF6EA", // Reference to 100
    container: "#FAE8CF", // Reference to 99
    onContainer: "#7A4404", // Reference to 20
    0: "#180E02",
    5: "#301A02",
    10: "#492903",
    15: "#603703",
    20: "#7A4404",
    25: "#915205",
    30: "#AA6007",
    35: "#C06D07",
    40: "#D97B09",
    50: "#EF8808",
    60: "#F79621",
    70: "#F9A33C",
    80: "#FAB059",
    90: "#F9BD74",
    95: "#FCCB90",
    98: "#FDD8AB",
    99: "#FAE8CF",
    100: "#FFF6EA",
    101: "#FFFDFB",
  },

  // NEUTRAL
  neutral: {
    main: "#6E6F72", // Reference to 50
    onMain: "#FCFCFC", // Reference to 100
    container: "#EDEDEE", // Reference to 99
    onContainer: "#2E2F30", // Reference to 20
    0: "#FFF6EA",
    5: "#121313",
    10: "#1C1C1D",
    15: "#252526",
    20: "#2E2F30",
    25: "#37383A",
    30: "#414143",
    35: "#4A4B4D",
    40: "#535457",
    50: "#6E6F72",
    60: "#808185",
    70: "#929396",
    80: "#A4A5A8",
    90: "#B6B7B9",
    95: "#C8C9CB",
    98: "#DBDBDC",
    99: "#EDEDEE",
    100: "#F5F5F5",
    101: "#FCFCFC",
  },

  // SURFACE
  surface: {
    1: "#DEDEDE",
    2: "#E5E5E5",
    3: "#EBEBEB",
    4: "#F2F2F2",
    5: "#F8F8F8",
    6: "#FFFFFE",
  },

  // INK
  ink: {
    wd: "#ffffff1f",
    wh: "#ffffff80",
    ws: "#ffffffb3",
    wp: "#FFFFFE",
    bd: "#C8C9CB",
    bh: "#A4A5A8",
    bs: "#6E6F72",
    bp: "#09090A",
  },

  // COMMON
  common: {
    blackBlur: "#09090a4d",
    primaryGradient:
      "linear-gradient(90deg, rgba(10, 144, 255, 0.15) 0%, rgba(10, 144, 255, 0) 100%)",
  },
};

export default Colors_Theme;
