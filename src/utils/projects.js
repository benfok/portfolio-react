export const projects = {
        
    theHappyPlace: {
            title: 'The Happy Place',
            liveLink: 'https://the-happy-place-app.herokuapp.com/',
            repoLink: 'https://github.com/benfok/the-happy-place-forked',
            technologies: 'HTML | CSS | JavaScript | Node.js | Express | MySQL | Handlebars.js',
            shortDescription: 'Promoting mental wellbeing through a daily journal where users post publically or privately. Intentionally free of "likes", comments and photos to ensure the focus is on personal habits and daily gratitudes.',
            bulletDescription: 
            <ul>
                <li>Contributed: Back-end Javascript, authentication, webserver config and custom RESTful API routes. Front-end Handlebars rendering and responsive CSS on all pages</li>
                <li>MVC code structure. Routes to CRUD from MySQL DB</li>
                <li>Implemented user authentication and sessions</li>
                <li>Users can set flag to view all public posts or just their own</li>
                <li>Deployed on Heroku with JAWSDB</li>
            </ul>,  
        },

    pubCrawler: {
            title: 'PubCrawler',
            liveLink: 'https://benfok.github.io/pub-crawler/',
            repoLink: 'https://github.com/benfok/pub-crawler',
            technologies: 'HTML | CSS | JavaScript | APIs',
            shortDescription: 'Returns the optimized walking route between user selected locations in any city, town or neighbourhood to help you responsibly plan your pub crawl.',
            bulletDescription: 
            <ul>
                <li>Contributed all front and back end Javascript</li>
                <li>Integrated MapQuest API</li>
                <li>Custom marker colors and map overlay</li>
                <li>Browser storage for users to save routes</li>
            </ul>,  
        },

    textEditor: {
            title: 'Text Editor (PWA)',
            liveLink: 'https://text-editor-tl.herokuapp.com/',
            repoLink: 'https://github.com/benfok/pwa-text-editor',
            technologies: 'JavaScript | Node.js | Express | Webpack',
            shortDescription: 'A simple Text Editor written and deployed as an installable Progressive Web Application',
            bulletDescription:
            <ul>
                <li>Leverages webpack as a bundler and transpiler</li>
                <li>Service worker caches assets for offline use as stores data in the browser (indexedDB with localStorage as back-up)</li>
                <li>Text Editor styled using CodeMirror</li>
            </ul>,  
        },

    codeQuiz: {
            title: 'Code Quiz',
            liveLink: 'https://benfok.github.io/code-quiz/',
            repoLink: 'https://github.com/benfok/code-quiz',
            technologies: 'HTML | CSS | JavaScript | localStorage',
            shortDescription: 'Timed, randomized quiz of Javascript questions with scores saved within the browser.',
            bulletDescription:
            <ul>
                <li>Questions randomly rendered from an array</li>
                <li>Incorrect answers deduct time from the clock</li>
                <li>Intervals used to transition and show result for each question</li>
                <li>User scores stored in the browser, sorted when recalled</li>
            </ul>,  
        },

    techBlog: {
            title: 'Tech Blog',
            liveLink: 'https://tech-blog-tl.herokuapp.com/',
            repoLink: 'https://github.com/benfok/tech-blog',
            technologies: 'HTML | CSS | JavaScript | Node.js | Express | MySQL | Handlebars.js',
            shortDescription: 'CMS-style blog site where users can publish their blog posts and comment on others.',
            bulletDescription: 
            <ul>
                <li>Custom CSS with Handlebars.js to render posts and comments</li>
                <li>User authentication and sessions</li>
                <li>Users can Create, Read, Update and Delete posts from MySQL database</li>
                <li>MVC architectural structure, deployed on Heroku with JAWSDB</li>
            </ul>,  
        },

    weatherDashboard: {
            title: 'Weather Dashboard',
            liveLink: 'https://benfok.github.io/weather-dashboard/',
            repoLink: 'https://github.com/benfok/weather-dashboard',
            technologies: 'HTML | CSS | JavaScript | APIs',
            shortDescription: 'Weather app to view current and 5 day forecast anywhere worldwide.',
            bulletDescription: 
            <ul>
                <li>Integrated OpenWeather API</li>
                <li>Dynamic and responsive custom CSS</li>
                <li>Working with timezone offsets</li>
                <li>Browser storage used to save search history</li>
            </ul>,  
        },

    
}