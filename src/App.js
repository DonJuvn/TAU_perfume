import logo from "./logo.svg";
import "./App.css";




import Header from "./components/header";
import Footer from "./components/footer";
import Catalogue from "./components/catalog";

function App() {
   return (
      <>
         <Header />
         <Catalogue/>
         <Footer/>
      </>
   );
}

export default App;
