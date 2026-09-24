import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";

export const siteNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Results", href: "/results" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Pay Now", href: "/pay-now" },
];

export const siteFooterLocations = [
  {
    title: "National HQ - Mail all documents here",
    lines: ["9201 N. Meridian Street, Suite 210", "Indianapolis, IN 46260"],
  },
  {
    title: "Chicago Location",
    lines: ["875 N. Michigan Ave, #3100", "Chicago, IL 60611"],
  },
  {
    title: "Cleveland Location",
    lines: ["9701 Brookpark Rd #250", "Cleveland, OH 44129"],
  },
];

export const siteMapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.883704453738!2d-86.1595288240134!3d39.921618671523575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b53cbee2df951%3A0xded11a966dab75a5!2sPinyerd%20Disability%20Law%2C%20LLC%20-%20VA%20Disability%20%26%20Social%20Security%20Disability%20Attorneys!5e0!3m2!1sen!2sar!4v1790277968168!5m2!1sen!2sar";

export const siteFooterSocials = [
  { icon: "/icons/icon-linkedin.svg", label: "LinkedIn", href: "#" },
  { icon: "/icons/icon-google-footer.svg", label: "Google", href: "#" },
  { icon: "/icons/icon-facebook.svg", label: "Facebook", href: "#" },
];

export const siteFooterLinks = [
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const siteFooterDisclaimer = [
  "The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.",
  "This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.",
];

export const siteContact = {
  href: "/contact",
  label: "Contact Us",
};

export const sitePhone = {
  href: "tel:3173481800",
  label: "Call Us for a Consultation",
};

export const sitePracticeAreas = [
  { icon: "/icons/icon-ssdi.svg", label: "Social Security Disability Insurance (SSDI)", href: "/practice-areas/ssdi" },
  { icon: "/icons/icon-short-term.svg", label: "Short-Term Disability Insurance", href: "/practice-areas/short-term-disability" },
  { icon: "/icons/icon-ssi.svg", label: "Supplemental Security Income (SSI)", href: "/practice-areas/ssi" },
  { icon: "/icons/icon-long-term.svg", label: "Long-Term Disability Insurance", href: "/practice-areas/long-term-disability" },
  { icon: "/icons/icon-veterans.svg", label: "Veterans Disability Benefits", href: "/practice-areas/veterans-disability" },
];

export const siteContactFormContent = {
  heading: "Get Pinyerd Law on Your Side",
  phoneDisplay: "(317) 348-1800",
  phoneHref: "tel:3173481800",
  servingLabel: "Serving Clients Across All 50 States.",
  mapLabel: "Map & Directions [+]",
  mapHref: "/locations",
  description:
    "Contact us online or call (317) 348-1800 to start discussing your legal options with disability attorneys.<br /><br />We offer flexible scheduling and can meet with you on weekends or after-hours.",
  formHeading: "Reach Out Today to Speak With Our Experienced Attorneys",
  reasonsLabel: "Reason(s) for Inquiry",
  reasons: [
    "Social Security Disability Insurance",
    "Veterans Disability",
    "Supplemental Security Income",
    "Camp Lejeune Water Contamination Lawsuit",
  ],
  messageLabel: "Tell Us More About Your Case",
  submitLabel: "Send Message",
  formAction: "/api/contact",
};

export const siteResultGroups = [
  {
    label: "VA Disability",
    results: [
      { amount: "$255,100", description: "VA Disability case total back pay, won at the Board of Veterans Appeals" },
      { amount: "$241,500", description: "VA Disability case total back pay, won at the Board of Veterans Appeals" },
      { amount: "$203,500", description: "VA Disability case total back pay, won at the Board of Veterans Appeals" },
      { amount: "$184,530", description: "VA Disability case total back pay, won at the Board of Veterans Appeals" },
    ],
  },
  {
    label: "Social Security Disability",
    results: [
      { amount: "$75,150", description: "Back pay awarded for Social Security Disability case." },
      { amount: "$74,140", description: "Back pay awarded for Social Security Disability case." },
      { amount: "$65,250", description: "Back pay awarded for Social Security Disability case." },
      { amount: "$65,225", description: "Back pay awarded for Social Security Disability case." },
    ],
  },
];

export const siteTestimonialReviews = [
  {
    quote:
      "As a veteran trying to understand and claim my benefits, I found the support from Pinyerd Law to be helpful and informative. They took the time to explain the process and answer my questions, which made a big difference. Overall a great experience. Thank you so much",
    name: "Janet Lincoln",
    avatar: avatar1,
  },
  {
    quote:
      "They have been absolutely wonderful and easy to work with. I have fought for disability for over 20 years and was about to give up. Pinyerd Law helped me finally win my case. I really appreciate everything they have done for me.",
    name: "Tammy Lehner",
    avatar: avatar2,
  },
];
