import Image from "next/image";

export default function NewsCard({ imageUrl, title }) {
    return <div style={{ borderRadius: "24px", overflow: "hidden", position: "relative" }}>
        <Image src={imageUrl} objectFit="cover" alt={title}></Image>
        <div className="card-desc">
            <p>{title}</p>
        </div>
    </div>
}