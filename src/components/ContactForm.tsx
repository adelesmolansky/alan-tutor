'use client';

import { useState } from 'react';

interface FormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  studentName: string;
  studentGrade: string;
  tutoringSubject: string;
  additionalInfo: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    studentName: '',
    studentGrade: '',
    tutoringSubject: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setIsSubmitted(true);

      // Reset form after successful submission
      setFormData({
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        studentName: '',
        studentGrade: '',
        tutoringSubject: '',
        additionalInfo: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert(
        'There was an error submitting your form. Please try again or contact Alan directly at asmolansky@usc.edu'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const gradeLevels = [
    '6th Grade',
    '7th Grade',
    '8th Grade',
    '9th Grade',
    '10th Grade',
    '11th Grade',
    '12th Grade',
    'College',
  ];

  const subjects = [
    'SAT Math',
    'SAT Reading',
    'Chess',
    'Middle School Math',
    'Middle School Science',
    'Middle School English',
    'Middle School Social Studies',
    'High School English',
    'High School Math',
    'High School Science',
    'Other',
  ];

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-900 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          Your inquiry has been submitted successfully. I&apos;ll get back to
          you within 24 hours to discuss your tutoring needs and provide pricing
          information.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Parent Information */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            Parent Information
          </h3>
        </div>

        <div>
          <label
            htmlFor="parentName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Parent Name *
          </label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Enter parent's full name"
          />
        </div>

        <div>
          <label
            htmlFor="parentEmail"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Parent Email *
          </label>
          <input
            type="email"
            id="parentEmail"
            name="parentEmail"
            value={formData.parentEmail}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="parent@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="parentPhone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Parent Phone Number *
          </label>
          <input
            type="tel"
            id="parentPhone"
            name="parentPhone"
            value={formData.parentPhone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Student Information */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2 mt-6">
            Student Information
          </h3>
        </div>

        <div>
          <label
            htmlFor="studentName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Student Name *
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Enter student's full name"
          />
        </div>

        <div>
          <label
            htmlFor="studentGrade"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Student Grade Level *
          </label>
          <select
            id="studentGrade"
            name="studentGrade"
            value={formData.studentGrade}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          >
            <option value="">Select grade level</option>
            {gradeLevels.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="tutoringSubject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            What does the student want tutoring for? *
          </label>
          <select
            id="tutoringSubject"
            name="tutoringSubject"
            value={formData.tutoringSubject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          >
            <option value="">Select subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="additionalInfo"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Additional Information (Optional)
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Please share any additional details about the student's needs, goals, or specific areas they'd like to focus on..."
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </div>
            ) : (
              'Submit Inquiry'
            )}
          </button>
        </div>

        <div className="md:col-span-2 text-center">
          <p className="text-sm text-gray-500">
            I&apos;ll respond within 24 hours with pricing information and next
            steps.
          </p>
        </div>
      </div>
    </form>
  );
}
