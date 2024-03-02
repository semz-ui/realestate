import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import FeaturedCategories from "./pages/FeaturedCategories";
import { Cards } from "./components/Cards";

function App() {
  return (
    <div className="pb-10">
      <Header />
      <div className="container">
        <LandingPage />
        <FeaturedCategories />
        <Cards header="New Arrivals" />
        <Cards header="Deals Of The Day" />
        <Cards header="Trending Now" />
      </div>
    </div>
  );
}

export default App;
