function Amenities({ header, data }: { header: string; data: [] }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 md:text-left text-center pt-2">
        {header}
      </h1>
      <div className="w-full flex flex-wrap">
        {data?.map((dat, key) => (
          <div
            className="w-[200px] h-[50px] mr-6 border border-slate-300 rounded-sm flex items-center justify-between"
            key={key}
          >
            <p className="ml-2">{dat}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
