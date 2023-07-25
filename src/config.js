import bootstrapLogo from "./assets/bootstrap.png"
import cssLogo from "./assets/css-3.png"
import htmlLogo from "./assets/html-5.png"
import apiLogo from "./assets/icons8-api-96.png"
import tailwindLogo from "./assets/icons8-tailwind-css-384.png"
import jsLogo from "./assets/JS.gif"
import reactLogo from "./assets/react.gif"

const Technologies = {
    JS: {
        logo : jsLogo ,
        animate : false 
    } ,
    Reactjs: {
        logo : reactLogo ,
        animate : false 
    } ,
    HTML: {
        logo : htmlLogo ,
        animate : true 
    },
    CSS3: {
        logo : cssLogo ,
        animate : true 
    },
    API: {
        logo :apiLogo ,
        animate : true 
    },
    BOOTSTRAP: {
        logo : bootstrapLogo ,
        animate : true 
    },
    TAILWINDCSS: {
        logo : tailwindLogo ,
        animate : true 
    }
} 

const config = {
    name: "Akrati Pandey",
    resumeLink: "https://drive.google.com/file/d/1Pb5RryGPh7cGjaETfxWWm6DdESL5jEWL/view?usp=sharing",
    socialLinks: {
        github: "https://github.com/tabaahi07",
        linkedin: "https://www.linkedin.com/in/akrati-pandey-a30b49273/",
        instagram: "https://www.instagram.com/tabaahii_07/"
    },

    projects: [
        {
            projectID: 0,
            projectName: "Random Advice Generator",
            projectScreenshotID: "11gWSyzxj9WUmXk-FISJdQ8nMWFZKsK9-",
            projectTechnologies: [
                Technologies.Reactjs, Technologies.API, Technologies.JS, Technologies.HTML, Technologies.CSS3
            ], 
            projectGithubRepo : "https://github.com/tabaahi07/advice_generator" ,
            projectDescription: "I tell you about project! Project is big, big website made with website coding language, yes, yes! It has many colors, like rainbow, and pictures of funny animals. Maybe it's about animals or maybe about food, I not sure. But I think it has big buttons that make funny noises when you click! Boop boop! And there are many words, like story, story everywhere!"
        } ,

        {
            projectID: 1,
            projectName: "Password Generator App",
            projectLiveLink : "https://64a84b2548013d0ceb6d479a--fastidious-capybara-1d243f.netlify.app/" ,
            projectScreenshotID: "13UZn5hwa0h2Axz-Pw-gwKuXkOy4e6YUI",
            projectTechnologies: [
                Technologies.Reactjs, Technologies.JS, Technologies.HTML, Technologies.CSS3
            ],
            projectGithubRepo : "https://github.com/tabaahi07/advice_generator" ,
            projectDescription: "I tell you about project! Project is big, big website made with website coding language, yes, yes! It has many colors, like rainbow, and pictures of funny animals. Maybe it's about animals or maybe about food, I not sure. But I think it has big buttons that make funny noises when you click! Boop boop! And there are many words, like story, story everywhere!"
        } ,

        {
            projectID: 2,
            projectName: "Expense Tracker App",
            projectLiveLink : "https://64ba6ecc3bdec80b34b2a5d6--warm-beignet-734e73.netlify.app/" ,
            projectScreenshotID: "1YyuQio7gcQuL7lkrJ1uaAIICWfEgZIoW",
            projectTechnologies: [
                Technologies.Reactjs, Technologies.JS, Technologies.HTML, Technologies.CSS3
            ],
            projectGithubRepo : "https://github.com/tabaahi07/advice_generator" ,
            projectDescription: "I tell you about project! Project is big, big website made with website coding language, yes, yes! It has many colors, like rainbow, and pictures of funny animals. Maybe it's about animals or maybe about food, I not sure. But I think it has big buttons that make funny noises when you click! Boop boop! And there are many words, like story, story everywhere!"
        } ,

        {
            projectID: 3,
            projectName: "IP Address Tracker",
            projectLiveLink : "https://64ad007f2ac5c0495e222566--adorable-dusk-5fa2d5.netlify.app/" ,
            projectScreenshotID: "1r5HQHBQePRjnXIVtc1vM-GR78gIvGEFC",
            projectTechnologies: [
                Technologies.Reactjs, Technologies.JS, Technologies.HTML, Technologies.CSS3 , Technologies.API
            ],
            projectGithubRepo : "https://github.com/tabaahi07/advice_generator" ,
            projectDescription: "I tell you about project! Project is big, big website made with website coding language, yes, yes! It has many colors, like rainbow, and pictures of funny animals. Maybe it's about animals or maybe about food, I not sure. But I think it has big buttons that make funny noises when you click! Boop boop! And there are many words, like story, story everywhere!"
        } ,

        {
            projectID: 4,
            projectName: "Age Calculator App",
            projectLiveLink : "https://64a84a79f65afa0bddefb494--cozy-babka-4dff7c.netlify.app/" ,
            projectScreenshotID: "1ZPDmuM4USx4jgkHw0H_tDInOAgHTQ4PR",
            projectTechnologies: [
                Technologies.Reactjs, Technologies.JS, Technologies.HTML, Technologies.CSS3
            ],
            projectGithubRepo : "https://github.com/tabaahi07/advice_generator" ,
            projectDescription: "I tell you about project! Project is big, big website made with website coding language, yes, yes! It has many colors, like rainbow, and pictures of funny animals. Maybe it's about animals or maybe about food, I not sure. But I think it has big buttons that make funny noises when you click! Boop boop! And there are many words, like story, story everywhere!"
        },




    
    ] 

    
}

export default config;
export {Technologies}