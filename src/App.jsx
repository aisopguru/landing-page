import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Choice from "./components/Choice.jsx";
import Procedure from "./components/Procedure.jsx";
import Consultations from "./components/Consultations.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Prices from "./components/Prices.jsx";

import Footer from "./components/Footer.jsx";
// Import script, and styles AOS:
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    //  initialize AOS
    AOS.init({
        duration: 1800,
        offset: 0,
    })

    return (
        <div className='overflow-hidden'>
            <Header/>
            <Hero />
            <Choice />
            <Procedure />
            <Consultations />
            {/*<Prices />*/}
            <CtaSection />
            <Footer />
        </div>
    );
};

export default App;