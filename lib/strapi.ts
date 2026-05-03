/**
 * Utility functions to fetch data from Strapi CMS REST API
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchParams {
  endpoint: string;
  query?: Record<string, string>;
  options?: RequestInit;
}

/**
 * Helper to make a fetch request to Strapi API
 */
export async function fetchAPI({ endpoint, query, options = {} }: FetchParams) {
  try {
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
      },
    };

    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    const queryString = query ? `?${new URLSearchParams(query).toString()}` : '';
    const requestUrl = `${STRAPI_URL}/api/${endpoint}${queryString}`;

    const response = await fetch(requestUrl, mergedOptions);
    
    if (!response.ok) {
      console.error(`Strapi API error: ${response.statusText}`);
      throw new Error(`An error occurred please try again`);
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Fetch API Error:', error);
    throw error;
  }
}

/**
 * Helper to get the full URL of an image from Strapi
 */
export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }
  return `${STRAPI_URL}${url}`;
}
