import Navbar from "../../components/navbar/Navbar";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Donate from "../../components/donate/Donate";
import Contact from "../../components/contact/Contact";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Home className="home" />
            <About />
            <Donate />
            <Contact />
        </>
    )
}