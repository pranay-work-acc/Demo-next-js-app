import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1>Home</h1>
      </div>
      <Footer/>
    </div>
  );
}
