import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
    const projectData = [
        { title: "Project One", desc: "Description here", img: "https://via.placeholder.com/300" },
        { title: "Project Two", desc: "Description here", img: "https://via.placeholder.com/300" },
        { title: "Project Three", desc: "Description here", img: "https://via.placeholder.com/300" },
        { title: "Project Four", desc: "Description here", img: "https://via.placeholder.com/300" },
    ];

    return (
        <section id="projects" className="projects">
            <h2>Featured Projects</h2>

            <div className="grid">
                {projectData.map((p, i) => (
                    <ProjectCard key={i} title={p.title} desc={p.desc} img={p.img} />
                ))}
            </div>
        </section>
    );
}
