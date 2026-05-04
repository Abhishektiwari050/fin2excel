/**
 * Utility functions to fetch data from Strapi CMS REST API
 */

const STRAPI_URL = (process.env.NEXT_PUBLIC_STRAPI_URL || 'https://fin2excel.onrender.com')
  .replace(/\/admin\/?$/, '') // Remove /admin or /admin/
  .replace(/\/+$/, '');       // Remove trailing slashes

const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchParams {
  endpoint: string;
  query?: Record<string, any>;
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
      const errorText = await response.text().catch(() => 'No error details');
      console.error(`Strapi API error: ${response.status} ${response.statusText}`, errorText);
      throw new Error(`Strapi API error: ${response.status}`);
    }

    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error('Failed to parse Strapi JSON response. Start of response:', text.slice(0, 200));
      throw new Error('Strapi API returned invalid JSON. Please check if the STRAPI_URL environment variable is correct and does not include "/admin".');
    }

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

