export const WATER = {
  max: 24,
  min: 8
}; //Cups
export const SLEEP = {
  max: 10,
  min: 7
}; //Hours
export const CALORIES = {
   goal: 2000 
};
export const BMI = { obese: 30, overweight: 25, normal: 18.5 };
export const EXCERCISE = { goal: 30 }; //Minutes
export const SODIUM = { limit: 2300 }; //Milligrams
export const SUGAR = { limit: 6 }; //Teaspoons
export const SCREENTIME = { limit: 2 }; //Hours

//Freeze our enums
Object.freeze(WATER);
Object.freeze(SLEEP);
Object.freeze(CALORIES);
Object.freeze(BMI);
Object.freeze(EXCERCISE);
Object.freeze(SODIUM);
Object.freeze(SUGAR);
Object.freeze(SCREENTIME);
