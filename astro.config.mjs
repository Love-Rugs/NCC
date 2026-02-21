import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://comfy-biscotti-e2bfbb.netlify.app",
  integrations: [sitemap()]
});
