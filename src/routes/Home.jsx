import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />

      <section className="w-full h-screen min-h-[600px] pt-28 bg-gradient-to-br  from-esmerald to-esmerald flex justify-center text-white">
        <div className="w-80  flex flex-col  gap-5">
          <h3 className="italic text-4xl ">2025</h3>
          <h2 className="text-6xl ">Summer Jackets</h2>
          <p className=" font-light">Summer Sale / Up to 50% OFF</p>
          <button className="bg-yellow rounded-lg w-36 h-10 text-esmerald font-semibold ">
            Open Collection
          </button>
        </div>
        <div>
          <picture></picture>
        </div>
      </section>
    </>
  );
}
/**
 *
 * <img src="src\assets\images\home\outfit1.webp" alt="outfit1" />
 */
