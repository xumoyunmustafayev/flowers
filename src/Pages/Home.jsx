import BlogPost from "../components/Home/BlogPost";
import FindMore from "../components/Home/FindMore";
import FlowersOption from "../components/Home/FlowersOption";
import HomeHero from "../components/Home/HomeHero";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FlowersOption />
      <FindMore />
      <BlogPost />
    </div>
  );
};

export default Home;
