export const apiPrefix = '/api/v1';

export interface BackendConfig {
  prod: boolean;
  backendApiKey: string;
}

const getConfig = (): BackendConfig => {
  const config = {
    prod: process.env.NODE_ENV === 'production',
    backendApiKey: process.env.BACKEND_API_KEY
  };

  const verifyObj = (obj: object, name: string) => {
    for (const [key, value] of Object.entries(obj)) {
      if (value === undefined) {
        throw new Error(
          `Missing key in .env. Check constants.ts to see what the env name should be for: [${name}${key}]`
        );
      }
      if (typeof value === 'object') {
        verifyObj(value, `${key}.`);
      }
    }
  };
  verifyObj(config, '');

  return config as BackendConfig;
};

export const backendConfig = getConfig();
