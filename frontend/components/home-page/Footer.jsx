import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const footerLinks = [
  {
    title: "Links",
    links: [
      { label: "Home", href: "/" }
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Defi", href: "/solutions/defi" },
      { label: "NFT", href: "/solutions/nft" },
      { label: "Consulting", href: "/solutions/consulting" },
      { label: "Wallet Analysis", href: "/solutions/wallet-analysis" }
    ],
  }
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div className="col-lg-4 form-widget mb-30">
        <div className="logo">
            <Image src="/images/logo/logo.png" alt="logo" className="me-2" width={75} height={75} />
            <Link href="/" className="d-block" style={{fontSize: 2 + 'em', fontWeight: 'bold', background: '-webkit-linear-gradient(#fc80a4, #fc4ca4)',
             WebkitBackgroundClip: 'text',  WebkitTextFillColor: 'transparent'}}>
              Infiniteblocks
            </Link>
        </div>
        <h6 className="pt-40 pb-10 text-white fw-normal">
          Join our newsletter
        </h6>
        <form
          onSubmit={handleSubmit}
          action="#"
          className="position-relative me-xxl-5"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="fw-500 position-absolute">
            Subscribe
          </button>
        </form>
        <div className="fs-14 mt-10 text-white opacity-50">
          We only send interesting and relevant emails.
        </div>
      </div>
      {/* End .col */}
      {footerLinks.map((section) => (
        <div className="col-lg-2 col-sm-4 ms-auto mb-30" key={section.title}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer;
