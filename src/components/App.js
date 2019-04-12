import React, { Component } from "react";
import "../styles/App.css";
import { WATER, SLEEP, BMI, SODIUM, SUGAR, SCREENTIME } from "../data/values";
import Legend from "./legend";

class App extends Component {
  constructor(props) {
    super(props);

    this.totalGood = 0;
    this.gender = "female";
    this.goal = "lose";

    //Variables to be displayed
    this.cupsOfWater = "";
    this.hoursOfSleep = "";
    this.dailyCalories = "";
    this.bmi = "";
    this.bmiMessage = "";
    this.minutesOfExcercise = "";
    this.teaspoonsOfSugar = "";
    this.sodiumMilligrams = "";
    this.screenTime = "";
    this.goalsMet = "";
    this.overallHeathMessage = "";

    //Variables for user input
    this.state = {
      age: "",
      cupsOfWater: "",
      hoursOfSleep: "",
      dailyCalories: "",
      height: "",
      weight: "",
      minutesOfExcercise: "",
      sodiumMilligrams: "",
      teaspoonsOfSugar: "",
      screenTime: ""
    };
    this.updateAge = this.updateAge.bind(this);
    this.updateWater = this.updateWater.bind(this);
    this.updateSleep = this.updateSleep.bind(this);
    this.updateCalories = this.updateCalories.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.updateWeight = this.updateWeight.bind(this);
    this.updateExcercise = this.updateExcercise.bind(this);
    this.updateMilligrams = this.updateMilligrams.bind(this);
    this.updateSugar = this.updateSugar.bind(this);
    this.updateScreenTime = this.updateScreenTime.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  setGender(event) {
    this.gender = event.target.value;
  }
  setGoal(event) {
    this.goal = event.target.value;
  }
  updateWater(event) {
    this.setState({ cupsOfWater: event.target.value });
  }
  updateSleep(event) {
    this.setState({ hoursOfSleep: event.target.value });
  }
  updateCalories(event) {
    this.setState({ dailyCalories: event.target.value });
  }
  updateHeight(event) {
    this.setState({ height: event.target.value });
  }
  updateWeight(event) {
    this.setState({ weight: event.target.value });
  }
  updateExcercise(event) {
    this.setState({ minutesOfExcercise: event.target.value });
  }
  updateMilligrams(event) {
    this.setState({ sodiumMilligrams: event.target.value });
  }
  updateSugar(event) {
    this.setState({ teaspoonsOfSugar: event.target.value });
  }
  updateScreenTime(event) {
    this.setState({ screenTime: event.target.value });
  }
  updateAge(event) {
    this.setState({ age: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.totalGood = 0;
    this.goalsMet = "Goals Met";

    this.forceUpdate();

    // Check if we had enough water
    if (
      this.state.cupsOfWater >= WATER.min &&
      this.state.cupsOfWater < WATER.max
    ) {
      //We had at least 8 cups of water
      this.cupsOfWater =
        "GOAL MET: " + this.state.cupsOfWater + " Cups is healthy";
      this.totalGood++;
    } else if (this.state.cupsOfWater >= WATER.max) {
      this.cupsOfWater =
        "GOAL NOT MET: " + this.state.cupsOfWater + " Cups is too much";
    } else {
      //We had less than 8 cups of water
      this.cupsOfWater =
        "GOAL NOT MET: " + this.state.cupsOfWater + " Cup(s) is not enough";
    }

    // Check if we had enough sleep
    if (
      this.state.hoursOfSleep >= SLEEP.min &&
      this.state.hoursOfSleep <= SLEEP.max
    ) {
      this.hoursOfSleep =
        "GOAL MET: " + this.state.hoursOfSleep + " Hrs. is healthy";
      this.totalGood++;
    } else if (this.state.hoursOfSleep > SLEEP.max) {
      this.hoursOfSleep =
        "GOAL NOT MET: " + this.state.hoursOfSleep + " Hrs. is too much";
    } else {
      this.hoursOfSleep =
        "GOAL NOT MET: " + this.state.hoursOfSleep + " Hour(s) is not enough";
    }

    // Check amount of calories
    // We first need bmr
    let bmr = 0;
    if (this.gender === "female") {
      //determine BMR for a female
      bmr =
        4.536 * this.state.weight +
        15.88 * this.state.height -
        5 * this.state.age -
        161;

      console.log("F BMR -> " + bmr);
    } else {
      //Determine BMR for a male
      bmr =
        4.536 * this.state.weight +
        15.88 * this.state.height -
        5 * this.state.age +
        5;

      console.log("M BMR -> " + bmr);
    }

    //Determine Caloric Surplus/Deficit
    let caloricSurplusOrDeficit = this.state.dailyCalories - bmr;

    if (this.goal === "lose") {
      console.log("Goal Lose Weight");
      if (caloricSurplusOrDeficit === 0) {
        // On Track to maintain weight
        this.dailyCalories =
          "GOAL NOT MET: you are on track to maintain weight";
      }
      if (caloricSurplusOrDeficit > 0) {
        //gain
        this.dailyCalories = "GOAL NOT MET: you are on track to gain weight";
      }
      if (caloricSurplusOrDeficit < 0) {
        //Lose weight
        this.dailyCalories = "GOAL MET: you are on track to lose weight";
        this.totalGood++;
      }
    }
    if (this.goal === "maintain") {
      console.log("Goal Maintain Weight");
      if (caloricSurplusOrDeficit === 0) {
        // On Track to maintain weight
        this.dailyCalories = "GOAL MET: you are on track to maintain weight";
        this.totalGood++;
      }
      if (caloricSurplusOrDeficit > 0) {
        //gain
        this.dailyCalories = "GOAL NOT MET: you are on track to gain weight";
      }
      if (caloricSurplusOrDeficit < 0) {
        //Lose weight
        this.dailyCalories = "GOAL NOT MET: you are on track to lose weight";
      }
    }
    if (this.goal === "gain") {
      console.log("Goal: Gain Weight");
      if (caloricSurplusOrDeficit === 0) {
        // On Track to maintain weight
        this.dailyCalories = "GOAL MET: you are on track to maintain weight";
      }
      if (caloricSurplusOrDeficit > 0) {
        //gain
        this.dailyCalories = "GOAL MET: you are on track to gain weight";
        this.totalGood++;
      }
      if (caloricSurplusOrDeficit < 0) {
        //Lose weight
        this.dailyCalories = "GOAL NOT MET: you are on track to lose weight";
      }
    }
    this.dailyCalories =
      this.dailyCalories +
      " (" +
      this.state.dailyCalories +
      "cal consumed)-( " +
      bmr +
      "cal bmr ) = " +
      caloricSurplusOrDeficit.toFixed(2) +
      "cal";

    // Check BMI
    // [weight (lb) / height (in) / height (in)] x 703
    let bmi = (this.state.weight / Math.pow(this.state.height, 2)) * 703;
    this.bmi = bmi.toFixed(2);

    // eslint-disable-next-line default-case
    switch (true) {
      case this.bmi >= BMI.obese:
        this.bmiMessage =
          "GOAL NOT MET: A BMI of " + this.bmi + " is considered obese";
        break;
      case this.bmi < BMI.obese && this.bmi >= BMI.overweight:
        this.bmiMessage =
          "GOAL NOT MET: " +
          "A BMI of " +
          this.bmi +
          " is considered overweight";
        break;
      case this.bmi < BMI.overweight && this.bmi >= BMI.normal:
        this.bmiMessage =
          "GOAL MET: A BMI of " + this.bmi + " is considered healthy";
        this.totalGood++;
        break;
      case this.bmi < BMI.normal:
        this.bmiMessage =
          "GOAL NOT MET: " +
          "A BMI of " +
          this.bmi +
          " is considered underweight";
        break;
    }

    // Check amount of sodium
    if (this.state.sodiumMilligrams >= SODIUM.limit) {
      this.sodiumMilligrams =
        "GOAL NOT MET: " +
        this.state.sodiumMilligrams +
        "mg of sodium is too much.";
    } else {
      this.sodiumMilligrams =
        "GOAL MET: " + this.state.sodiumMilligrams + "mg of sodium is healthy.";
      this.totalGood++;
    }
    // Check sugar
    if (this.gender === "female") {
      if (this.state.teaspoonsOfSugar >= SUGAR.femaleLimit) {
        this.teaspoonsOfSugar =
          "GOAL NOT MET: " + this.state.teaspoonsOfSugar + " tsp is too much.";
      } else {
        this.teaspoonsOfSugar =
          "GOAL MET: " + this.state.teaspoonsOfSugar + " tsp is healthy";
        this.totalGood++;
      }
    } else {
      if (this.state.teaspoonsOfSugar >= SUGAR.maleLimit) {
        this.teaspoonsOfSugar =
          "GOAL NOT MET: " + this.state.teaspoonsOfSugar + " tsp is too much.";
      } else {
        this.teaspoonsOfSugar =
          "GOAL MET: " + this.state.teaspoonsOfSugar + " tsp is healthy";
        this.totalGood++;
      }
    }

    // Check screen time
    if (this.state.screenTime > SCREENTIME.limit) {
      this.screenTime =
        "GOAL NOT MET: " + this.state.screenTime + " hrs. is too much";
    } else {
      this.screenTime =
        "GOAL MET: " + this.state.screenTime + " hrs. is healthy";
      this.totalGood++;
    }

    if (this.totalGood >= 6) {
      this.overallHeathMessage = "You're in good health, Good job!";
    } else if (this.totalGood < 6 && this.totalGood > 3) {
      this.overallHeathMessage =
        "You're in ok health, Look below for information on how to do better";
    } else {
      this.overallHeathMessage =
        "Your health may not be very good, look for information below on how to do better and consider changing your habits!";
    }
  }

  handleClear() {
    console.log("Clearing");
    this.cupsOfWater = "";
    this.hoursOfSleep = "";
    this.dailyCalories = "";
    this.bmi = "";
    this.bmiMessage = "";
    this.minutesOfExcercise = "";
    this.teaspoonsOfSugar = "";
    this.sodiumMilligrams = "";
    this.screenTime = "";
    this.goalsMet = "";
    this.overallHeathMessage = "";
    this.totalGood = 0;

    //Variables for user input
    this.setState({
      cupsOfWater: "",
      hoursOfSleep: "",
      dailyCalories: "",
      height: "",
      weight: "",
      minutesOfExcercise: "",
      sodiumMilligrams: "",
      teaspoonsOfSugar: "",
      screenTime: "",
      age: ""
    });
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>Health Snapshot</h1>
            <hr className="sep" />
            <h5>
              Enter Information Below to help determine what daily habits may
              say about your health and goals. Your total number of healthy
              items will be displayed out of 7
            </h5>
            <h5>
              To Find out How your health snapshot is calculated including which
              fomulas are used and what healthy ranges are read the information
              located below the form
            </h5>
            <br />

            <h3>{this.totalGood + " / 7 " + this.goalsMet}</h3>
            <h4>{this.overallHeathMessage}</h4>
            <hr className="sep" />
            <div className="row">
              <div className="group">
                <div className="row" onChange={this.setGender.bind(this)}>
                  <input
                    className="rb"
                    defaultChecked
                    type="radio"
                    value="female"
                    name="gender"
                  />
                  <span className="inputText">Female</span>
                  <input
                    className="rb"
                    type="radio"
                    value="male"
                    name="gender"
                  />
                  <span className="inputText">Male</span>
                  <br />
                  <label>Gender</label>
                </div>
              </div>
              <div className="group output ag e">
                <div className="group">
                  <input
                    required="required"
                    className="half"
                    type="number"
                    value={this.state.age}
                    onChange={this.updateAge}
                    min="0"
                  />
                  <span className="highlight half" />
                  <span className="halfbar" />
                  <label>Age</label>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="row" onChange={this.setGoal.bind(this)}>
                <input
                  className="rb"
                  defaultChecked
                  type="radio"
                  value="lose"
                  name="goal"
                />
                <span className="inputText">Lose Weight</span>
                <input
                  className="rb"
                  type="radio"
                  value="maintain"
                  name="goal"
                />
                <span className="inputText">Maintain Weight</span>
                <input className="rb" type="radio" value="gain" name="goal" />
                <span className="inputText">Gain Weight</span>
                <br />
                <label>Goal</label>
              </div>
            </div>

            <div className="row">
              <div className="group">
                <input
                  required="required"
                  type="number"
                  value={this.state.cupsOfWater}
                  onChange={this.updateWater}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Cups of Water per Day</label>
              </div>
              <div className="group output" id="water">
                <p>{this.cupsOfWater}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="group">
                <input
                  required="required"
                  type="number"
                  value={this.state.hoursOfSleep}
                  onChange={this.updateSleep}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Hrs. of Sleep</label>
              </div>
              <div className="group output">
                <p>{this.hoursOfSleep}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="group">
                <input
                  required="required"
                  type="number"
                  value={this.state.dailyCalories}
                  onChange={this.updateCalories}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Calories Consumed per Day</label>
              </div>
              <div className="group output">
                <p>{this.dailyCalories}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="group">
                <input
                  required="required"
                  className="half"
                  type="number"
                  value={this.state.height}
                  onChange={this.updateHeight}
                  min="0"
                />
                <span className="highlight half" />
                <span className="halfbar" />
                <label>Height (in.)</label>
              </div>
              <div className="group">
                <input
                  required="required"
                  className="half"
                  type="number"
                  value={this.state.weight}
                  onChange={this.updateWeight}
                  min="0"
                />
                <span className="highlight half" />
                <span className="halfbar" />
                <label>Weight (lbs.)</label>
              </div>

              <div className="group output">
                <p>{this.bmiMessage}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>

            <div className="row">
              <div className="group">
                <input
                  required="required"
                  type="number"
                  value={this.state.sodiumMilligrams}
                  onChange={this.updateMilligrams}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Milligrams of Sodium per Day</label>
              </div>
              <div className="group output">
                <p>{this.sodiumMilligrams}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="group">
                <input
                  required="required"
                  type="number"
                  value={this.state.teaspoonsOfSugar}
                  onChange={this.updateSugar}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Tsp of Sugar per Day</label>
              </div>

              <div className="group output">
                <p>{this.teaspoonsOfSugar}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="group">
                <input
                  required="required"
                  type="number"
                  value={this.state.screenTime}
                  onChange={this.updateScreenTime}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Hrs. of Screen Time per Day</label>
              </div>
              <div className="group output">
                <p>{this.screenTime}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="btn-box">
                <button className="btn" onClick={this.handleClear}>
                  clear
                </button>
                <button className="btn btn-submit" type="submit">
                  submit
                </button>
              </div>
            </div>
          </form>
          <Legend />
        </div>
      </div>
    );
  }
}
export default App;
