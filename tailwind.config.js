// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust for your project structure
  ],
  theme: {
    extend: {
      scale: {
        100: "100", // Large enough to cover the screen
        0: "0", // Fully collapsed
      },
      backgroundImage: {
        "gradient-top-bottom":
          "linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      },
      colors: {
        "attack-scissors-light": "hsl(40, 84%, 53%)",
        "attack-scissors-dark": "hsl(39, 89%, 49%)",
        "attack-paper-light": "hsl(230, 89%, 65%)",
        "attack-paper-dark": "hsl(230, 89%, 62%)",
        "attack-rock-light": "hsl(349, 70%, 56%)",
        "attack-rock-dark": "hsl(349, 71%, 52%)",
        "attack-lizard-light": "hsl(261, 72%, 63%)",
        "attack-lizard-dark": "hsl(261, 73%, 60%)",
        "attack-spock-light": "hsl(189, 58%, 57%)",
        "attack-spock-dark": "hsl(189, 59%, 53%)",
        "score-text": "hsl(229, 64%, 46%)",
        "dark-text": "hsl(229, 25%, 31%)",
      },
    },
  },
  plugins: [],
};
