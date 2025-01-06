const Contact = () => {
  return (
    <section className="w-full h-screen pt-28 relative flex">
      <div className="absolute inset-0 bg-[url('/images/main/background2.webp')] bg-cover bg-center filter blur-sm" />

      <div className="relative z-10 w-5/6 h-auto m-auto flex flex-col gap-5 py-10 px-5 text-start text-textColor bg-background opacity-90 rounded-md">
        <h1 className="font-bold text-2xl">Contact</h1>
        <p>
          Our Customer Service team is always happy to hear from you and answer
          any questions you may have.
        </p>
        <p className="text-xl">Customer service operating hours</p>
        <p>
          Our Customer Service team will be here to help, normal operating hours
          of 9.00 – 17.30 GMT Monday – Friday.
        </p>
        <p>
          In the lead up to the busiest trading time of the year, we are
          experiencing a high volume of customer contact. Each one of your
          contacts is very important to us and we are working hard to respond as
          quickly as we can.
        </p>
        <p>You can contact Cavendish Country as follows:</p>
        <p>
          <strong>Telephone:</strong> +44 (0) 1572 772 480 (charged at your
          standard network rate).
        </p>
        <p>
          <strong>Email:</strong> support@cavendishcountry.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
