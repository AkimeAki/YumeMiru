import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), generouted(), tsconfigPaths()],
	server: {
		port: 9501,
		host: "0.0.0.0"
	}
});
