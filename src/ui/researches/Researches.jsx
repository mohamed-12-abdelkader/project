import Image from "next/image";
import { truncateText } from "@/lib/utils";

function Card() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div>
          <Image
            src={data.image}
            className="w-full"
            style={{ borderRadius: "20px", aspectRatio: "416 / 284" }}
            alt={data.title}
          />
        </div>
        <div className="py-3">
          <p>{data.date}</p>
          <h1 className="text-xl font-bold text-[#353939] my-2">
            &quot;{data.title}&quot;
          </h1>
          <p className="text-[#353939]">{truncateText(data.desc, 140)}</p>
        </div>
      </div>
      <button
        className="py-2 w-full text-[#0f7d7f]"
        style={{ border: "1px solid #0f7d7f", borderRadius: "30px" }}
      >
        اقرا المزيد
      </button>
    </div>
  );
}
export default function Researches({ data }) {
  return (
    <div dir="rtl" className="mt-8">
      {data.length ? (
        <div
          style={{
            rowGap: "32px",
            columnGap: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr))",
          }}
        >
          {" "}
          {data.map((e) => (
            <Card key={e.id} data={e} />
          ))}
        </div>
      ) : (
        <p>لا توجد نتيجة!!</p>
      )}
    </div>
  );
}
