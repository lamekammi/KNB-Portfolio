import hourProdLogo from './assets/images/14hoursSS.png';
import slotMachineGame from './assets/images/smg.png';
import tenantUplink from './assets/images/tenantuplink.png';
import ivyLeavesVideo from './assets/images/ivyLeaves.mp4';
import ivyLeavesSS from  './assets/images/ivyLeavesSS.png';
import cTubeVideo from './assets/images/cTube.mp4';
import cTubeSS from './assets/images/cTubeSS.png';

const logotext = "KNB";
const meta = {
    title: "Kammi Bobbitt",
    description: "I'm Kammi Bobbitt, a Full-Stack Software Engineer.",
};

const introdata = {
    title: "Hi, I'm Kammi Bobbitt",
    animated: {
        first: "Software Engineer",
        second: "UI/UX Designer",
        third: "Graphic Designer",
        fourth: "Artist",
        fifth: "Gamer",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Full-Stack Software Engineer with a history of strong communication, problem solving skills, teamwork, time management and a passion for learning how things work, as well as turning solid ideas into a finished product.",
    your_img_url: "https://i.imgur.com/NRLjDr2.png",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "Full-Stack Software Engineer with a history of strong communication, problem solving skills, teamwork, time management and a passion for learning how things work, as well as turning solid ideas into a finished product.",
};
const worktimeline = [{
        jobtitle: "Freelance Software Engineer",
        where: "Self Employeed",
        date: "2023-Current",
    },
    {
        jobtitle: "Freelance Artist",
        where: "Self Employeed",
        date: "2021-Current",
    },
    {
        jobtitle: "Software Engineering Teaching Assistant",
        where: "General Assembly",
        date: "2022-2023",
    },
    {
        jobtitle: "Order Fullfillment Associate",
        where: "Walmart",
        date: "2020-2022",
    },
];

const skills = [{
        name: "JavaScript",
    },
    
    {
        name: "HTML",
    },
    
    {
        name: "CSS",
    },
    
    {
        name: "Python",
    },

    {
        name: "Node.js",
    },

    {
        name: "Express.js",
    },

    {
        name: "Django",
    },

    {
        name: "React",
    },

    {
        name: "Ruby",
    },

    {
        name: "Tailwind",
    },
];

const dataportfolio = [{
        img: hourProdLogo,
        description: "Small indie gaming company",
        link: "https://14hoursproductions.com/",
    },
    {
        img: tenantUplink,
        description: "Worked collaboratively with a team of engineers to create an application allowing the interfacing of various tenant's text messages with a support team's slack project",
        link: "https://github.com/lamekammi/tenant-uplink",
    },
    {
        img: cTubeSS,
        description: "A data research site to see what Travel Videos caught users eyes",
        link: cTubeVideo,
    },
    {
        img: slotMachineGame,
        description: "JavaScript Slot Machine Game - My first project!",
        link: "https://lamekammi.github.io/slot-machine-game/",
    },
    {
        img: ivyLeavesSS,
        description: "A data research site to see how much someone would pay for a tutor based on their pronouns, image, and test scores",
        link: ivyLeavesVideo,
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "kameronnb@gmail.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
    YOUR_USER_ID: process.env.YOUR_USER_ID,
};

const socialprofils = {
    github: "https://github.com/lamekammi",
    linkedin: "https://www.linkedin.com/in/kammibobbitt/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};