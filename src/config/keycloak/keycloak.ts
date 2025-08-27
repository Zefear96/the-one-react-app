import Keycloak from 'keycloak-js';

const keycloakInstance = new (Keycloak as any)({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});

export default keycloakInstance;