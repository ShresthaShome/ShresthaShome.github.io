import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "./styles/App.css";

function App() {
  const myInfo = {
    name: "Shrestha Shome Ullas",
    address: "Tangail, Bangladesh",
  };

  const projects = [
    {
      title: "Ullas's PC Repair Shop",
      image: "src/assets/images/PC.png",
      link: "https://repairshop-by-ullas.vercel.app/home/",
    },
    {
      title: "IMDb clone",
      image: "src/assets/images/IMDb.png",
      link: "https://imdb-by-ullas.vercel.app/",
    },
    {
      title: "Notion AI Clone",
      image: "src/assets/images/Notion.png",
      link: "https://cloned-notion-ai.vercel.app/",
    },
    {
      title: "AI Chatbot",
      image: "src/assets/images/Helpbot.png",
      link: "https://ai-helper-chatbot.vercel.app/",
    },
  ];

  const contacts = {
    phone: "+8801518946109",
    email: "shrestha.shome@gmail.com",
    github: "https://github.com/ShresthaShome",
    linkedin: "https://www.linkedin.com/in/shrestha-shome/",
  };

  return (
    <>
      <NavBar name={myInfo.name} />

      <Hero {...myInfo} contacts={contacts} />

      <About info={myInfo} />
      <Works projects={projects} />
      <Contact contacts={contacts} />

      <footer className="mt-3 pb-1 px-2 text-[14px]">
        Made with ❤️ by{" "}
        <a href={contacts.github}>
          <u>{myInfo.name}</u>
        </a>
      </footer>
    </>
  );
}

export default App;
