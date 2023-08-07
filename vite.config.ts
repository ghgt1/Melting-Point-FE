import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 여기서 상위폴더 절대경로 지속적으로 넣어주기
// +tsconfig.json
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
    ],
  },
});
