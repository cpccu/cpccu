export default function Card({ item }) {
  return (
    <>
      {item ? (
        <div className="shrink-0 border w-[287px] min-h-[190px] px-5 relative rounded-lg bg-black/10 py-7 shadow-md hover:shadow-xl hover:ring-1 ring-primary transition-all duration-300">
          <div className="absolute border shadow rounded-full w-16 h-16 left-[40%] -top-[16%] bg-white overflow-hidden">
            <img
              className="object-cover h-full w-full rounded-full"
              src={item.img}
              alt=""
            />
          </div>
          <h1 className="text-center my-4 font-bold text-xl">{item.name}</h1>
          <p className="text-center text-sm">{item.details}</p>
        </div>
      ) : (
        <div className="shrink-0 border w-[287px] min-h-[190px] px-5 relative rounded-lg bg-black/10 py-7 shadow-md">
          <div className="absolute border shadow rounded-full w-16 h-16 left-[40%] -top-[16%] bg-white overflow-hidden">
            <div className="loading h-full w-full"></div>
          </div>
          <div className="h-5 w-36 mx-auto my-4 rounded-lg loading"></div>
          <div className="h-2 rounded-lg w-full mb-2 loading"></div>
          <div className="h-2 rounded-lg w-full mb-2 loading"></div>
          <div className="h-2 rounded-lg w-full mb-2 loading"></div>
          <div className="h-2 rounded-lg w-full mb-2 loading"></div>
          <div className="h-2 rounded-lg w-full mb-2 loading"></div>
        </div>
      )}
    </>
  );
}
