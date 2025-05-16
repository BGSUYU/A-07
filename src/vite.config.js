import { defineConfig } from "vite";
import React from "react";

export default defineConfig({
  plugins: [React()],
    css: {
            preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    }
});