// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Inclua os caminhos dos arquivos onde você usa Tailwind
  ],
  theme: {
    extend: {
      backgroundImage: {
        uber: "url('/src/assets/bguber.png')",
        city: "url('/src/assets/bg-city.png')",
      },
    },
  },
  plugins: [],
};
