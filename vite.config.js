import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        teams: './src/pages/teams.html',
        dance: './src/pages/dance.html',
        design: './src/pages/design.html',
        gallery: './src/pages/gallery.html',
        photography: './src/pages/photography.html',
        video: './src/pages/video.html',
       web: './src/pages/web.html',
       register: './src/pages/register.html'
      }
    }
  }
});
