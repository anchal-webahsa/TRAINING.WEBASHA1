
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Routes from "./routes/Routes";
import EnquiryModal from "./components/common/EnquiryModal";


import ImageModal from "./components/common/ImageModal";


function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
      <ImageModal /> {/* global modal */}
      <EnquiryModal />
    </>
  );
}

export default App;













