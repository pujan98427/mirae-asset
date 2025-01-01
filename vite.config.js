import { defineConfig } from "vite";
import { resolve } from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true, // Clean the output directory before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, "path/to/index.html"),
        about: resolve(__dirname, "path/to/about.html"),
      },
      output: {
        entryFileNames: "assets/js/[name].js",
        chunkFileNames: "assets/js/[name].js",
        assetFileNames: ({ name }) => {
          if (/\.(css)$/.test(name ?? "")) {
            return "assets/css/[name][extname]";
          }
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(name ?? "")) {
            return "assets/images/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
});
