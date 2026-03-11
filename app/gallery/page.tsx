import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <div>
          <Navbar />
          <div className="flex items-center justify-center h-screen">
            <a href="/gallery/posts">Open Posts</a>
          </div>
          <Footer/>
        </div>
  );
}
