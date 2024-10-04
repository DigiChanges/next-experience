export interface Env {
  urlBase: string | undefined;
  supabaseUrl: string | undefined;
  supabaseAnonKey: string | undefined;
  apiProtocol: string | undefined;
  apiHostname: string | undefined;
  apiPort: string | undefined;
  apiWithCredentials: string | undefined;
  apiBase: string | undefined;
  urlFront: string | undefined;
  urlFile: string | undefined;
  publicBucket: string | undefined;
  privateBucket: string | undefined;
  [key: string]: string | undefined;
}

export const env: Env = {
  urlBase: process.env.NEXT_PUBLIC_URL_BASE,
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  apiProtocol: process.env.NEXT_PUBLIC_API_PROTOCOL,
  apiHostname: process.env.NEXT_PUBLIC_API_HOSTNAME,
  apiPort: process.env.NEXT_PUBLIC_API_PORT,
  apiWithCredentials: process.env.NEXT_PUBLIC_API_WITH_CREDENTIALS,
  apiBase: process.env.NEXT_PUBLIC_API_BASE,
  urlFront: process.env.NEXT_PUBLIC_URL_FRONT,
  urlFile: process.env.NEXT_PUBLIC_URL_FILE,
  publicBucket: process.env.NEXT_PUBLIC_PUBLIC_BUCKET,
  privateBucket: process.env.NEXT_PUBLIC_PRIVATE_BUCKET
};

export const validateEnv = () => {
  Object.keys(env).forEach((key) => {
    if (typeof env[key] === 'undefined') {
      throw new Error(`Environment variable ${key} is not defined. Check your .env file`);
    }
  });
};


