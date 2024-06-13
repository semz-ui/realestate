import { Search, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between md:px-6 px-2 py-2 border-b sticky h-20 w-full bg-white top-0 z-10">
      <div className="flex gap-6 items-center ">
        <Link to="/">
          <h1 className="text-2xl font-semibold mb-4 md:text-left text-center pt-2 cursor-pointer">
            Merce
          </h1>
        </Link>
        <div className="md:w-96 w-48 h-8 bg-secondary rounded bg-black flex items-center px-2 gap-2 cursor-pointer">
          <Search size={20} color="gray" />{" "}
          <span className="text-muted-foreground">Search</span>
        </div>
      </div>
      <div className="flex md:gap-6 gap-2 items-center ">
        <ShoppingCart />
        <UserRound />
      </div>
    </div>
  );
}

export default Header;
