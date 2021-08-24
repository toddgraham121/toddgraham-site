let projects = document.getElementById("projects");

const addProjectToDom = (project) => {
  let projectCard = document.createElement("div");
  projectCard.setAttribute("id", `${project.title}`);
  projectCard.setAttribute("class", "figure");
  let projectName = document.createElement("h3");
  projectName.setAttribute("class", "title");
  projectName.innerText = `${project.title}`;
  projectCard.append(projectName);
  let description = document.createElement("p");
  description.setAttribute("class", "description");
  description.innerText = `${project.description}`;
  projectCard.append(description);
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
      title: "Heart Disease Analysis",
      class: "Mobile Health in COVID-19",
      description:
        "This is a Django application which contains a dashboard visualizing cardiac disease risk factors. In addition to the dashboard, I trained and tested 5 different classifiers for users to predict whether or not they were at risk for cardiac disease.",
      idProject: "1",
      category: "machine learning",
      githubRepo:
        "https://github.com/toddgraham121/cs510-heart-attack-analysis",
    },
    {
      title: "Pneumonia Classifier using Transfer Learning",
      class: "Computer Vision and Deep Learning",
      description:
        "In this project, we created two convolutional neural net classifiers using VGG-16 and ResNet152 as backbones for transfer learning. These classifiers were able to detect pneumonia in chest x-ray images with an accuracy of up to 89%.",
      idProject: "2",
      category: "machine learning",
      githubRepo: "https://github.com/toddgraham121/cs510_cvdl_pneumonia",
    },
    {
      title: "Impact of COVID-19 on Air Quality Metrics",
      class: "Explorations in Data Science",
      description:
        "In this project, we created a data visualization tool to compare air quality metrics from the past five years to analyze the impact of COVID-19 on air quality.",
      idProject: "3",
      category: "data science",
      githubRepo: "https://github.com/kaigoos/datascience-covid-air-pollution",
    },
    {
      title: "Solving a Rubik's Cube using Reinforcement Learning",
      class: "Artificial Intelligence",
      description:
        "In this project, we used reinforcement learning with autodidactic iteration to learn to solve a Rubik's cube without any human assistance.",
      idProject: "4",
      category: "artificial intelligence",
      githubRepo: "https://github.com/toddgraham121/cs541-rubik-cube-solver",
    },
    {
      title: "Data Science for Election Verification",
      class: "Not Applicable",
      description:
        "In this project, I helped develop tools for consolidation and analysis of raw election results from the most reliable sources -- the election agencies themselves.",
      idProject: "5",
      category: "data science",
      githubRepo: "https://github.com/ElectionDataAnalysis/electiondata",
    },
  ],
};

console.log(projectInformation);
fetchData(projectInformation);
