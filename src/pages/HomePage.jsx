import CategoriesSection from "../components/Categories";
import Layout from "../Layout/layout";
import Hero from "../components/Hero";
import Title from "../components/Title";

const Home = () => {
    return (
        
    <Layout title={'home'}>
      
    <Title text={"See an insight why we are fans. Feel the adrenaline!"}/>
      <Hero />

  
      <Title text={"Explore Top Rated Anime by Genre/Category"}/>
        <CategoriesSection />
    </Layout>
       
    );
}

export default Home;
