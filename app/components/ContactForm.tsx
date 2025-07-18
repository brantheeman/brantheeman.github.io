'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [errors, setErrors] = useState<Partial<FormData>>({});

	const validateForm = (): boolean => {
		const newErrors: Partial<FormData> = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.subject.trim()) {
			newErrors.subject = 'Subject is required';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		} else if (formData.message.trim().length < 10) {
			newErrors.message = 'Message must be at least 10 characters long';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		try {
			// Create mailto link with form data
			const subject = encodeURIComponent(formData.subject);
			const body = encodeURIComponent(
				`Hi Brandan,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
			);
			const mailtoLink = `mailto:brandan.pratt1@gmail.com?subject=${subject}&body=${body}`;
			
			// Open email client
			window.location.href = mailtoLink;
			
			// Mark as submitted after a short delay
			setTimeout(() => {
				setSubmitted(true);
				setIsSubmitting(false);
			}, 1000);
		} catch (error) {
			console.error('Error submitting form:', error);
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		
		// Clear error when user starts typing
		if (errors[name as keyof FormData]) {
			setErrors(prev => ({ ...prev, [name]: '' }));
		}
	};

	if (submitted) {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center"
			>
				<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
					<svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
					</svg>
				</div>
				<h3 className="text-xl font-semibold mb-2">Thank you for reaching out!</h3>
				<p className="text-gray-400">
					Your email client should have opened with your message. If not, you can reach me directly at{' '}
					<a href="mailto:brandan.pratt1@gmail.com" className="text-blue-400 hover:text-blue-300">
						brandan.pratt1@gmail.com
					</a>
				</p>
			</motion.div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
						Name *
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
							errors.name ? 'border-red-500' : 'border-gray-700'
						}`}
						placeholder="Your name"
					/>
					{errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
				</div>

				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
						Email *
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
							errors.email ? 'border-red-500' : 'border-gray-700'
						}`}
						placeholder="your.email@example.com"
					/>
					{errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
				</div>
			</div>

			<div>
				<label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
					Subject *
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
						errors.subject ? 'border-red-500' : 'border-gray-700'
					}`}
					placeholder="Project inquiry, collaboration, etc."
				/>
				{errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
					Message *
				</label>
				<textarea
					id="message"
					name="message"
					rows={6}
					value={formData.message}
					onChange={handleChange}
					className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
						errors.message ? 'border-red-500' : 'border-gray-700'
					}`}
					placeholder="Tell me about your project, ideas, or how I can help you..."
				/>
				{errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				className={`w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium transition-all ${
					isSubmitting
						? 'opacity-50 cursor-not-allowed'
						: 'hover:opacity-90 hover:shadow-lg'
				}`}
			>
				{isSubmitting ? (
					<div className="flex items-center justify-center gap-2">
						<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
						Sending...
					</div>
				) : (
					'Send Message'
				)}
			</button>
		</form>
	);
}