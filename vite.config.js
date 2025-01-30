import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve('./src'), // Punto de entrada de tu aplicación
  publicDir: path.resolve(__dirname, 'public'), // Carpeta de archivos públicos
  server: {
    port: 3000, // Puerto de desarrollo
  },
  build: {
    outDir: path.resolve('dist'), // Carpeta de salida para la construcción
    emptyOutDir: true, // Limpia la carpeta de salida antes de construir
  },
});