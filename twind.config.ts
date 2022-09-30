import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";
import { css } from "twind/css";

export default {
  selfURL: import.meta.url,
  preflight: {
    body: apply`bg-[#222] text-white`,
    section:
      apply`relative flex flex-col items-center min-h-[400px] px-4 sm:px-[20vw] py-28 gap-5`,
    "section>h1": apply`text-3xl sm:text-5xl`,
    ".custom-shape-divider-top-1664554851": apply`${css`position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;`}`,
    ".custom-shape-divider-top-1664554851 svg": apply`${css`position: relative;
    display: block;
    width: calc(155% + 1.3px);
    height: 181px;`}`,
    ".custom-shape-divider-top-1664554851 .shape-fill":
      apply`${css`fill: #111111;`}`,
  },
  theme: {
    fontFamily: {
      sans: "'Raleway', sans-serif",
    },
  },
} as Options;
