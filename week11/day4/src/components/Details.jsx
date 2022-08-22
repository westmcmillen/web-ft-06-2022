import { useEffect } from "react";

export default function Details({ fetchDetails, detailData }) {
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-y-4 p-4 bg-neutral-50 border border-neutral-300 rounded">
        <h1 className="text-xl text-center">{detailData?.Title}</h1>
        <h1 className=" text-center">{detailData?.Actors}</h1>
        <img src={detailData.Poster} alt={detailData.Title} className="rounded" />
      </div>
    </div>
  );
}
