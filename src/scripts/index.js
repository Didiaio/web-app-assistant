// Console:
console.log("Index JS loaded successfully");

// ? IMPORTS
// This is a collection of files to import

// Stylesheet
import "../styles/style.css";

// Assets
import "../assets/svg/codebox.svg";


// % METHOD SOLUTIONS:

// * Insert Adjacent HTML = insertAdjacentHTML()n


// ? HTML - HEAD
// This formular is to insert content into <head> element

// Select the <head></head> section:
const head = document.querySelector("head");

// Insert content to <head></head>:
head.insertAdjacentHTML(
  "beforeend",
  `
    <meta name="description" content="This is a web application tool." />
    
    <!-- Favicon -->
    <link rel="icon" type="images/x-icon" href="./img/codebox.svg" />
    
    <!-- Fonts -->
    <script src="https://kit.fontawesome.com/95e9008956.js" crossorigin="anonymous"></script>
    
    <!-- Internal Stylesheet -->
    <style type="text/css">
        body {
        background-color: #22223f;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: verdana;
        font-weight: bold;

        margin: 0;
        padding: 0;
        
        height: 100vh;
        width: 100%;
        }  
    </style>
    
    <!-- Internal Script -->
    <script type="text/javascript">
        console.log("Script Loaded Successfully!");
    </script>

    <!-- External Script -->
    <script src="./js/main.js"></script>
    
`
);

// TODO: Insert accordingly.
// <!-- External Stylesheet -->
// <link rel="stylesheet" href="../src/styles/style.css"></link>

// ? HTML - HEAD  ----------END!


// ? HTML - BODY
// This formular is to insert content into <body> element

// Select the <body></body> section:
const body = document.querySelector("body");

body.insertAdjacentHTML(
  "afterbegin",
  `
  <main>
  <div>
    <img src="./img/codebox.svg">
    <h1>THE WEBSITE</h1>
    <p>This is a web application assistant for development!</p>
  </div>
  </main>
  <footer><span>&copy; S-EP 2023</span></footer>
  
  `
);

// ? HTML - BODY  --------END!

