import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://rice-software.xyz",
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      config: { applyBaseStyles: false }
    })
  ]
});
