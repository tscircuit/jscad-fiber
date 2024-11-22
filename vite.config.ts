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
  plugins: [
    react(),
    {
      name: "serve-examples",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith("/example-code/")) {
            const filePath = req.url.replace("/example-code/", "")
            const fullPath = path.resolve(__dirname, "examples", filePath)

            try {
              const code = await fs.promises.readFile(fullPath, "utf-8")
              res.setHeader("Content-Type", "application/json")
              res.end(JSON.stringify({ code }))
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
  ],
})
