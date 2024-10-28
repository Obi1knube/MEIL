// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/, // Matches .js files in the src folder
  },
});