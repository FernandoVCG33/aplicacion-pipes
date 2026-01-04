/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // <--- ESTA LÍNEA ES VITAL
  ],
  // Opcional: Configuración de temas para tu Taller
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
