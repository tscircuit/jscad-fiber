import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import fs from "fs"

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
      name: "dev-serve-examples",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith("/code-examples/")) {
            const filePath = req.url.replace("/code-examples/", "")
            const fullPath = path.resolve(__dirname, "examples", filePath)
            try {
              const code = await fs.promises.readFile(fullPath, "utf-8")
              res.setHeader("content-type", "application/octet-stream")
              res.end(code)
            } catch (error) {
              res.statusCode = 404
              res.end("File not found")
            }
          } else {
            next()
          }
        })
      },
    },
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
