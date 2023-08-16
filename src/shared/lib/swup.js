if (typeof window !== 'undefined') {
  const Swup = await import('swup').then((module) => module.default);
  const SwupSlideTheme = await import('@swup/slide-theme').then((module) => module.default);

  const swup = new Swup({
    plugins: [new SwupSlideTheme()],
  });

  swup.on('enabled', () => {
    // console.log('Swup enabled');
  });
}
