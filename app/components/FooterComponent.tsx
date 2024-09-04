import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";
import Button from "react-bootstrap/Button";

const SocialIcon = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="bg-primary border border-white px-2 py-2 rounded-circle">
      <Image src={imgUrl} width={24} height={24} alt="social-media" />
    </div>
  );
};

const socialMediaContent = [
  "/SocialMedia/insta.png",
  "/SocialMedia/in.png",
  "/SocialMedia/mail.png",
  "/SocialMedia/wpp.png",
];

export const footerLinks = [
  {
    title: "Empresa",
    links: ["Nosotros", "Contactanos", "Precios", "Reseñas"],
  },
  {
    title: "Soporte",
    links: ["Ayuda", "Terminos", "Legal", "Privacidad"],
  },
];

const FooterComponent = () => {
  return (
    <Container
      className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-md-center align-items-start px-5 py-5 bg-secondary font-inter gap-lg-3 gap-5"
      data-aos="fade-up"
    >
      <div>
        <Link
          href="/"
          className="navbar-brand d-flex flex-row align-items-center gap-2"
        >
          <Image
            src="/Stats/logo-fieldcom.svg"
            width={245}
            height={70}
            alt="logo"
          />
        </Link>
        <div className="mt-4 text-silver fs-6">
          <p>Copyright © 2024 Fieldcom.</p>
          <p className="mt-3">All rights reserved</p>
        </div>
        <div className="mt-5 d-flex justify-content-start align-items-start gap-3">
          {socialMediaContent.map((item) => (
            <SocialIcon key={item} imgUrl={item} />
          ))}
        </div>
      </div>
      <div className="d-flex flex-lg-nowrap flex-wrap justify-content-between gap-5">
        <div className="d-flex row-gap-3 text-white">
          {footerLinks.map((items) => (
            <div className="d-flex flex-column gap-3" key={items.title}>
              <h5>{items.title}</h5>
              <ul className="d-flex flex-column">
                <li className="d-flex flex-column gap-2" role="button">
                  {items.links.map((links) => (
                    <span id="linkstyle" key={links}>
                      {links}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column gap-2">
          <h5 className="text-light">Stay up to date</h5>
          <div className="input-group">
            <input
              type="email"
              className="form-control bg-dark text-light shadow-none border border-0"
              id="exampleFormControlInput1"
              data-bs-theme="dark"
              placeholder="Your email address"
            />
            <Button className="btn btn-dark">
              <Image src="/send.svg" height={20} width={20} alt="send" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterComponent;
