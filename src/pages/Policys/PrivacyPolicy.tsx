import React from "react";

export const PrivacyPolicy = (): JSX.Element => {
    return (
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8">
            <header className="text-center">
                <h1 className="font-bold text-heading text-3xl mb-2">
                    Privacy Policy
                </h1>

            </header>

            <article className="flex flex-col gap-6 text-sub-heading text-sm text-[#1F1F1F] leading-relaxed [font-family:'Poppins',Helvetica]">
                <section>
                    <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-heading text-xl tracking-[0] leading-normal mb-5">
                        Effective Date: September 2025
                    </h1>
                    <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
                    <p>
                        We at <strong>All Around American – Nanny Services</strong> (“we”,
                        “our”, “us”) are committed to respecting and protecting your
                        privacy. This Privacy Policy describes how we collect, use, disclose
                        and safeguard your personal information when you visit our website
                        or use our subscription-based platform that connects families and
                        caregivers.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">2. Information We Collect</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Personal Identification Information:</strong> name, email
                            address, phone number, postal address, date of birth.
                        </li>
                        <li>
                            <strong>Care & Service Preference Information:</strong> for
                            families — childcare requirements, schedules, children’s ages; for
                            caregivers — qualifications, experience, availability.
                        </li>
                        <li>
                            <strong>Account & Payment Details:</strong> username, password,
                            billing information, subscription plan.
                        </li>
                        <li>
                            <strong>Usage & Technical Information:</strong> IP address,
                            browser type, device identifiers, pages visited, time spent,
                            cookies and similar tracking technologies.
                        </li>
                        <li>
                            <strong>Communication Information:</strong> messages between
                            families and caregivers, support inquiries.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide, maintain, and improve our platform and services.</li>
                        <li>
                            Facilitate communications between families and caregivers and
                            process job postings or applications.
                        </li>
                        <li>Process billing and subscription payments.</li>
                        <li>
                            Personalize your experience and provide relevant content and
                            support.
                        </li>
                        <li>Monitor usage to enhance website performance.</li>
                        <li>Comply with legal obligations and defend legal rights.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">4. Disclosure of Your Information</h2>
                    <p>
                        We will not sell your personal data. We may share it with trusted
                        third parties, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Service providers</strong> assisting with operations such
                            as payment processing or background checks.
                        </li>
                        <li>
                            <strong>Families and caregivers</strong> as needed to enable
                            communication and matching.
                        </li>
                        <li>
                            <strong>Third parties</strong> in a merger, acquisition, or sale
                            of assets.
                        </li>
                        <li>
                            When required <strong>by law</strong> or to protect our rights and
                            safety.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">5. Cookies & Tracking Technologies</h2>
                    <p>
                        We use cookies and similar technologies to collect usage data. You
                        can disable cookies in your browser settings, but this may affect
                        website functionality.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">6. Data Retention</h2>
                    <p>
                        We keep your data only as long as needed to fulfil the purposes
                        outlined in this policy or comply with legal obligations.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">7. Security</h2>
                    <p>
                        We use reasonable technical and organizational measures to protect
                        your personal data. However, no method of internet transmission or
                        storage is completely secure.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">8. Children’s Privacy</h2>
                    <p>
                        Our services are not intended for children under 18. We do not
                        knowingly collect information from minors. If you believe a child
                        has provided us with data, please contact us to remove it.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">9. Your Rights & Choices</h2>
                    <p>
                        Depending on your location, you may have the right to access,
                        correct, delete, or restrict processing of your personal data, and
                        withdraw consent where applicable. To exercise these rights, contact
                        us at the email below.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">10. Links to Other Websites</h2>
                    <p>
                        Our site may contain links to third-party websites. We are not
                        responsible for their privacy practices and encourage reviewing
                        their policies.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">11. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy periodically. Updates will be
                        posted here with a revised effective date. Continued use of our
                        services indicates acceptance of changes.
                    </p>
                </section>

                <section>
                    <h2 className="font-semibold text-lg mb-2">12. Contact Us</h2>
                    <p>
                        If you have questions or concerns about this Privacy Policy, please
                        contact us:
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

export default PrivacyPolicy;
