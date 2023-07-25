import bootstrapLogo from "./assets/bootstrap.png"
import cssLogo from "./assets/css-3.png"
import htmlLogo from "./assets/html-5.png"
import apiLogo from "./assets/icons8-api-96.png"
import tailwindLogo from "./assets/icons8-tailwind-css-384.png"
import jsLogo from "./assets/JS.gif"
import reactLogo from "./assets/react.gif"

const Technologies = {
    Reactjs: reactLogo,
    HTML: htmlLogo,
    CSS3: cssLogo,
    JS: jsLogo,
    API: apiLogo,
    BOOTSTRAP: bootstrapLogo,
    TAILWINDCSS: tailwindLogo
}

const config = {
    name: "Akrati Pandey",
    resumeLink: "",
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
        }
    ]

     


}

export default config;
export {Technologies}