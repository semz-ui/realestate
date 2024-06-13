import { fData } from "@/constants/featuredData";
import { useNavigate } from "react-router-dom";

function FeaturedCategories() {
  const navigate = useNavigate();
  const handleNavigation = (id: number) => {
    navigate(`/single-apartment`, {
      state: {
        itemId: id,
      },
    });
  };
  return (
    <div className="flex flex-col md:items-start pt-6 items-center">
      <h1 className="text-2xl font-semibold mb-4 md:text-left text-center pt-2">
        Featured Categories
      </h1>
      <div className="flex flex-wrap md:justify-start ">
        {fData.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out p-4 rounded-lg"
            onClick={() => handleNavigation(item.id)}

            // style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="bg-cover bg-center h-[100px] md:w-[200px] w-full rounded-lg mr-4 "
            />
            <h1 className="text-lg mt-2">${item.price}</h1>
            <div className="flex gap-1">
              <h1 className="text-muted-foreground text-sm">{item.bed} beds</h1>
              <h1 className="text-muted-foreground text-sm">
                {item.bath} baths
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategories;
