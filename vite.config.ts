import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "lib"),
    },
  },
  base: process.env.BUILD_FOR_GH_PAGES ? "/jscad-fiber/" : undefined,

  plugins: [
    react(),
    {
      name: "replace-meta-url",
      transform(code, id) {
        if (!id.includes(".fixture.tsx")) {
          return
        }
        return {
          code: code.replaceAll(
            "import.meta.url",
            `"${id.split("/").pop() || ""}"`,
          ),
          map: null,
        }
      },
    },
  ],
})
