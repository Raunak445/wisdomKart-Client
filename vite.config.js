import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://wisdomkart-server.onrender.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "api"),
  //     },
  //   },
  // },
    define:{
      'process.env.VITE_SERVER_URL':JSON.stringify(process.env.VITE_SERVER_URL),
      'process.env.VITE_LOCAL_URL':JSON.stringify(process.env.VITE_LOCAL_URL),

    }

});
