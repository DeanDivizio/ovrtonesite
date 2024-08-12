import React from "react";

export default function TermsOfUse() {
    return(
        <div className="overflow-x-hidden">
             <div className='flex flex-col justify-center lg:flex-row lg:justify-around p-20 text-center lg:text-left items-center w-screen min-h-screen bg-cover bg-web-hero'>
                <h1 className="bg-gradient-green bg-clip-text text-transparent text-5xl 3xl:text-[8rem] mb-12 font-semibold">Terms of Use</h1>
            </div>
            <div className="flex justify-center items-start flex-col px-8 lg:px-32 py-24 lg:py-36 bg-dark-geo">
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Acceptance of Terms</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`By accessing and using this website ("Site"), you agree to comply with and be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please refrain from using the Site.`}</p>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Changes to the Terms</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site following any changes constitutes acceptance of those changes, so we encourage you to review these Terms periodically.`}</p>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Use of the Site</h2>
                <h3 className="mb-6 text-4xl md:text-6xl leading-snug">Prohibited Conduct</h3>
                <p className="mb-2 lg:mb-6 text-2xl md:text-3xl">{`While we encourage creativity and innovation,`}</p>
                <ul className="text-off-white text-xl leading-loose my-16 pl-8 border-l-primary-main border-l">
                    <li className="mb-6 leading-normal">{`You may not use the Site for any unlawful purpose or in violation of any applicable laws.`}</li>
                    <li className="mb-6 leading-normal">{`You may not attempt to gain unauthorized access to any portion of the Site or its systems.`}</li>
                    <li className="mb-6 leading-normal">{`You may not distribute viruses or other harmful computer code through the Site.`}</li>
                    <li className="mb-6 leading-normal">{`You may not use the Site to harass, threaten, or otherwise infringe on the rights of others.`}</li>
                </ul>
                <h3 className="mb-6 text-4xl md:text-6xl leading-snug">Content Use</h3>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`All content provided on the Site is for informational purposes only. You may not reproduce, distribute, or otherwise exploit the content without our express written permission.`}</p>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Intellectual Property</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`The Site and its original content, features, and functionality are owned by OVRTONE Media Group, LLC and are protected by international copyright laws. Unauthorized use of any materials on the Site may violate these laws and is strictly prohibited.`}</p>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Third-Party Links</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`Our Site may contain links to third-party websites or services that are not owned or controlled by OVRTONE Media Group, LLC. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. Use of these third-party sites is at your own risk, so proceed with caution.`}</p>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Limitation of Liability</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`To the fullest extent permitted by law, OVRTONE Media Group, LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any other damages whatsoever, arising out of or related to your use of the Site. This includes, without limitation, damages for loss of profits, data, or other intangibles, even if we have been advised of the possibility of such damages.`}</p>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Indemnification</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`You agree to indemnify, defend, and hold harmless OVRTONE Media Group, LLC and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising out of or related to your use of the Site or any violation of these Terms.`}</p>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Governing Law</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`These Terms shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in the United States, and you hereby consent to the jurisdiction and venue of such courts.`}</p>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Termination</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`We reserve the right to terminate or suspend your access to the Site, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Site, us, or third parties, or for any other reason, at our sole discretion.`}</p>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Governing Law</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`If you have any questions about these Terms, please contact us at `}<a className="text-2xl md:text-3xl" href="mailto:legal@ovrtonemedia.com">{`legal@ovrtonemedia.com`}</a></p>
            </div>
        </div>
    )
}