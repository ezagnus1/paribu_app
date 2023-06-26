import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

export default defineConfig({
  plugins: [vue()],
  //add test to vite config
  test: {
    globals: true,
    environment: "jsdom"
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.join(__dirname, '/src'),
      },
    ],
  },
});
