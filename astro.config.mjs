import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://north-calder-colts.netlify.app",
  integrations: [sitemap()]
});
