import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const EFFECTIVE_DATE = 'June 27, 2026';
const COMPANY = 'Aivo Technologies';
const EMAIL = 'legal@aivo.dev';
const APP_NAME = 'ASM (Automated Sales Manager)';

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={{
        fontSize: '1.2rem', fontWeight: 700, color: 'rgb(245 245 243)',
        marginBottom: '1rem', paddingBottom: '0.625rem',
        borderBottom: '1px solid rgb(41 37 36)',
      }}>
        {title}
      </h2>
      <div style={{ color: 'rgb(163 158 153)', fontSize: '0.9rem', lineHeight: 1.85 }}>
        {children}
      </div>
    </div>
  );
}

function P({ children }) {
  return <p style={{ marginBottom: '0.75rem' }}>{children}</p>;
}

function UL({ items }) {
  return (
    <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map((item, i) => (
        <li key={i} style={{ listStyleType: 'disc' }}>{item}</li>
      ))}
    </ul>
  );
}

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: 64, minHeight: '100vh', background: 'rgb(10 10 10)' }}>
      <div className="legal-page" style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 2rem 6rem' }}>

        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          color: 'rgb(96 165 250)', fontSize: '0.875rem', textDecoration: 'none',
          marginBottom: '2rem',
        }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to home
        </Link>

        <span style={{
          display: 'inline-block', background: 'rgba(37,99,235,0.1)',
          color: 'rgb(96 165 250)', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: 20, marginBottom: '1.5rem',
        }}>Legal</span>

        <h1 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', fontWeight: 900,
          color: 'rgb(245 245 243)', letterSpacing: '-0.02em',
          lineHeight: 1.15, marginBottom: '0.75rem',
        }}>
          Terms of Service
        </h1>

        <p style={{ color: 'rgb(120 113 108)', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; {COMPANY}
        </p>

        {/* Summary box */}
        <div className="legal-notice" style={{
          borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '2.5rem',
          background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)',
        }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <svg width="18" height="18" fill="none" stroke="rgb(245 158 11)" strokeWidth={2} viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <p style={{ color: 'rgb(163 158 153)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
              By registering a business account on {APP_NAME} you agree to these Terms and to
              Meta&apos;s{' '}
              <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noreferrer" style={{ color: 'rgb(245 158 11)' }}>
                WhatsApp Business Policy
              </a>.
              {' '}If you do not agree, do not use the service.
            </p>
          </div>
        </div>

        <Section title="1. Acceptance of Terms">
          <P>
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between
            you (&quot;Business&quot; or &quot;you&quot;) and {COMPANY} (&quot;ASM&quot;, &quot;we&quot;, &quot;us&quot;) governing
            your access to and use of the {APP_NAME} platform, including all associated
            software, APIs, dashboards, and WhatsApp-integrated features.
          </P>
          <P>
            By creating an account, connecting a WhatsApp Business number, or using any
            feature of the platform, you confirm that you have read, understood, and
            agree to be bound by these Terms and our{' '}
            <Link to="/privacy-policy" style={{ color: 'rgb(96 165 250)' }}>Privacy Policy</Link>.
          </P>
        </Section>

        <Section title="2. Eligibility">
          <P>To use ASM, you must:</P>
          <UL items={[
            'Be a registered business entity or individual trading legally in any supported jurisdiction',
            'Have a valid WhatsApp Business Account approved by Meta Platforms',
            'Be at least 18 years of age',
            'Have the authority to bind your business to these Terms',
            'Not be prohibited from using the service under applicable law',
          ]}/>
        </Section>

        <Section title="3. WhatsApp Business Platform Compliance">
          <P>
            ASM is an independent service built on Meta&apos;s WhatsApp Business Platform.
            Your use of ASM for WhatsApp messaging is subject to:
          </P>
          <UL items={[
            <span key="a"><a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noreferrer" style={{ color: 'rgb(96 165 250)' }}>WhatsApp Business Policy</a></span>,
            <span key="b"><a href="https://www.whatsapp.com/legal/commerce-policy/" target="_blank" rel="noreferrer" style={{ color: 'rgb(96 165 250)' }}>WhatsApp Commerce Policy</a></span>,
            <span key="c"><a href="https://www.whatsapp.com/legal/terms-of-service" target="_blank" rel="noreferrer" style={{ color: 'rgb(96 165 250)' }}>WhatsApp Terms of Service</a></span>,
            'Meta\'s Messaging Guidelines and template approval requirements',
          ]}/>
          <P>
            You are solely responsible for ensuring your use of WhatsApp through ASM complies
            with all Meta policies. Violations of Meta&apos;s policies may result in suspension
            of your WhatsApp Business Account by Meta, independent of any action by ASM.
          </P>
          <P>
            You agree not to use ASM to send spam, unsolicited bulk messages, or messages
            to users who have not opted in to receive communications from your business.
          </P>
        </Section>

        <Section title="4. Permitted Use">
          <P>You may use ASM to:</P>
          <UL items={[
            'Automate customer inquiry responses for your registered business',
            'Manage and display your product catalog to customers via WhatsApp',
            'Capture and track orders placed through WhatsApp conversations',
            'Train an AI agent on your own business knowledge (documents, FAQs, URLs)',
            'Receive notifications and escalation alerts for conversations requiring human attention',
            'Manage staff access to conversations through role-based permissions',
          ]}/>

          <P>You may <strong style={{ color: 'rgb(245 245 243)' }}>not</strong> use ASM to:</P>
          <UL items={[
            'Send promotional messages to users who have not consented to receive them',
            'Impersonate another business or individual',
            'Engage in any illegal activity including fraud, phishing, or money laundering',
            'Resell, sublicense, or white-label the ASM platform without written permission',
            'Attempt to reverse-engineer, decompile, or extract ASM\'s source code or AI models',
            'Exceed your plan\'s usage limits through automation or API abuse',
            'Use the platform for any purpose that violates WhatsApp\'s Business or Commerce Policy',
          ]}/>
        </Section>

        <Section title="5. Account Responsibilities">
          <P>
            You are responsible for maintaining the confidentiality of your ASM dashboard
            credentials and WhatsApp Business access tokens. You must immediately notify us
            at <a href={`mailto:${EMAIL}`} style={{ color: 'rgb(96 165 250)' }}>{EMAIL}</a> of
            any unauthorised access to your account.
          </P>
          <P>
            All activity occurring under your account is your responsibility. ASM is not
            liable for losses resulting from compromised credentials where the breach
            was not caused by our systems.
          </P>
        </Section>

        <Section title="6. AI-Generated Content">
          <P>
            ASM uses large language models (LLMs) and retrieval-augmented generation (RAG)
            to produce responses on behalf of your business. You acknowledge that:
          </P>
          <UL items={[
            'AI-generated responses may occasionally be inaccurate, incomplete, or inappropriate despite guardrails',
            'You are responsible for reviewing and configuring your knowledge base to minimise incorrect responses',
            'You are ultimately responsible for all communications sent from your WhatsApp Business number, including those generated by ASM',
            'ASM\'s compliance guardrail is designed to limit off-topic responses, but it does not guarantee perfect accuracy',
            'You should test AI responses on your catalog and FAQs before going live with customers',
          ]}/>
        </Section>

        <Section title="7. Subscription and Payment">
          <P>
            ASM is offered on a subscription basis. Subscription plans, pricing,
            and feature limits are displayed on our pricing page and may be updated with
            30 days&apos; notice to existing subscribers. Prices are shown in the local
            currency of your market where available.
          </P>
          <UL items={[
            'Subscriptions are billed on the cycle chosen at sign-up (monthly or annual)',
            'Annual subscriptions may be paid offline to your account manager',
            'Where Paystack is used, payments are subject to Paystack\'s terms and applicable card/bank charges',
            'Refunds are available within 7 days of a new subscription if ASM is unable to deliver the core service (AI responses via WhatsApp)',
            'Unused portions of a billing period are non-refundable on cancellation',
          ]}/>
        </Section>

        <Section title="8. Service Availability">
          <P>
            We target 99.5% uptime for the ASM platform, excluding scheduled maintenance
            and events outside our control (including WhatsApp API downtime, Meta outages,
            or force majeure events). We are not liable for losses resulting from service
            interruptions caused by third-party infrastructure.
          </P>
          <P>
            We will provide at least 24 hours&apos; notice for scheduled maintenance windows
            that affect service availability.
          </P>
        </Section>

        <Section title="9. Intellectual Property">
          <P>
            The {APP_NAME} platform, including its software, AI models, user interface, and
            branding, is the intellectual property of {COMPANY}. These Terms grant you a
            limited, non-exclusive, non-transferable licence to use the platform for your
            own business purposes only.
          </P>
          <P>
            You retain ownership of all content you upload to ASM (catalog data, knowledge
            base documents, business information). By uploading content, you grant ASM a
            licence to process and use that content solely to deliver the service to your business.
          </P>
        </Section>

        <Section title="10. Termination">
          <P>
            Either party may terminate the agreement at any time. You may close your account
            through the dashboard or by contacting support. We may suspend or terminate your
            access immediately if:
          </P>
          <UL items={[
            'You violate these Terms or WhatsApp\'s policies',
            'Your WhatsApp Business Account is suspended or banned by Meta',
            'We detect fraudulent or abusive activity',
            'Payment fails and is not resolved within 14 days of notice',
          ]}/>
          <P>
            On termination, your data will be handled as described in our Privacy Policy.
            Obligations that by nature survive termination (including sections 6, 9, 11, and 12)
            remain in effect.
          </P>
        </Section>

        <Section title="11. Limitation of Liability">
          <P>
            To the maximum extent permitted by law, {COMPANY} shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including but
            not limited to: loss of revenue, loss of customers, or damage to reputation
            arising from your use of ASM or from any AI-generated response sent to your customers.
          </P>
          <P>
            Our total liability to you for any claim arising out of or relating to these Terms
            or the platform shall not exceed the total fees paid by you to ASM in the 3 months
            preceding the claim.
          </P>
        </Section>

        <Section title="12. Governing Law">
          <P>
            These Terms are governed by the laws of the Federal Republic of Nigeria.
            Any disputes arising under or in connection with these Terms shall be subject
            to the exclusive jurisdiction of the courts of Lagos State, Nigeria, except
            where mandatory consumer protection law requires otherwise in your jurisdiction.
          </P>
        </Section>

        <Section title="13. Changes to These Terms">
          <P>
            We may update these Terms from time to time. Material changes will be communicated
            via email or dashboard notice at least 14 days before they take effect for
            existing subscribers. Continued use of ASM after that date constitutes acceptance
            of the updated Terms.
          </P>
        </Section>

        <Section title="14. Contact">
          <P>For legal inquiries, disputes, or Terms-related questions:</P>
          <div className="legal-contact-box" style={{
            borderRadius: 10, padding: '1.25rem 1.5rem',
            background: 'rgb(18 16 15)', border: '1px solid rgb(41 37 36)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div><span style={{ color: 'rgb(96 165 250)', fontWeight: 600 }}>Email: </span><a href={`mailto:${EMAIL}`} style={{ color: 'rgb(163 158 153)', wordBreak: 'break-all' }}>{EMAIL}</a></div>
              <div><span style={{ color: 'rgb(96 165 250)', fontWeight: 600 }}>Company: </span><span style={{ color: 'rgb(163 158 153)' }}>{COMPANY}</span></div>
            </div>
          </div>
        </Section>

        <div style={{ borderTop: '1px solid rgb(41 37 36)', paddingTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link to="/privacy-policy" style={{ color: 'rgb(96 165 250)', fontSize: '0.875rem', textDecoration: 'none' }}>Privacy Policy →</Link>
          <Link to="/about" style={{ color: 'rgb(96 165 250)', fontSize: '0.875rem', textDecoration: 'none' }}>About ASM →</Link>
        </div>
      </div>
    </div>
  );
}
