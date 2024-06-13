function Details({ header, data }: { header: string; data: any }) {
  return (
    <div className="my-5">
      <h1 className="text-2xl font-semibold mb-4 md:text-left text-center pt-2">
        {header}
      </h1>
      <div className="bg-slate-300 h-[1px]" />
      <div className="flex my-5">
        <div className="w-1/2">
          <p>Price</p>
          <p>${data.price}</p>
        </div>
        <div>
          <p>Beds</p>
          <p>{data.bed}</p>
        </div>
      </div>
      <div className="bg-slate-300 h-[1px]" />
      <div className="flex my-5">
        <div className="w-1/2">
          <p>Bath</p>
          <p>{data.bath}</p>
        </div>
        <div>
          <p>Sqft</p>
          <p>{data.sqft}</p>
        </div>
      </div>
      <div className="bg-slate-300 h-[1px]" />
      <div className="flex my-5">
        <div className="w-1/2">
          <p>Type</p>
          <p>{data.type}</p>
        </div>
        <div>
          <p>Built</p>
          <p>{data.yearBuilt}</p>
        </div>
      </div>
      <div className="bg-slate-300 h-[1px]" />
    </div>
  );
}

export default Details;
