import { CSVViewer } from "./csv-viewer.js";

const cv = new CSVViewer();
cv.setAttribute("src", "./test.csv");
document.body.appendChild(cv);
