/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const plugins = require("@viget/tailwindcss-plugins");
const { remPair, rem } = require("@viget/tailwindcss-plugins/utilities/fns");

module.exports = {
  content: ["*.{html, css, js}"],
  theme: {
    /** Override Core Styles **/
    screens: {
      sm: rem(550),
      md: rem(768),
      lg: rem(1024),
      xl: rem(1440),
      "sm-d": { max: rem(549.98) },
      "md-d": { max: rem(767.98) },
      "lg-d": { max: rem(1023.98) },
      "xl-d": { max: rem(1439.98) },
    },
    spacing: {
      0: "0",
      ...remPair(1),
      ...remPair(2),
      ...remPair(3),
      ...remPair(4),
      ...remPair(6),
      ...remPair(8),
      ...remPair(10),
      ...remPair(12),
      ...remPair(14),
      ...remPair(16),
      ...remPair(18),
      ...remPair(20),
      ...remPair(22),
      ...remPair(24),
      ...remPair(28),
      ...remPair(30),
      ...remPair(32),
      ...remPair(34),
      ...remPair(36),
      ...remPair(40),
      ...remPair(44),
      ...remPair(48),
      ...remPair(56),
      ...remPair(64),
      ...remPair(72),
      ...remPair(80),
      ...remPair(88),
      ...remPair(96),
      ...remPair(100),
      ...remPair(128),
      ...remPair(136),
    },
    rect: {
      8: [8, 8],
      10: [10, 10],
      14: [14, 14],
      16: [16, 16],
      18: [18, 18],
      20: [20, 20],
      22: [22, 22],
      24: [24, 24],
      28: [28, 28],
      30: [30, 30],
      32: [32, 32],
      36: [36, 36],
      40: [40, 40],
      48: [48, 48],
      56: [56, 56],
      72: [72, 72],
      80: [80, 80],
    },

    /** Extended Styles **/
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.teal[400],
          hover: colors.blue[400],
          active: colors.blue[600],
          text: colors.slate[100],
        },
        secondary: {
          text: colors.slate[400],
        },
        status: {
          error: "#D3312B",
          warning: colors.amber[400],
          success: "#4AB752",
        },
        link: colors.blue[500],
      },
      borderColor: {
        DEFAULT: colors.slate[900],
      },
      ringColor: {
        border: colors.slate[900],
      },
      fontFamily: {
        block: ["Flow Block", "sans-serif"],
      },
      fontSize: {
        xs: [rem(12), 1],
        sm: [rem(14), 1],
        base: [rem(16), 1],
        lg: [rem(20), 1],
        xl: [rem(24), 1],
        "2xl": [rem(32), 1],
      },
      minWidth: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },

  /** Plugins **/
  plugins: [plugins.rect],
};
