import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    watch: { ignored: ['**/tmp/**'] }
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      input: {
        home: 'index.html',
        expertise: 'expertise.html',
        projects: 'projects.html',
        projectDetail: 'project-detail.html',
        configurator: 'configurator.html',
        materials: 'materials.html',
        process: 'process.html',
        studio: 'studio.html',
        contact: 'contact.html'
      }
    }
  }
});
