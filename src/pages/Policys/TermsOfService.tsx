import React from "react";

export const TermsOfService = (): JSX.Element => {
    return (
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8">
            <header className="text-center">
                <h1 className="font-bold text-heading text-3xl mb-2">
                    Terms of Service
                </h1>
            </header>

            <article className="flex flex-col gap-6 text-sub-heading text-sm text-[#1F1F1F] leading-relaxed [font-family:'Poppins',Helvetica]">
                <section>
                    <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-heading text-xl tracking-[0] leading-normal mb-5">
                        Effective Date: September 2025
                    </h1>
                    <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
                    <p>
                        Welcome to <strong>All Around American – Nanny Services</strong> (“we,” “our,” “us”). These Terms of Service (“Terms”) govern your access to and use of our website, services, and subscription-based childcare platform (“Platform”). By using our services, you agree to comply with and be bound by these Terms.
                    </p>
                    <p className="mt-2">
                        If you do not agree to these Terms, please do not use our website or services.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">2. Eligibility</h2>
                    <p>
                        You must be at least 18 years old to use our Platform. By registering or using our services, you confirm that you meet this age requirement and have the legal capacity to enter into a binding contract.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">3. Our Services</h2>
                    <p>
                        We provide a digital platform that connects families seeking childcare with qualified caregivers. Our role is limited to facilitating these connections. We do not employ caregivers, nor do we guarantee their qualifications or suitability.
                    </p>
                    <p className="mt-2">
                        Users are responsible for conducting their own background checks and due diligence before entering into any agreements with other users.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">4. Account Registration</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            You must create an account to access certain features of our Platform.
                        </li>
                        <li>
                            You agree to provide accurate, complete, and up-to-date information during registration.
                        </li>
                        <li>
                            You are responsible for maintaining the confidentiality of your login credentials.
                        </li>
                        <li>
                            You must notify us immediately of any unauthorized use of your account.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">5. Subscription & Payments</h2>
                    <p>
                        Some parts of our Platform require a paid subscription. By purchasing a subscription, you authorize us (or our third-party payment processor) to charge your provided payment method for all applicable fees.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>All fees are non-refundable except as required by law.</li>
                        <li>
                            You are responsible for keeping your billing information current.
                        </li>
                        <li>
                            We may change our pricing at any time, with notice before any new rates take effect.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">6. User Responsibilities</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            You agree to use the Platform only for lawful purposes and in accordance with these Terms.
                        </li>
                        <li>
                            You will not misrepresent your identity, qualifications, or affiliations.
                        </li>
                        <li>
                            You agree not to post offensive, harmful, or discriminatory content.
                        </li>
                        <li>
                            You will comply with all applicable laws, including labor and privacy regulations.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">7. Intellectual Property</h2>
                    <p>
                        All content, branding, and materials available on our Platform—including text, graphics, logos, and design—are owned by or licensed to All Around American – Nanny Services. You may not copy, modify, distribute, or use these materials without our written permission.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">8. Termination</h2>
                    <p>
                        We may suspend or terminate your account at our discretion if you violate these Terms or engage in conduct harmful to our Platform or users.
                    </p>
                    <p className="mt-2">
                        You may also cancel your subscription or delete your account at any time by contacting our support team.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">9. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, <strong>All Around American – Nanny Services</strong> and its affiliates are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.
                    </p>
                    <p className="mt-2">
                        We are not responsible for interactions, agreements, or disputes between families and caregivers.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">10. Disclaimer</h2>
                    <p>
                        Our Platform is provided “as is” and “as available.” We make no warranties, express or implied, about the reliability, accuracy, or suitability of the services provided.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">11. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the United States and the State in which our company operates, without regard to conflict of law principles.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">12. Changes to These Terms</h2>
                    <p>
                        We may revise these Terms from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our Platform means you accept the revised Terms.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">13. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about these Terms, please contact us:
                    </p>
                    <ul className="list-none pl-0">
                        <li>
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:support@allaroundamerican-nannyservices.com"
                                className="text-primary-1 underline"
                            >
                                support@allaroundamerican-nannyservices.com
                            </a>
                        </li>
                        <li>
                            <strong>Address:</strong> [Insert Company Address]
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    );
};

export default TermsOfService;
