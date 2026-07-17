// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base:
    process.env.GITHUB_ACTIONS === "true"
      ? "/Cafe-webpage/"
      : "/",
  plugins: [react(), tailwindcss()],
});