import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GalleryId({ params }: Props) {
  const list = [
    {
      id: 1,
      img: "https://bike.zigcdn.com/processedimages/royal-enfield/roadstar/source/roadstar680f577ade780.jpg",
    },
    {
      id: 2,
      img: "https://imgd.aeplcdn.com/1056x594/n/oe7r5fb_1830375.jpg?q=80&wm=3",
    },
    {
      id: 3,
      img: "https://cdn.bikedekho.com/processedimages/royal-enfield/roadstar/source/roadstar680f570e74cd4.jpg?imwidth=890",
    },
  ];

  const { id } = await params;
  const numId = Number(id);
  const item = list.find((p) => p.id == numId);
  if (!item){
    return <h1>Not found</h1>
  }
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mb-10 mt-10">
        <h1 className="text-white font-bold">Post id:{id}</h1>
        <br />
        <img src={item.img} alt="" width={500} height={300} className="rounded-xl"/>
      </div>
      <Footer/>
    </div>
  );
}
