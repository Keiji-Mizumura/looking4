import Heading from "../components/meta/heading";
import Header from "../components/layout/header";
import Hero from "../components/layout/hero";
import Footer from "../components/layout/footer";
import HomeContent from "../components/layout/home-content";
import Categories from "../components/layout/categories";

export default function Home() {
  return (
    <div>
      {/* Meta Data */}
      <Heading />
      {/* Style Data */}
      <Header />
      <Hero />

      <main>
        <Categories />
        <HomeContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
