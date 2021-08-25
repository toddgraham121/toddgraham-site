let projects = document.getElementById("projects");

const addProjectToDom = (project) => {
  let projectLink = document.createElement("a");
  projectLink.setAttribute("href", `${project.githubRepo}`);
  projectLink.setAttribute("class", "project-card");
  let projectCard = document.createElement("div");
  projectCard.setAttribute("id", `card`);
  projectCard.setAttribute("class", "card shadow rounded");
  projectLink.append(projectCard);
  let horizLine = document.createElement("hr");
  let projectName = document.createElement("h3");
  projectName.setAttribute("class", "title");
  projectName.innerText = `${project.title}`;
  projectCard.append(projectName);
  projectCard.append(horizLine);
  let description = document.createElement("p");
  description.setAttribute("class", "description");
  description.innerText = `${project.description}`;
  projectCard.append(description);
  let link = document.createElement("a");
  link.setAttribute("id", "repo-link");
  link.innerHTML = "More information";
  projectCard.append(link);
  projects.append(projectLink);
};

function fetchData(data) {
  try {
    data.projects.forEach((project) => {
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
      class: "Not connected to a class",
      description:
        "In this project, I helped develop tools for consolidation and analysis of raw election results from the most reliable sources -- the election agencies themselves.",
      idProject: "5",
      category: "data science",
      githubRepo: "https://github.com/ElectionDataAnalysis/electiondata",
    },
    {
      title: "Voice User Interface for Personal Site",
      class: "Voice Assistants",
      description:
        "In this project, I created a voice user interface in Dialogflow to interact with the data that is displayed on this personal site. Please click on this card to find a link to the user interface.",
      idProject: "6",
      category: "user interface",
      githubRepo:
        "https://bot.dialogflow.com/99e7db9f-eed5-4bf4-a130-c593222ef46c",
    },
  ],
};

fetchData(projectInformation);
