import {
    mobile,
    backend,
    frontend,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    mongodb,
    git,
    flask,
    mysql,
    usma,
    army,
    dojo,
    digigolf,
    zoomclone,
    portfolio,
    threejs,
    c_plus_plus,
    bootstrap,
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: frontend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Flask",
        icon: flask,
    },
    {
        name: "mySQL",
        icon: mysql,
    },
    {
        name: "C++",
        icon: c_plus_plus,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    }
];

const experiences = [
    {
        title: "United States Army",
        company_name: "Team Leader",
        icon: army,
        iconBg: "#383E56",
        date: "December 2010 - July 2012",
        points: [
            "Member of Infantry Company in 1st Cavalry Division",
            "Responsible for training, welfare, and discipline of 4 Infantry Soldiers",
            "Deployed to Baqubah, Iraq in support of Operation Iraqi Freedom"
        ],
    },
    {
        title: "United States Military Academy",
        company_name: "West Point",
        icon: usma,
        iconBg: "#383E56",
        date: "July 2012 - May 2016",
        points: [
            "Member of the Corps of Cadets.",
            "Majored in Civil Engineering & Strategic Defense Studies.",
            "Graduated as 1 of 7 prior-enlisted cadets in class of over 1,000 individuals.",
        ],
    },
    {
        title: "United States Army",
        company_name: "Commissioned Officer (Captain)",
        icon: army,
        iconBg: "#E6DEDD",
        date: "May 2016 - Feb 2022",
        points: [
            "Held positions of: Rifle Platoon Leader, Infantry Company Executive Officer, Infantry Company Commander, and Assistant Operations Officer",
            "Command and Leadership: Direct manager of a Basic Combat Training Company of 300 personnel, while supervising higher level support staff as Headquarters Commander.",
            "Supply Chain Management: Managed a $7M inventory, ensured zero losses of US Goverment property. Managed confidential & secret paperwork and systems with zero losses of data.",
            "Tactical Planning and Mission Execution: Coordinated strategic mission plans and supervised tactical execution of combat operations for platoon and company sized elements",
            "Subordinate Development: Fostered subordinate development for future leadership roles and ensured efficiency in training for junior soldiers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Coding Dojo",
        icon: dojo,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using Javascript, Python, Java, and associated frameworks.",
            "Collaborating with other developers to create high-quality functional products.",
            "Implementing responsive design and ensuring cross-browser and cross-device compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "DigiGolf",
        description:
            "DigiGolf is a web application built to help golf enthusiasts track, score, and update their rounds from different courses in their area. The website uses Python and Flask to provide users with a seamless experience, while also utilizing APIs to track local weather and golf courses in the user's area.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: digigolf,
        source_code_link: "https://github.com/PatMcCallion/digi-Golf",
    },
    {
        name: "Zuum-Clone",
        description:
            "A single page web application, constructed with ReactJs, MaterialUI, and Socket.io, emulates an in-browser video chat application. Users can easily establish randomized IDs and initiate calls to other users on the same webpage by utilizing the provided codes.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: zoomclone,
        source_code_link: "https://github.com/PatMcCallion/zoomClone",
    },
    {
        name: "This portfolio!",
        description:
            "I'm excited to share with you the source code for the portfolio you are currently viewing. This project is my most ambitious yet, utilizing a combination of ReactJS, ThreeJS, Tailwind CSS, and Vite.js to create an impressive and functional web application. The source code serves as a showcase of my skills as a developer, highlighting my ability to learn new programming languages and frameworks on my own. I take great pride in the seamless integration of these technologies to create an engaging and visually stunning portfolio website. Please feel free to explore the codebase and provide any feedback or suggestions.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };