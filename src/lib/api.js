export async function fetchFromAPI(endpoint, options = {}) {
  const baseUrl = import.meta.env.PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Error ${res.status}: ${res.statusText}`);
  }

  return await res.json();
}
