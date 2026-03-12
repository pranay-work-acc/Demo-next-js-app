export interface Article {
  title: string;
  url: string;
  description:string;
}
export interface News {
  articles: Article[]
}
const apiKey = process.env.NEWS_API_KEY
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

export async function getNews():Promise<News>{
    const res = await fetch(`${URL}`)
    if(!res.ok){
        console.error("error fetching data");
        
    }
    return res.json();
}
