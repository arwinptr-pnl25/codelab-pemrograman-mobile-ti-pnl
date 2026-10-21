// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://arwinptr-pnl25.github.io",
  base: "/codelab-pemrograman-mobile-ti-pnl",
  integrations: [mdx()],
});
