import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const bestSales = products.filter((item) => item.category === "indian");
  useWindowScrollToTop();
  return (
    <Fragment>
      <h1 style={{textAlign:"center", 
          marginTop: '20px',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#0f3460',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'

      }}>Trending Articles</h1>
      <SliderHome />
      <Wrapper />
      <Section title="Latest Articles" bgColor="#f6f9fc" productItems={discoutProducts}/>
      <Section title="Editor's Picks" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
