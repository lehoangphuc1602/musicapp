/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        primary: {"50":"#0e192a", "bgIndex":"#0B1220", "bgbtn":"#21324a"},
        green: {"50":"#1bddc3","100":"#3c8297","greenLight":"#00E5CE","bgBtnbanner":"#0e192a6e"},
      },
      fontFamily: {
      body: [
        'ＭＳ Ｐゴシック',
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        sans: [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      },
      spacing: {
        '18': '72px',
      },
      transitionDuration: {
        '5000': '5000ms',
      },
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius"
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
      animation: {
        fadeLeft: 'fadeLeft .3s ease-in-out',
      },
      keyframes: {
        fadeLeft: {
          '0%': { width: '64px' },
          '100%': { width: '100%' },
        },

      }
    }
  },
  plugins: [
    
  ],
}