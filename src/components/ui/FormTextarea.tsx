/**
 * Form Textarea Component
 * Reusable textarea field with label and error support
 */

import React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  characterLimit?: number;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, helperText, characterLimit, className = '', ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      props.onChange?.(e);
    };

    return (
      <div className="space-y-2">
        {label && (
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-400">
              {label}
              {props.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {characterLimit && (
              <span className="text-xs text-gray-500">
                {charCount}/{characterLimit}
              </span>
            )}
          </div>
        )}
        <textarea
          ref={ref}
          onChange={handleChange}
          maxLength={characterLimit}
          className={`
            w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 
            text-white placeholder-gray-500 transition-colors
            focus:outline-none focus:border-blue-500 focus:bg-black/30
            disabled:opacity-50 disabled:cursor-not-allowed
            resize-none
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-400 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18.101 12.93a1 1 0 00-1.414-1.414L10 14.586l-6.687-6.687a1 1 0 00-1.414 1.414l8.1 8.1a1 1 0 001.414 0l9.1-9.1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';
