
import LandingPage from "./LandingPage";
import FeaturedCategories from "./FeaturedCategories";
import { Cards } from "@/components/Cards";

function Dashboard() {
  return (
    <div className="pb-10">
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

export default Dashboard;
