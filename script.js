const header             = document.createElement(`h1`);
header.innerHTML         = `DIFFERENCE BETWEEN DOCUMENT OBJECT AND WINDOW OBJECT`;
const  para              = document.createElement(`p`);
para.innerHTML           = `In this blog, we will see the concepts of Document object and Window object, their properties and the differences.`;
const subHeader1         = document.createElement(`h4`);
subHeader1.innerHTML     = `Document Object:`;
const para1              = document.createElement(`p`);
para1.innerHTML          = ` The document object represent a web page that is loaded in the browser. The document actually gets loaded inside the window object. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page.`;
const miniSubHeader1     = document.createElement(`h6`);
miniSubHeader1.innerHTML = `Syntax of document object will be:`;
const miniPara1          = document.createElement(`p`);
miniPara1.innerHTML      = ` document.property_name;`;
const para2              = document.createElement(`p`);
para2.innerHTML          = `While knowing about properties, we have title, head, body, cookie, URL, etc…, as a properties of document objects.`;
const subHeader2         = document.createElement(`h4`);
subHeader2.innerHTML     = `Window Object:`;
const para3              = document.createElement(`p`);
para3.innerHTML          = `The window is the first thing that gets loaded into the browser. It represents a browser window that displays the contents of the webpage. Whenever a window appears on the screen to display the content of the document, the window object is created.`;
const miniSubHeader2     = document.createElement(`h6`);
miniSubHeader2.innerHTML = `Syntax of window object will be:`;
const miniPara2          = document.createElement(`p`);
miniPara2.innerHTML      = `window.property_name;`;
const para4              = document.createElement(`p`);
para4.innerHTML          = `In window object, we have document, closed, Length, innerHeight, innerWidth as a properties of window objects.`;
const subHeader3         = document.createElement(`h4`);
subHeader3.innerHTML     = `Their Differences :`;




miniSubHeader1.append(miniPara1);
miniSubHeader1.append(para2);
miniSubHeader2.append(miniPara2);
miniSubHeader2.append(para4);
subHeader1.append(para1);
subHeader1.append(miniSubHeader1);
subHeader2.append(para3);
subHeader2.append(miniSubHeader2);
header.append(para);
header.append(subHeader1);
header.append(subHeader2);
header.append(subHeader3);
document.body.append(header);