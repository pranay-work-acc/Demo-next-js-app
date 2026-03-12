import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex grow item-center text-7xl font-bold font-MONO text-shadow-gray-800 [text-shadow:3px_3px_10px_rgba(0,0,0,0.7)] text-white justify-center pt-50">
          <h1>PARSO TAK NEWS</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

