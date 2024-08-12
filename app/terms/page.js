import React from "react";

export default function TermsOfUse() {
    return(
        <div className="overflow-x-hidden">
             <div className='flex flex-col justify-center lg:flex-row lg:justify-around p-20 text-center lg:text-left items-center w-screen min-h-screen bg-cover bg-web-hero'>
                <h1 className="bg-gradient-green bg-clip-text text-transparent text-5xl 3xl:text-[8rem] mb-12 font-semibold">Terms of Use</h1>
            </div>
            <div className="flex justify-center items-start flex-col px-16 lg:px-32 py-24 lg:py-36 bg-dark-geo">
                <h2 className="mb-8">Acceptance of Terms</h2>
                <p className="mb-16">{`By accessing and using this website ("Site"), you agree to comply with and be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please refrain from using the Site.`}</p>
                <h2 className="mb-8">Changes to the Terms</h2>
                <p className="mb-16">{`We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site following any changes constitutes acceptance of those changes, so we encourage you to review these Terms periodically.`}</p>
                <h2 className="mb-8">Use of the Site</h2>
                <h3 className="text-6xl">Prohibited Conduct</h3>
                <p>{`While we encourage creativity and innovation,`}</p>
                <ul className="text-off-white text-xl leading-loose my-16 pl-8 border-l-primary-main border-l">
                    <li>{`You may not use the Site for any unlawful purpose or in violation of any applicable laws.`}</li>
                    <li>{`You may not attempt to gain unauthorized access to any portion of the Site or its systems.`}</li>
                    <li>{`You may not distribute viruses or other harmful computer code through the Site.`}</li>
                    <li>{`ou may not use the Site to harass, threaten, or otherwise infringe on the rights of others.`}</li>
                </ul>
                <h3 className="text-6xl">Content Use</h3>
                <p className="mb-16">{`All content provided on the Site is for informational purposes only. You may not reproduce, distribute, or otherwise exploit the content without our express written permission.`}</p>
                <h2>Intellectual Property</h2>
                <p className="mb-16">{`The Site and its original content, features, and functionality are owned by OVRTONE Media Group, LLC and are protected by international copyright laws. Unauthorized use of any materials on the Site may violate these laws and is strictly prohibited.`}</p>
                <h2>Third-Party Links</h2>
                <p className="mb-16">{`Our Site may contain links to third-party websites or services that are not owned or controlled by OVRTONE Media Group, LLC. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. Use of these third-party sites is at your own risk, so proceed with caution.`}</p>
                <h2 >Limitation of Liability</h2>
                <p className="mb-16">{`To the fullest extent permitted by law, OVRTONE Media Group, LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any other damages whatsoever, arising out of or related to your use of the Site. This includes, without limitation, damages for loss of profits, data, or other intangibles, even if we have been advised of the possibility of such damages.`}</p>
                <h2>Indemnification</h2>
                <p className="mb-16">{`You agree to indemnify, defend, and hold harmless OVRTONE Media Group, LLC and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising out of or related to your use of the Site or any violation of these Terms.`}</p>
                <h2>Governing Law</h2>
                <p className="mb-16">{`These Terms shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in the United States, and you hereby consent to the jurisdiction and venue of such courts.`}</p>
                <h2>Termination</h2>
                <p className="mb-16">{`We reserve the right to terminate or suspend your access to the Site, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Site, us, or third parties, or for any other reason, at our sole discretion.`}</p>
                <h2>Governing Law</h2>
                <p>{`If you have any questions about these Terms, please contact us at `}<a href="mailto:legal@ovrtonemedia.com">{`legal@ovrtonemedia.com`}</a></p>
            </div>
        </div>
    )
}