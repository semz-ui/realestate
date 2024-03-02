import { fData } from "@/constants/featuredData";

function FeaturedCategories() {
  return (
    <div className="flex flex-col md:items-start pt-6 items-center">
      <h1 className="text-2xl font-semibold mb-4 md:text-left text-center pt-2">
        Featured Categories
      </h1>
      <div className="flex flex-wrap md:justify-start ">
        {fData.map((item, index) => (
          <div
            key={index}
            className="bg-cover bg-center h-[100px] md:w-[200px] w-full rounded-lg m-4 cursor-pointer"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="flex items-end h-full pl-2 bg-black bg-opacity-40 rounded-lg">
              <h1 className="text-white text-xl font-semibold">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategories;
