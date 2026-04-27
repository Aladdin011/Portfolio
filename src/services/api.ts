/**
 * API Service
 * Centralized API communication
 */

import type { ApiResponse, ContactFormData, TestimonialSubmission } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Generic fetch wrapper with error handling
 */
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE}/api${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        message: error.message || 'An error occurred',
        error: error.error || 'Unknown error',
      };
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || 'Success',
      data: data.data,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Network error';
    return {
      success: false,
      message: 'Failed to communicate with server',
      error: errorMessage,
    };
  }
}

/**
 * Send contact email
 */
export async function sendContactEmail(
  data: ContactFormData
): Promise<ApiResponse<{ message: string }>> {
  return fetchAPI<{ message: string }>('/send-email', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Submit testimonial
 */
export async function submitTestimonial(
  data: TestimonialSubmission
): Promise<ApiResponse<{ message: string }>> {
  return fetchAPI<{ message: string }>('/submit-testimonial', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Health check endpoint
 */
export async function checkHealth(): Promise<ApiResponse<{ status: string }>> {
  return fetchAPI<{ status: string }>('/health');
}
