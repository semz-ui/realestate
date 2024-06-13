import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fData } from "@/constants/featuredData";
import { Cards } from "@/components/Cards";
import Details from "@/components/Details";
import Amenities from "@/components/Amenities";

function SingleApartment() {
  const [data, setData] = useState<any>({});
  const location = useLocation();
  const itemId = location.state?.itemId;
  console.log(data, "itemId");
  //  find single apartment data from featuredData.ts
  useEffect(() => {
    fData.find((item) => {
      if (item.id === itemId) {
        // console.log(item, "item");
        setData(item);
      }
    });
  }, []);
  return (
    <div className="mt-10 mb-96">
      <div
        className="bg-cover bg-center h-[300px] w-full rounded-lg cursor-pointer mb-4"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="flex items-end h-full pl-2 bg-black bg-opacity-40 rounded-lg">
          <h1 className="text-white text-xl font-semibold p-4">
            {data.mainName}
          </h1>
        </div>
      </div>
      <Cards header="Gallery" />
      <Details header="Details" data={data} />
      <Amenities header="Amenities" data={data.amenitites} />
    </div>
  );
}

export default SingleApartment;
