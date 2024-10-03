import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";
export const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Aboutus></Aboutus>
        <OurServices></OurServices>
        <Footer></Footer>
    </div>
  );
}
