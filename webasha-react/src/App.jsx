
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Routes from "./routes/Routes";
import EnquiryModal from "./components/common/EnquiryModal";
import EnrollModal from "./components/common/EnrollModal";
import ImageModal from "./components/common/ImageModal";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
      <ImageModal /> {/* global modal */}
      <EnquiryModal />
      <EnrollModal />
    </>
  );
}

export default App;













