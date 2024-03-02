import { fData } from "@/constants/featuredData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Cards({ header }: { header: string }) {
  return (
    <Carousel className="w-full">
      <h1 className="text-2xl font-semibold mb-4 md:text-left text-center pt-2">
        {header}
      </h1>
      <CarouselContent>
        {fData.map((data, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/4 bg-cover bg-center h-[300px] w-[300px] rounded-lg mx-4 cursor-pointer px-52"
            style={{ backgroundImage: `url(${data.imageUrl})` }}
          />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
