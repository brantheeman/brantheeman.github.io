'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Recent Work & Capabilities
				</motion.h2>

				<div className="space-y-16">
					{/* Identity Management Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Identity Management Platform</h3>
										<p className="text-gray-400">
											Secure identity management system with user registration, verification workflows, and comprehensive audit tracking for organizational use.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• PHP Backend</li>
												<li>• JavaScript Frontend</li>
												<li>• HTML/CSS Responsive UI</li>
												<li>• MySQL Database</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Key Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• User Registration System</li>
												<li>• Verification Workflows</li>
												<li>• Audit Logging</li>
												<li>• Role-based Access Control</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Capabilities</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Administrative Dashboard</li>
											<li>• Category Management</li>
											<li>• Security Compliance</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* User Interface */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													User Registration Interface
												</text>
											</g>

											{/* Processing Layer */}
											<g>
												<rect x="20" y="90" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="115" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Verification Workflow Engine
												</text>
											</g>

											{/* Access Control */}
											<g>
												<rect x="20" y="160" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="185" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Role-Based Access Control
												</text>
											</g>

											{/* Audit Trail */}
											<g>
												<rect x="20" y="230" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="255" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Audit Trail System
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="90" />
												<line x1="200" y1="130" x2="200" y2="160" />
												<line x1="200" y1="200" x2="200" y2="230" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Event Management Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Event Management Platform</h3>
										<p className="text-gray-400">
											Multi-event management system with registration capabilities, attendee tracking, and responsive design for organizational events.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• PHP Backend</li>
												<li>• JavaScript Frontend</li>
												<li>• HTML/CSS Responsive UI</li>
												<li>• MySQL Database</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Key Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Event Registration</li>
												<li>• Attendee Management</li>
												<li>• Mobile Responsive Design</li>
												<li>• Admin Controls</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Capabilities</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Real-time Updates</li>
											<li>• Multi-event Support</li>
											<li>• Data Export Features</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Registration Interface */}
											<g>
												<rect x="20" y="20" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="210" y="20" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="105" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Event Registration
												</text>
												<text x="295" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Admin Dashboard
												</text>
											</g>

											{/* Processing Layer */}
											<g>
												<rect x="20" y="90" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="115" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Event Management Engine
												</text>
											</g>

											{/* Attendee Tracking */}
											<g>
												<rect x="20" y="160" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="185" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Attendee Tracking System
												</text>
											</g>

											{/* Data Storage */}
											<g>
												<rect x="20" y="230" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="255" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Data Storage & Export
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="105" y1="60" x2="105" y2="90" />
												<line x1="295" y1="60" x2="295" y2="90" />
												<line x1="200" y1="130" x2="200" y2="160" />
												<line x1="200" y1="200" x2="200" y2="230" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Process Automation System */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Process Automation System</h3>
										<p className="text-gray-400">
											Digital workflow solution that streamlines organizational processes and reduces manual administrative tasks.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Tech Stack</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• PHP Backend</li>
												<li>• JavaScript Frontend</li>
												<li>• HTML/CSS Responsive UI</li>
												<li>• MySQL Database</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Key Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Workflow Automation</li>
												<li>• Document Processing</li>
												<li>• Data Management</li>
												<li>• Security Compliance</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Capabilities</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• System Integrations</li>
											<li>• Automated Workflows</li>
											<li>• Process Optimization</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Input Processing */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Document Input & Processing
												</text>
											</g>

											{/* Workflow Engine */}
											<g>
												<rect x="20" y="90" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="115" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Automated Workflow Engine
												</text>
											</g>

											{/* Integration Layer */}
											<g>
												<rect x="20" y="160" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="210" y="160" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="185" textAnchor="middle" className="fill-gray-400 text-[12px]">
													System Integration
												</text>
												<text x="295" y="185" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Data Management
												</text>
											</g>

											{/* Output Layer */}
											<g>
												<rect x="20" y="230" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="255" textAnchor="middle" className="fill-gray-400 text-[12px]">
													Automated Output & Reporting
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="90" />
												<line x1="105" y1="130" x2="105" y2="160" />
												<line x1="295" y1="130" x2="295" y2="160" />
												<line x1="200" y1="200" x2="200" y2="230" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
