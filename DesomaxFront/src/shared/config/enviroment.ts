export const environment_variables = () => {
  return {
    VITE_APP_API_URL_DEV: import.meta.env.VITE_APP_API_URL,
    VITE_APP_API_URL: import.meta.env.VITE_APP_API_URL,
    VITE_QUERY_TIMEOUT: import.meta.env.VITE_QUERY_TIMEOUT,
    VITE_VERSION: import.meta.env.VITE_VERSION
  }
}
