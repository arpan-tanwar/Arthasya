import Header from "@/components/Header";
import Home from "@/pages/Home";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
function HomePage() {
  return (
    <>
      <div className="bg-neutral-100">
        <Header />
        <br />
        <Home />
        <br />
        <ContactUs />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
