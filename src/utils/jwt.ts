/**
 * Decode a JWT token and return its payload
 * @param token - JWT string
 * @returns parsed payload or null if invalid
 */

export function parseJwt<T = unknown>(token: string): T | null {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;

    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    const decoded = typeof window === 'undefined' ? Buffer.from(base64, 'base64').toString('utf-8') : atob(base64);

    return JSON.parse(decoded) as T;
  } catch {
    return null;
  }
}
