import "./ProjectCard.css";

export default function ProjectCard({ title, desc, img }) {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}
