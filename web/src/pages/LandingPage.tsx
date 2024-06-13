import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

function LandingPage() {
  return (
    <div className="mt-7">
      <div className="bg-cover bg-center bg-[url(https://res.akamaized.net/domain/image/upload/t_web/v1538713881/bigsmall_Mirvac_house2_twgogv.jpg)] h-[500px] w-full rounded-lg p-6">
        <div className="flex flex-col justify-end h-full pl-6">
          <h1 className="text-4xl text-white font-bold">Find your future</h1>
          <p className="text-white">
            Explore over millions of properties for sale or rent
          </p>
          <div className="bg-white md:w-1/2 w-full h-14 flex py-6 px-2 gap-2 items-center rounded-lg mt-10">
            <Search size={20} className="text-orange-300" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 outline-none placeholder-orange-300"
            />
            <Button>Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
