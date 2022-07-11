import useProjects from "../hooks/useProjects";

export default function Projects(props) {
  const projects = useProjects();

  function ProjectCard({ name, description, url }) {
    return (
      <div key={name} className="ProjectCard">
        <h2>{name}</h2>
        <p>{description}</p>
        <button onClick={() => window.location.href=url}>
          View on GitHub
        </button>
      </div>
    );
  }

  return (
    <div className="Projects" ref={props.refProp}>
      <h1>Projects</h1>
      <div className="Projects--Cards">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              url={project.url}
            />
          );
        })}
      </div>
    </div>
  );
}
