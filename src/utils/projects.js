export const projects = {

    vailMock: {
        title: 'Vail Resorts Clone',
        live: true,
        liveLink: 'https://benfok.github.io/product-store',
        repoLink: 'https://github.com/benfok/product-store',
        technologies: 'React | HTML | CSS | JavaScript',
        shortDescription: `Mock page to mimic Vail Resort's ecommerce template for selling ski and snowboard lessons and to showcase potential enhancements.`,
        bulletDescription: 
        <ul>
            <li>Coded from scratch to mimic Vail's design template and components</li>
            <li>Simulates an ecommerce store showing product availability within a 7 day window</li>
            <li>Offers users the option to filter and sort products in numoerous ways, as well as add products to a comparison view</li>
            <li>Uses modals for detailed info, add-ons and add-to-cart functionality for a single page experience</li>
        </ul>,  
    },
        
    ethel: {
        title: 'Ethel',
        live: true,
        liveLink: 'https://ethel.onrender.com/',
        repoLink: 'https://github.com/benfok/ethel-static',
        technologies: 'React | HTML | CSS | JavaScript | Node.js | Express | MongoDB | Apollo/GraphQL',
        shortDescription: 'List making and note taking app that allows lists to be shared with other users, updated and collaborated on in real-time',
        bulletDescription: 
        <ul>
            <li>Contributed: All code except some CSS and DB models</li>
            <li>All CRUD operations leverage GraphQL</li>
            <li>Uses JWT for user authentication</li>
            <li>Users can share lists by searching for users or through their shared history. Shared lists can be refreshed to see real-time data</li>
            <li>Lists can be actioned on independently and simultaneously</li>
        </ul>,  
    },

    theHappyPlace: {
            title: 'The Happy Place',
            live: true,
            liveLink: 'https://happy-place.cyclic.app/1671580800',
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
            live: true,
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
            live: false,
            liveLink: 'https://text-editor-tl.herokuapp.com/',
            repoLink: 'https://github.com/benfok/pwa-text-editor',
            technologies: 'JavaScript | Node.js | Express | Webpack',
            shortDescription: 'A simple Text Editor deployed as an installable Progressive Web Application',
            bulletDescription:
            <ul>
                <li>Leverages webpack as a bundler and transpiler</li>
                <li>Service worker caches assets for offline use as stores data in the browser (indexedDB with localStorage as back-up)</li>
                <li>Text Editor styled using CodeMirror</li>
            </ul>,  
        },

    codeQuiz: {
            title: 'Code Quiz',
            live: true,
            liveLink: 'https://benfok.github.io/code-quiz/',
            repoLink: 'https://github.com/benfok/code-quiz',
            technologies: 'HTML | CSS | JavaScript',
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
            live: true,
            liveLink: 'https://tech-blog.cyclic.app',
            repoLink: 'https://github.com/benfok/tech-blog',
            technologies: 'HTML | CSS | JavaScript | Node.js | Express | MySQL',
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
            live: true,
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