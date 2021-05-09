//Object to contain differnt types of exercises
const exercises = {
    mainExercise: ['Bench Press',  'Shoulder Press',  'Deadlift' , 'Squats'],
    upperBody: ["Incline Bench Press", "Bicepe Curls", "Push Ups", "Lat Pull Down", "Lateral Raise", "Skull Crushers"],
    lowerBody: ["Romain Deadlifts", "Reverse Lunges", "Walking Lunges", "Leg Extension", "Hamstring Curl"],
    core: ["Butterfly Situps", "Plank", "Deadbugs", "Toe Touchs", "leg Raises"]
};

//function to pick an exercise at random from each catagory
function strengthTraining() {

    let randomMain = Math.floor(Math.random() * exercises.mainExercise.length);
    let randomUpperBody = Math.floor(Math.random() * exercises.upperBody.length);
    let randomLowerBody = Math.floor(Math.random() * exercises.lowerBody.length);
    let randomCore = Math.floor(Math.random() * exercises.core.length);

    console.log(
        exercises.mainExercise[randomMain], 
        exercises.upperBody[randomUpperBody], 
        exercises.lowerBody[randomLowerBody], 
        exercises.core[randomCore]
    );

    return randomMain, randomUpperBody, randomLowerBody, randomCore;
}

strengthTraining();