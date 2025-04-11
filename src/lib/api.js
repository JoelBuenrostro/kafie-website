export async function fetchFromAPI(endpoint, options = {}) {
  const baseUrl = import.meta.env.PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return await res.json();
}
