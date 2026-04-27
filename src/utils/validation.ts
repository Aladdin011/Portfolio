/**
 * Validation Utilities
 * Centralized validation logic for forms
 */

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validates email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates text is not empty
 */
export const validateRequired = (value: string, fieldName: string): ValidationError | null => {
  if (!value || value.trim().length === 0) {
    return {
      field: fieldName,
      message: `${fieldName} is required`,
    };
  }
  return null;
};

/**
 * Validates email field
 */
export const validateEmailField = (email: string): ValidationError | null => {
  const required = validateRequired(email, 'Email');
  if (required) return required;

  if (!validateEmail(email)) {
    return {
      field: 'email',
      message: 'Please enter a valid email address',
    };
  }
  return null;
};

/**
 * Validates minimum length
 */
export const validateMinLength = (
  value: string,
  minLength: number,
  fieldName: string
): ValidationError | null => {
  if (value.length < minLength) {
    return {
      field: fieldName.toLowerCase(),
      message: `${fieldName} must be at least ${minLength} characters long`,
    };
  }
  return null;
};

/**
 * Validates contact form data
 */
export const validateContactForm = (data: { name: string; email: string; message: string }) => {
  const errors: ValidationError[] = [];

  const nameError = validateRequired(data.name, 'Name');
  if (nameError) errors.push(nameError);

  const emailError = validateEmailField(data.email);
  if (emailError) errors.push(emailError);

  const messageError = validateRequired(data.message, 'Message');
  if (messageError) errors.push(messageError);

  const messageLength = validateMinLength(data.message, 10, 'Message');
  if (messageLength) errors.push(messageLength);

  return errors;
};

/**
 * Validates testimonial form data
 */
export const validateTestimonialForm = (data: { name: string; role: string; quote: string }) => {
  const errors: ValidationError[] = [];

  const nameError = validateRequired(data.name, 'Name');
  if (nameError) errors.push(nameError);

  const roleError = validateRequired(data.role, 'Role');
  if (roleError) errors.push(roleError);

  const quoteError = validateRequired(data.quote, 'Testimonial');
  if (quoteError) errors.push(quoteError);

  const quoteLength = validateMinLength(data.quote, 20, 'Testimonial');
  if (quoteLength) errors.push(quoteLength);

  return errors;
};
