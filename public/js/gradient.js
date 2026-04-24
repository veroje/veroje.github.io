function generateGradient() {
  const palettes = [
    ['rgba(120, 222, 196, 0.55)', 'rgba(245, 152, 255, 0.25)'],  // mint + pink
    ['rgba(229, 233, 253, 0.8)', 'rgba(120, 222, 196, 0.3)'],    // blue + mint
    ['rgba(245, 152, 255, 0.3)', 'rgba(229, 233, 253, 0.6)'],    // pink + blue
  ];

  const pair = palettes[Math.floor(Math.random() * palettes.length)];

  document.body.style.background = `
    radial-gradient(ellipse 90% 55% at -5% -5%, ${pair[0]} 0%, transparent 70%),
    radial-gradient(ellipse 60% 35% at 105% 0%, ${pair[1]} 0%, transparent 65%),
    #ffffff
  `;
}

document.addEventListener('DOMContentLoaded', generateGradient);