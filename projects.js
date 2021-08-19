let projects = document.getElementById("projects");

const addProjectToDom = (project) => {
  let projectCard = document.createElement("div");

  let name = document.createElement("p");
  name.setAttribute("class", "name");
  name.innerText = project.title;
  projectCard.append(name);
  projects.append(projectCard);
};

function fetchData(data) {
  try {
    data.projects.forEach((project) => {
      console.log(project);
      addProjectToDom(project);
    });
  } catch (error) {
    console.log(error);
  }
}

let projectInformation = {
  projects: [
    {
      title: "Project 1",
      description: "Description 1",
      idProject: "1",
      category: "test",
      githubRepo: "test",
    },
    {
      title: "Project 2",
      description: "Description 2",
      idProject: "2",
      category: "2",
      githubRepo: "test",
    },
  ],
};

console.log(projectInformation);
fetchData(projectInformation);
