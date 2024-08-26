import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-slate-500">
      <h1>Hola gatos</h1>
      </div>
      <Footer />
    </>
  );
}
