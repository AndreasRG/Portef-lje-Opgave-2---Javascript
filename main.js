//Student grade analysis [75, 62, 92, 77, 99, 45, 82, 70]
//1)
const studentGrades = [75, 62, 92, 77, 99, 45, 82, 70];

//2)
console.log(`There is ${studentGrades.length} submitted grades in the array!`);

//3)
const scoreToGrade = (score) => {
if (score < 60) {
    console.log("F");
}
else if (score >= 60 && score < 70) {
    console.log("D");
}
else if (score >= 70 && score < 80) {
    console.log("C");
}
else if (score >= 80 && score < 90) {
    console.log("B");
}
else {
    console.log("A");
}
}

scoreToGrade(55)
scoreToGrade(65)
scoreToGrade(75)
scoreToGrade(85)
scoreToGrade(95)

//4)
const studentGradesAverage = (array) => {
    let sumOfArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfArray += array[i];}
    const averageScoreResult = sumOfArray / array.length;
    if (averageScoreResult >= 90) {
        console.log(`Excellent! Average score: ${averageScoreResult}`);
    }
    else if (averageScoreResult >= 80 && averageScoreResult < 90) {
        console.log(`Good! Average score: ${averageScoreResult}`);
    }
    else if (averageScoreResult >= 70 && averageScoreResult < 79.99) {
        console.log(`Satisfactory! Average score: ${averageScoreResult}`);
    }
    else {
        console.log(`Needs Improvement! Average score: ${averageScoreResult}`);
    }
}

studentGradesAverage(studentGrades);



//Treasure Hunter
const island = ['-', '-', '-', 'T', '-'];

//1)
console.log(`There are ${island.length} moves starting from 0 to 4.`);

//2)
const treasureDetector = (moves) => {
    if (island[moves] == 'T') {
        console.log(`Treasure has been found!`)
    }
    else {
        console.log(`No treasure here:( Try again!`)
    }
}
treasureDetector(0)
treasureDetector(1)
treasureDetector(2)
treasureDetector(3)
treasureDetector(4)

//3)
const treasureCount = (array) => {
    let treasureAmount = 0;
    for (let i = 0; i < array.length; i++) {
        if ((island[i] == 'T')){
            treasureAmount = treasureAmount + 1;
        }
    }
    console.log(`There is ${treasureAmount} hidden treasures on the island!`)
}

treasureCount(island);



//Startup name generator
const getStartupName = () => {
    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];
    let value1 = Math.floor(Math.random() * 10);
    let value2 = Math.floor(Math.random() * 10);
    console.log(`Your startup name could be: ${firstWords[value1]} ${secondWords[value2]}`)
}

getStartupName()