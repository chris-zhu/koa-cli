import { defineConfig } from 'tsup'

export default defineConfig({
  splitting: false,
  clean: true,
  dts: true,
  format: ['cjs'],
  entryPoints: ['src/index.ts', 'src/cli.ts'],
  minify: true
})
