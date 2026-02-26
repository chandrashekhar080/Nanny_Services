import React from "react";

export const CookiePolicy = (): JSX.Element => {
    return (
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8">
            <header className="text-center">
                <h1 className="font-bold text-heading text-3xl mb-2">
                    Cookie Policy
                </h1>
            </header>

            <article className="flex flex-col gap-6 text-sub-heading text-sm text-[#1F1F1F] leading-relaxed [font-family:'Poppins',Helvetica]">
                <section>
                    <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-heading text-xl tracking-[0] leading-normal mb-5">
                        Effective Date: September 2025
                    </h1>
                    <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
                    <p>
                        This Cookie Policy explains how <strong>All Around American – Nanny Services</strong> (“we”, “our”, “us”) uses cookies and similar technologies on our website. By using our site, you agree to the use of cookies in accordance with this policy.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">2. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites function properly, improve user experience, and provide information to website owners.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">3. Types of Cookies We Use</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Essential Cookies:</strong> These are required for basic site functionality, such as login, navigation, and security.
                        </li>
                        <li>
                            <strong>Performance Cookies:</strong> These collect anonymous data about how users interact with our website, helping us improve performance.
                        </li>
                        <li>
                            <strong>Functional Cookies:</strong> These remember user preferences and enhance the usability of our services.
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> These track browsing habits to deliver more relevant ads and measure campaign effectiveness.
                        </li>
                        <li>
                            <strong>Analytics Cookies:</strong> These help us understand user behavior using third-party tools like Google Analytics.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">4. How We Use Cookies</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To ensure our website operates efficiently and securely.</li>
                        <li>To remember your preferences and personalize your experience.</li>
                        <li>To analyze website traffic and usage trends.</li>
                        <li>To deliver targeted advertising relevant to your interests.</li>
                        <li>To improve overall service performance and content relevance.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">5. Managing Your Cookie Preferences</h2>
                    <p>
                        You can choose to accept or reject cookies by adjusting your browser settings. Most browsers automatically accept cookies, but you can usually modify your settings to decline them. Note that disabling cookies may limit your ability to use some parts of our site.
                    </p>
                    <p className="mt-2">
                        To learn more about managing cookies, visit{" "}
                        <a
                            href="https://www.allaboutcookies.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-1 underline"
                        >
                            www.allaboutcookies.org
                        </a>
                        .
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">6. Third-Party Cookies</h2>
                    <p>
                        Some cookies on our website are set by third parties (such as analytics or advertising providers). These third parties may use cookies to collect data about your online activities across different websites.
                    </p>
                    <p className="mt-2">
                        We encourage you to review the privacy and cookie policies of these providers to understand how they use your information.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">7. Data Collected Through Cookies</h2>
                    <p>
                        Cookies may collect information such as your IP address, browser type, device information, pages visited, and time spent on the site. This data helps us analyze traffic and improve performance without identifying you personally.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">8. Updates to This Cookie Policy</h2>
                    <p>
                        We may update this Cookie Policy periodically to reflect changes in our practices or for legal and regulatory reasons. Updates will be posted on this page with a revised effective date.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">9. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about our Cookie Policy or how we use cookies, please contact us:
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

export default CookiePolicy;
