import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Posts() {
  const navigation = [
    // { name: 'Dashboard', href: '#', current: true },
    { name: "Post 1", href: "/gallery/posts/1", current: false },
    { name: "Post 2", href: "/gallery/posts/2", current: false },
    { name: "Post 3", href: "/gallery/posts/3", current: false },
  ];
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h2>
            {navigation.map((items) => (
          <a key={items.name} href={items.href} >
            <button type="button" className="bg-white rounded py-2 px-4 shadow-xl">
              {items.name}

            </button>
            <br />
             <br></br>
            </a>
        ))}
        </h2>
        
      </div>
      <Footer/>
    </div>
  );
}
