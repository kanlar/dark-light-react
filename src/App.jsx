import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SiteRoutes from "./SiteRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <div className="row">
          <SiteRoutes />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
