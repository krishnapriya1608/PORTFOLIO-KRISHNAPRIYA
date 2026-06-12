export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter','sans-serif'], mono: ['JetBrains Mono','monospace'] },
      colors: {
        teal: { 400:'#2dd4bf', 500:'#14b8a6', 600:'#0d9488' },
        violet: { 400:'#a78bfa', 500:'#8b5cf6', 600:'#7c3aed' },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: { '0%,100%': {transform:'translateY(0px)'}, '50%': {transform:'translateY(-20px)'} },
        glow: { from: {boxShadow:'0 0 20px rgba(20,184,166,0.3)'}, to: {boxShadow:'0 0 40px rgba(139,92,246,0.5)'} }
      }
    }
  },
  plugins: []
}
