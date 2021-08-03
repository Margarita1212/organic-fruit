import Header from "./pages/header";
import SiteContent from "./pages/content";
import Subscription from "./pages/subscription";
import Footer from "./pages/footer";

function App() {
    return (
        <div id="page" className="hfeed site main-content">
            <Header/>
            <SiteContent/>
            {/*<Subscription/>*/}
            <Footer/>
        </div>
    );
}

export default App;
