import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const EFFECTIVE_DATE = 'June 27, 2026';
const COMPANY = 'Apt-Intel';
const EMAIL = 'privacy@chatseller.dev';
const APP_NAME = 'ChatSeller';

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

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <p style={{ color: 'rgb(120 113 108)', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; {COMPANY}
        </p>

        {/* Important notice box for WhatsApp/Meta compliance */}
        <div className="legal-notice" style={{
          borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '2.5rem',
          background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.25)',
        }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <svg width="18" height="18" fill="none" stroke="rgb(96 165 250)" strokeWidth={2} viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p style={{ color: 'rgb(163 158 153)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
              {APP_NAME} operates on the WhatsApp Business Platform provided by Meta Platforms Ireland Limited.
              By using our service, you acknowledge that conversations handled by our platform
              are also subject to WhatsApp&apos;s own{' '}
              <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer" style={{ color: 'rgb(96 165 250)' }}>
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://www.whatsapp.com/legal/terms-of-service" target="_blank" rel="noreferrer" style={{ color: 'rgb(96 165 250)' }}>
                Terms of Service
              </a>.
            </p>
          </div>
        </div>

        <Section title="1. Who We Are">
          <P>
            {COMPANY} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates {APP_NAME}, a WhatsApp-powered AI sales automation
            platform. Our registered business address is in Nigeria. For privacy inquiries,
            contact us at <a href={`mailto:${EMAIL}`} style={{ color: 'rgb(96 165 250)' }}>{EMAIL}</a>.
          </P>
          <P>
            This Privacy Policy explains how we collect, use, store, and protect information
            when you or your customers interact with {APP_NAME}.
          </P>
        </Section>

        <Section title="2. Information We Collect">
          <P><strong style={{ color: 'rgb(214 211 208)' }}>2.1 Business Account Information</strong></P>
          <P>When you register as a business on ChatSeller, we collect:</P>
          <UL items={[
            'Business name, email address, and contact phone number',
            'WhatsApp Business Account credentials (access tokens stored encrypted)',
            'Business category, description, and operating hours you provide',
            'Product catalog data you upload (names, prices, images, descriptions)',
            'Knowledge base content you upload (PDFs, URLs, FAQ text)',
            'Billing and subscription information (payment details handled by our payment processors)',
          ]}/>

          <P><strong style={{ color: 'rgb(214 211 208)' }}>2.2 Customer Conversation Data</strong></P>
          <P>
            When your customers message your WhatsApp Business number connected to ChatSeller, we process:
          </P>
          <UL items={[
            'The customer\'s WhatsApp phone number (as provided by Meta\'s WhatsApp Business API)',
            'Message content sent to and from the business number',
            'Timestamps and delivery status of messages',
            'Order details captured during AI-assisted conversations',
            'Customer intent classifications generated by our AI pipeline',
          ]}/>
          <P>
            We do not collect the personal identity of your end customers beyond what is included
            in WhatsApp messages. We never access your customers&apos; WhatsApp profile pictures,
            status messages, or contacts lists.
          </P>

          <P><strong style={{ color: 'rgb(214 211 208)' }}>2.3 Usage and Technical Data</strong></P>
          <UL items={[
            'Dashboard login events and feature usage analytics',
            'API request logs for debugging and performance monitoring',
            'Browser type and device information for dashboard users',
            'IP addresses for security and fraud prevention',
          ]}/>
        </Section>

        <Section title="3. How We Use Your Information">
          <P>We use the data we collect to:</P>
          <UL items={[
            'Operate the ChatSeller platform and deliver AI-powered responses to your customers',
            'Train and maintain the AI models that power your business\'s knowledge base and catalog retrieval',
            'Send you operational notifications (e.g., new orders, AI escalation alerts) via WhatsApp',
            'Process billing and manage your subscription',
            'Detect and prevent abuse, fraud, and policy violations',
            'Improve ChatSeller\'s AI accuracy and response quality across the platform',
            'Comply with legal obligations, including requests from regulatory authorities',
          ]}/>
          <P>
            We do <strong style={{ color: 'rgb(214 211 208)' }}>not</strong> sell your data or your
            customers&apos; data to third parties. We do not use your customer conversation data
            to train AI models for other businesses.
          </P>
        </Section>

        <Section title="4. WhatsApp Business Platform">
          <P>
            ChatSeller is built on the WhatsApp Business Platform (Cloud API), provided by
            Meta Platforms Ireland Limited. To use ChatSeller, you must have an approved WhatsApp
            Business Account and agree to Meta&apos;s WhatsApp Business Terms of Service.
          </P>
          <P>
            When messages are exchanged through ChatSeller:
          </P>
          <UL items={[
            'Messages are transmitted through Meta\'s infrastructure before reaching ChatSeller\'s servers',
            'Meta may retain message metadata in accordance with their own privacy policy',
            'ChatSeller receives message content via webhook from Meta\'s Cloud API',
            'We store message content on our servers (MongoDB Atlas, hosted in Ireland/EU) for conversation continuity and analytics',
          ]}/>
          <P>
            Your use of WhatsApp for commercial messaging must comply with{' '}
            <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noreferrer" style={{ color: 'rgb(96 165 250)' }}>
              WhatsApp&apos;s Business Policy
            </a>{' '}
            and{' '}
            <a href="https://www.whatsapp.com/legal/commerce-policy/" target="_blank" rel="noreferrer" style={{ color: 'rgb(96 165 250)' }}>
              Commerce Policy
            </a>.
            ChatSeller is not responsible for your compliance with these policies.
          </P>
        </Section>

        <Section title="5. Data Storage and Security">
          <P>
            Your data is stored on MongoDB Atlas (European region) and Cloudinary for media files.
            We apply the following security measures:
          </P>
          <UL items={[
            'All data in transit is encrypted using TLS 1.2 or higher',
            'WhatsApp access tokens and API credentials are stored encrypted at rest using AES-256',
            'Passwords are hashed using bcrypt with appropriate work factors',
            'Access to production databases is restricted to authorised engineers via VPN',
            'We conduct regular security reviews and dependency audits',
          ]}/>
          <P>
            Despite these measures, no system is completely secure. We encourage you to use
            strong, unique passwords for your ChatSeller dashboard account.
          </P>
        </Section>

        <Section title="6. Data Retention">
          <UL items={[
            'Business account data is retained for the duration of your subscription and 90 days after cancellation',
            'Customer conversation logs are retained for 12 months by default; you can request earlier deletion',
            'Order records are retained for 7 years to comply with applicable financial record-keeping requirements',
            'Analytics aggregates are retained indefinitely in anonymised form',
            'Deleted accounts have their personally identifiable data purged within 30 days',
          ]}/>
        </Section>

        <Section title="7. Third-Party Services">
          <P>ChatSeller integrates with the following third-party services, each with their own privacy policies:</P>
          <UL items={[
            'Meta / WhatsApp Business API — message delivery infrastructure',
            'MongoDB Atlas — primary database (EU region)',
            'Cloudinary — media and image storage',
            'Paystack — payment processing for Nigerian businesses (where applicable)',
            'OpenAI / Anthropic — AI language model inference (messages may be processed by these providers\' APIs in accordance with their data processing agreements)',
          ]}/>
        </Section>

        <Section title="8. Your Rights">
          <P>As a business account holder, you have the right to:</P>
          <UL items={[
            'Access all data we hold about your account',
            'Request correction of inaccurate data',
            'Request deletion of your account and associated data',
            'Export your conversation history and catalog data in JSON format',
            'Opt out of non-essential analytics collection',
          ]}/>
          <P>
            Your customers (end users interacting via WhatsApp) have the right to request
            deletion of their conversation history. You are responsible for handling such
            requests from your customers and may submit deletion requests on their behalf
            to <a href={`mailto:${EMAIL}`} style={{ color: 'rgb(96 165 250)' }}>{EMAIL}</a>.
          </P>
        </Section>

        <Section title="9. Children's Privacy">
          <P>
            ChatSeller is a B2B platform intended for use by registered businesses. We do not
            knowingly collect information from individuals under the age of 18. If you
            believe a minor has used your business&apos;s ChatSeller-connected WhatsApp number
            to interact with the AI, please contact us and we will delete the relevant records.
          </P>
        </Section>

        <Section title="10. Changes to This Policy">
          <P>
            We may update this Privacy Policy from time to time. We will notify you of
            material changes via email and/or a notice on your dashboard. Continued use
            of ChatSeller after a change constitutes acceptance of the updated policy.
            The effective date at the top of this page always reflects the current version.
          </P>
        </Section>

        <Section title="11. Contact Us">
          <P>For privacy-related inquiries, data requests, or complaints:</P>
          <div className="legal-contact-box" style={{
            borderRadius: 10, padding: '1.25rem 1.5rem',
            background: 'rgb(18 16 15)', border: '1px solid rgb(41 37 36)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div><span style={{ color: 'rgb(96 165 250)', fontWeight: 600 }}>Email: </span><a href={`mailto:${EMAIL}`} style={{ color: 'rgb(163 158 153)', wordBreak: 'break-all' }}>{EMAIL}</a></div>
              <div><span style={{ color: 'rgb(96 165 250)', fontWeight: 600 }}>Company: </span><span style={{ color: 'rgb(163 158 153)' }}>{COMPANY}</span></div>
              <div><span style={{ color: 'rgb(96 165 250)', fontWeight: 600 }}>Response time: </span><span style={{ color: 'rgb(163 158 153)' }}>Within 5 business days</span></div>
            </div>
          </div>
        </Section>

        <div style={{ borderTop: '1px solid rgb(41 37 36)', paddingTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link to="/terms-of-service" style={{ color: 'rgb(96 165 250)', fontSize: '0.875rem', textDecoration: 'none' }}>Terms of Service →</Link>
          <Link to="/about" style={{ color: 'rgb(96 165 250)', fontSize: '0.875rem', textDecoration: 'none' }}>About ChatSeller →</Link>
        </div>
      </div>
    </div>
  );
}
