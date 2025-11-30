export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'parchment': '#FFF8E7',
        'sepia': '#F4ECD8',
        'bronze': '#8B6914',
        'royal-gold': '#D4AF37',
        'deep-brown': '#3E2723',
        'leather': '#8D6E63',
      },
      fontFamily: {
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'display': ['Cinzel', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
