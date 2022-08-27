import pro1 from "../assets/buddyup.png";
import pro2 from "../assets/homepage.png";
import pro3 from "../assets/notehome.png";
import pro4 from "../assets/workdaysched.png";
import pro5 from "../assets/passwordgen.png";
import pro6 from "../assets/quizstart.png";

const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Buddy Up",
    text: "This is an interactive app that allows students to find their ideal tutor to help further their skills in their chosen subject The app also allows students to find other students that they want to study with.We allow students to find their perfect match within their are or remotely.",
    view: "https://limitless-citadel-05906.herokuapp.com/",
    source: "https://github.com/roxywasiak/buddy-up",
  },
  {
    imgsrc: pro2,
    title: "Movie Night",
    text: " A website where the user can search for any movie using the search bar. The user is presented with several movies which are called from the API and rendered onto the screen.The user clicks on a movie card which is presented and a window pops up showcasing more information about the chosen movie.",
    view: "https://talexandru1987.github.io/group-4-project-1/",
    source: "https://github.com/talexandru1987/movie-night",
  },
  {
    imgsrc: pro3,
    title: "Note Taker App",
    text: "This application was built using Node.js and Express.js for the back end, and can be used to write and save notes. The data from the notes is currently saved and read from a JSON file.note",
    view: "https://protected-brushlands-48747.herokuapp.com/",
    source: "https://github.com/roxywasiak/my-note-taker/tree/dev",
  },
  {
    imgsrc: pro4,
    title: "Workday Scheduler",
    text: "An application to view your daily tasks , where you can add new tasks, delete old tasks and see upcoming tasks.The timeBlocks are color coded where red is present, green is the future and grey is the past. ",
    view: "https://roxywasiak.github.io/work-day-scheduler/",
    source: "https://github.com/roxywasiak/work-day-scheduler/tree/dev",
  },
  {
    imgsrc: pro5,
    title: "Password Generator",
    text: "A random password generator that creates a strong password. When the generate password button is selected it will generate a new random password. The user must decide what criteria they want to build their password.",
    view: "https://roxywasiak.github.io/password-generator/",
    source: "https://github.com/roxywasiak/password-generator/tree/dev",
  },
  {
    imgsrc: pro6,
    title: "Quiz App",
    text: "A code quiz where the user clicks on the start quiz button and is presented with a set of multiple choice questions. The user is timed and if they click the wrong answer the timer is reduced by 5 seconds. Once they click the answer they go onto the next questions and then are given their scores.",
    view: "https://roxywasiak.github.io/code-quiz/",
    source: "https://github.com/roxywasiak/code-quiz/tree/dev",
  },
];

export default ProjectCardData;
