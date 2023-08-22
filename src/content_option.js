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
        jobtitle: "Software Engineering Teaching Assistant",
        where: "General Assembly",
        date: "2022-2023",
    },
    {
        jobtitle: "Freelance Artist",
        where: "Self Employeed",
        date: "2021-Current",
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
];

const dataportfolio = [{
        img: "https://i.imgur.com/EX1vGHQ.png",
        description: "JavaScript Slot Machine Game.",
        link: "https://lamekammi.github.io/slot-machine-game/",
    },
    {
        img: "https://i.imgur.com/g7voz3e.png",
        description: "Express and EJS site to track Manga/Books.",
        link: "https://github.com/lamekammi/manga-tracker",
    }//,
    //{
      //  img: "https://picsum.photos/400/?grayscale",
     //   description: "The wisdom of life consists in the elimination of non-essentials.",
     //   link: "#",
   // },
    //{
       // img: "https://picsum.photos/400/600/?grayscale",
       // description: "The wisdom of life consists in the elimination of non-essentials.",
       // link: "#",
   // },
    //{
      //  img: "https://picsum.photos/400/300/?grayscale",
      //  description: "The wisdom of life consists in the elimination of non-essentials.",
      //  link: "#",
   // },
   // {
       // img: "https://picsum.photos/400/700/?grayscale",
     //   description: "The wisdom of life consists in the elimination of non-essentials.",
     //   link: "#",
   // },

   // {
      //  img: "https://picsum.photos/400/600/?grayscale",
      //  description: "The wisdom of life consists in the elimination of non-essentials.",
      //  link: "#",
    //},
    //{
     //   img: "https://picsum.photos/400/300/?grayscale",
     //   description: "The wisdom of life consists in the elimination of non-essentials.",
      //  link: "#",
   //},
   // {
      //  img: "https://picsum.photos/400/?grayscale",
      //  description: "The wisdom of life consists in the elimination of non-essentials.",
      //  link: "#",
   // },
   // {
      //  img: "https://picsum.photos/400/550/?grayscale",
      //  description: "The wisdom of life consists in the elimination of non-essentials.",
      //  link: "#",
   // },
   // {
      //  img: "https://picsum.photos/400/?grayscale",
      //  description: "The wisdom of life consists in the elimination of non-essentials.",
       // link: "#",
    //},
    //{
      //  img: "https://picsum.photos/400/700/?grayscale",
      //  description: "The wisdom of life consists in the elimination of non-essentials.",
      //  link: "#",
    //},
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