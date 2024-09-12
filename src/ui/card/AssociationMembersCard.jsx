import Image from "next/image";

export default function AssociationMembersCard({ imageUrl, name, position }) {
    return <div
        dir="rtl"
    >
        <div className="bg-[#D7DADA] overflow-hidden" style={{borderRadius: "9px 9px 0 0"}}>
            <Image
                src={imageUrl}
                alt={name}
                height={209}
                style={{ objectFit: "contain" }}
                className="mx-auto"
            />
        </div>
        <div className="p-2">
            <div className="text-center my-2">
                <h1 className="text-xl font-bold text-[#353939] my-2">
                    {name}
                </h1>
                <p className="text-[#353939] font-normal">{position}</p>
            </div>
        </div>

    </div>
}