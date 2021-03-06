export const WATER = {
  max: 24,
  min: 8
}; //Cups
export const SLEEP = {
  max: 9,
  min: 7
}; //Hours

export const BMI = { obese: 30, overweight: 25, normal: 18.5 };
export const SODIUM = { limit: 2300 }; //Milligrams
export const SUGAR = { femaleLimit: 6, maleLimit: 9 }; //Teaspoons
export const SCREENTIME = { limit: 2 }; //Hours

//Freeze our enums
Object.freeze(WATER);
Object.freeze(SLEEP);
Object.freeze(BMI);
Object.freeze(SODIUM);
Object.freeze(SUGAR);
Object.freeze(SCREENTIME);
