import { env } from '@/config/api';

export const config = {
  apiGateway: {
    server: {
      protocol: env.apiProtocol,
      hostname: env.apiHostname,
      port: env.apiPort,
      baseUrl: `${env.apiProtocol}://${env.apiHostname}:${env.apiPort}`,
      credentials: env.apiWithCredentials
    },
    routes: {
      auth: {
        login: `${env.apiBase}/auth/login`,
        getMe: `${env.apiBase}/auth/me`,
        refreshToken: `${env.apiBase}/auth/refresh-token`,
        logout: `${env.apiBase}/auth/logout`,
        permissionsGetAll: `${env.apiBase}/auth/permissions`,
        keepAlive: `${env.apiBase}/auth/keep-alive`,
        forgotPassword: `${env.apiBase}/auth/forgot-password`,
        changeForgotPassword: `${env.apiBase}/auth/change-forgot-password`,
        register: `${env.apiBase}/auth/signup`,
        verifyYourAccount: `${env.apiBase}/auth/verify-your-account`
      },
      users: {
        base: `${env.apiBase}/users`,
        editPassword: `${env.apiBase}/users/change-user-password`,
        assignRole: `${env.apiBase}/users/assign-role`
      },
      roles: {
        base: `${env.apiBase}/roles`
      },
      items: {
        base: `${env.apiBase}/items`
      },
      files: {
        base: `${env.apiBase}/files`
      }
    }
  }
};
