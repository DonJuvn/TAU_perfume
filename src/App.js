import logo from "./logo.svg";
import "./App.css";




import Header from "./components/header";
import Footer from "./components/footer";
import Catalogue from "./components/catalog";
import Feedbacks from "./components/feedbacks";

function App() {
   return (
      <>
         <Header />
         <Catalogue/>
         <Feedbacks />
         <Footer/>
      </>
   );
}

export default App;
