import "./styles/style.scss";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
    return (
        <div className="wrap">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
