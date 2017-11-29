var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

let aGrade = [];
let bGrade = [];
let cGrade = [];
let dGrade = [];
let fGrade = [];

for (i = 0; i < scores.length; i++) {
    if ((scores[i]) >= 91) {
        aGrade.push(scores[i]);
    } else if ((scores[i]) <= 90 && (scores[i]) >= 81) {
        bGrade.push(scores[i]);
    } else if ((scores[i]) <= 80 && (scores[i]) >= 71) {
        cGrade.push(scores[i]);
    } else if ((scores[i]) <= 70 && (scores[i]) >= 61) {
        dGrade.push(scores[i]);
    } else {
        fGrade.push(scores[i]);
    }   
}
console.log(aGrade.length + " students got an A");
console.log(bGrade.length + " students got a B");
console.log(cGrade.length + " students got a C");
console.log(dGrade.length + " students got a D");
console.log(fGrade.length + " students got an F");

let gradeMax = Math.max.apply(null, scores);
console.log("The highest score in the class was a " + gradeMax);

let gradeMin = Math.min.apply(null, scores);
console.log("The lowest score in the class was a " + gradeMin);

