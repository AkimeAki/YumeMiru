import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 9501,
		host: "0.0.0.0"
	},
	site: "https://dream.memorial",
	trailingSlash: "never",
	integrations: [react()],
	output: "server",
	adapter: cloudflare(),
	build: {
		format: "file"
	}
});
