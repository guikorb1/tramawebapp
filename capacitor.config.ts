import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.exemplo.meuapp',
  appName: 'meuApp',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
