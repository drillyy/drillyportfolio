import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([])
    fetch("https://api.github.com/users/drillyy/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        data.map((el) => {
          const newProject = {
          name: el.name,
          description: el.description,
          url: el.html_url,
          homepage: el.homepage,
          created_at: el.created_at,
          language: el.language,
        };
        setProjects((projects) => [...projects, newProject]);
        return null;
      })
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return projects;
};

export default useProjects;
