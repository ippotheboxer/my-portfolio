// Components
import Divider from "../components/Divider";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import Intro from "../components/Intro";
import Work from "../components/Work";
import FeaturedProjects from "../components/FeaturedProjects";
import About from "../components/About";

export default function Home() {
    return ( <main>
    <div className="container">
        <Intro />
        <Divider />
        <Work />
        <Divider />
        <FeaturedProjects />
        <Divider />
        <Technologies />
        <Divider />
        <About />
        <Divider />
        <ContactForm />
        <Divider />
        <Footer />
    </div>
    </main> )
}