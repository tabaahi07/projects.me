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
            projectName: "Hisab",
            projectScreenshotID: "1aPWT1pJSRe5nHxGb_JCLs2UgEi9JayJm",
            projectLiveLink : "https://64dcd13a583dbb0ef3aa12e5--comfy-mochi-b3a162.netlify.app/" ,
            projectTechnologies: [
                Technologies.API ,Technologies.Reactjs ,Technologies.JS, Technologies.HTML, Technologies.CSS3
            ], 
            projectGithubRepo : "https://github.com/tabaahi07/hisab" ,
            projectDescription: "Hisab! is a responsive web app created with React to manage expenses for two users. It offers an intuitive interface for inputting expenses, real-time updates, customizable categories, and interactive result display using piechart. With a responsive and modern design, it adapts seamlessly to various screen sizes."
        } ,

        {
            projectID: 1,
            projectName: "Chat Application",
            projectScreenshotID: "1243Yelo2H4GrlV6jxRwyPZvTqoFZ5VJQ",
            projectLiveLink : "https://64dcd13a583dbb0ef3aa12e5--comfy-mochi-b3a162.netlify.app/" ,
            projectTechnologies: [
                Technologies.Reactjs ,Technologies.JS, Technologies.HTML, Technologies.CSS3
            ], 
            projectGithubRepo : "https://github.com/tabaahi07/chat-application" ,
            projectDescription: "Chat Application is a responsive web chat app built with React and powered by socket.io. It offers real-time group conversations where users can join using unique links. With a responsive design, it adapts seamlessly to various screen sizes and provides a seamless and engaging platform for vibrant discussions across devices." 
        } ,

        {
            projectID: 2,
            projectName: "IP Address Tracker",
            projectScreenshotID: "1r5HQHBQePRjnXIVtc1vM-GR78gIvGEFC",
            projectLiveLink : "https://64ad007f2ac5c0495e222566--adorable-dusk-5fa2d5.netlify.app/" ,
            projectTechnologies: [
                Technologies.API ,Technologies.Reactjs ,Technologies.JS, Technologies.HTML, Technologies.CSS3
            ], 
            projectGithubRepo : "https://github.com/tabaahi07/ip_address_tracker" ,
            projectDescription: "Introducing IP Address Tracker - a Windows-friendly web app built using React and optimized for Windows users.. This sleek tool empowers users to input an IP address and instantly retrieve vital information, such as location, timezone, and ISP details. Seamlessly integrated APIs provide real-time data, all presented on an interactive map." 
        } ,

        {
            projectID: 3,
            projectName: "Password Generator App",
            projectScreenshotID: "13UZn5hwa0h2Axz-Pw-gwKuXkOy4e6YUI",
            projectLiveLink : "https://64dcdd419f7e4615e7c3be56--leafy-frangipane-a424f0.netlify.app/" ,
            projectTechnologies: [
                Technologies.Reactjs ,Technologies.JS, Technologies.HTML, Technologies.CSS3
            ], 
            projectGithubRepo : "https://github.com/tabaahi07/password_generator_app" ,
            projectDescription: "Password generator web application meticulously designed using React, optimized for Windows users. This versatile tool empowers you to craft passwords with precision by specifying the desired character length and selecting options for uppercase letters, lowercase letters, special characters, and numbers and provides a randomly generated password along with its strength assessment."
        } ,

        {
            projectID: 4,
            projectName: "Age Calculator App",
            projectLiveLink : "https://64a84a79f65afa0bddefb494--cozy-babka-4dff7c.netlify.app/" ,
            projectScreenshotID: "1ZPDmuM4USx4jgkHw0H_tDInOAgHTQ4PR",
            projectTechnologies: [
                Technologies.Reactjs, Technologies.JS, Technologies.HTML, Technologies.CSS3
            ],
            projectGithubRepo : "https://github.com/tabaahi07/age_calculator_app" ,
            projectDescription: "Introducing Age Calculator App - a sleek and efficient web app crafted with React having delightful design, tailored for Windows users. Seamlessly input your birthday and witness the magic as it computes your age accurately. With a user-friendly interface, this app goes the extra mile by preventing errors, including future dates or wrong date , and displaying helpful error messages. "
        },

        {
            projectID: 5,
            projectName: "Random Advice Generator",
            projectScreenshotID: "11gWSyzxj9WUmXk-FISJdQ8nMWFZKsK9-",
            projectLiveLink : "https://64a848fd4686af0ade5f4b05--regal-hummingbird-ff74e5.netlify.app/" ,
            projectTechnologies: [
                Technologies.Reactjs, Technologies.API, Technologies.JS, Technologies.HTML, Technologies.CSS3
            ], 
            projectGithubRepo : "https://github.com/tabaahi07/advice_generator" ,
            projectDescription: "Introducing the Advice Generator App , an interactive web app built with React, perfect for Windows users seeking inspiration. Harnessing the power of an advice API, this tool delivers random snippets of wisdom at the click of a button."
        } ,

        {
            projectID: 6,
            projectName: "To Do List App",
            projectScreenshotID: "1RYRo6tc42nWN11C4OAhgIwmDOEZW2Sa2",
            projectLiveLink : "https://64dd095c22d674052b2a7f22--velvety-biscochitos-148961.netlify.app/" ,
            projectTechnologies: [
                Technologies.Reactjs, Technologies.JS, Technologies.HTML, Technologies.CSS3
            ], 
            projectGithubRepo : "https://github.com/tabaahi07/OCTANET_AUGUST/tree/main/task-2" ,
            projectDescription: " A dynamic todo list web app expertly crafted with React. This intuitive tool empowers users to effortlessly add tasks to their list and, with a simple interactive interface, swiftly remove them when completed. Seamlessly manage your tasks with a user-friendly design that prioritizes efficiency and ease of use."
        } 
    ] 

    
}

export default config;
export {Technologies}