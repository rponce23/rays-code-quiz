var hScores = document.querySelector(".showScores");
let retString = localStorage.getItem("dataKey");
let retArray = JSON.parse(retString);
retArray.push(retArray);
console.log(retArray);

hScores.innerHTML = (retArray[0]["initials"] + " " + retArray[0]["score"]);
