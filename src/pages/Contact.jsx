import useDocumentTitle from "../hooks/useDocumentTitle";

const Contact = () => {
  useDocumentTitle("Contact");

  return (
    <section className="w-full h-screen relative flex">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/main/background2.webp')] bg-cover bg-center filter blur-sm" />

      {/* Main content */}
      <article className="relative z-10 w-5/6 max-w-3xl m-auto flex flex-col gap-5 py-5 px-14 text-start text-textColor bg-background opacity-90 rounded-md">
        <h1
          id="contact-heading"
          className="font-bold text-2xl"
          aria-labelledby="contact-heading"
        >
          Contact
        </h1>
        <p>
          Our Customer Service team is always happy to hear from you and answer
          any questions you may have.
        </p>

        <h2 className="text-xl font-semibold">
          Customer Service Operating Hours
        </h2>
        <p>
          Our Customer Service team will be here to help during our normal
          operating hours of <strong>9:00 – 17:30 GMT</strong>, Monday to
          Friday.
        </p>
        <p>
          In the lead-up to the busiest trading time of the year, we are
          experiencing a high volume of customer contact. Each one of your
          messages is very important to us, and we are working hard to respond
          as quickly as we can.
        </p>

        <h2 className="text-xl font-semibold">Contact Us</h2>
        <address className="not-italic">
          <p>
            <strong>Telephone:</strong>{" "}
            <a
              href="tel:+441572772480"
              className="text-mainColor underline hover:no-underline"
            >
              +44 (0) 1572 772 480
            </a>{" "}
            (charged at your standard network rate).
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@cavendishcountry.com"
              className="text-mainColor underline hover:no-underline"
            >
              support@cavendishcountry.com
            </a>
          </p>
        </address>
      </article>
    </section>
  );
};

export default Contact;
