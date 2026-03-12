import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getNews } from "@/app/services/newsapi";
export default async function About() {
  const news = await getNews();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center text-white justify-center mx-5 my-10 ">
        <div>
          {news.articles.map((p) => (
            <div key={p.url}>
            <a
              
              href="#"
              className="bg-neutral-primary-soft block  p-6 border border-default "
            >
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                {p.title}
              </h5>

              <p className="text-body">{p.description}</p>
              
            </a>
            <br />
            </div>
            
          ))}
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
