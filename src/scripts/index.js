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
// This formula is to insert content into <body> element

// Select the <body></body> section:
const body = document.querySelector("body");

body.insertAdjacentHTML(
  "afterbegin",
  `
  <main>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" id="svg" fill="#fff"><path d="M450-154v-309L180-619v309l270 156Zm60 0 270-156v-310L510-463.162V-154Zm-30-360 266-155-266-154-267 154 267 155ZM150-258q-14.25-8.426-22.125-22.213T120-310v-340q0-16 7.875-29.787Q135.75-693.574 150-702l300-173q14.328-8 30.164-8Q496-883 510-875l300 173q14.25 8.426 22.125 22.213T840-650v340q0 16-7.875 29.787Q824.25-266.426 810-258L510-85q-14.328 8-30.164 8Q464-77 450-85L150-258Zm330-222Z"/></svg>
    <h1>THE WEBSITE</h1>
    <p>This is a web application assistant for development!</p>
  </div>
  </main>
  <footer><span>&copy; S-EP 2023</span></footer>
  
  `
);

// ? HTML - BODY  --------END!

