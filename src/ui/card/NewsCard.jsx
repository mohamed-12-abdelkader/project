export default function NewsCard({ imageUrl, title }) {
    return <div className="card" style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}>
        <div className="overlay">
            <p>{title}</p>
        </div>
    </div>
}