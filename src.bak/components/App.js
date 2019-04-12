import React, { Component } from "react";
import "../styles/App.css";
import {
  WATER,
  SLEEP,
  CALORIES,
  BMI,
  EXCERCISE,
  SODIUM,
  SUGAR,
  SCREENTIME
} from "../data/values";

class App extends Component {
  constructor(props) {
    super(props);

    //Variables to be displayed
    this.cupsOfWater = "";
    this.hoursOfSleep = "";
    this.dailyCalories = "";
    this.bmi = "";
    this.minutesOfExcercise = "";
    this.teaspoonsOfSugar = "";
    this.sodiumMilligrams = "";
    this.screenTime = "";

    //Variables for user input
    this.state = {
      cupsOfWater: 0,
      hoursOfSleep: 0,
      dailyCalories: 0,
      height: 0,
      weight: 0,
      minutesOfExcercise: 0,
      sodiumMilligrams: 0,
      teaspoonsOfSugar: 0,
      screenTime: 0
    };

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

  handleSubmit(e) {
    e.preventDefault();
    this.forceUpdate();

    // Check if we had enough water
    if (
      this.state.cupsOfWater >= WATER.min &&
      this.state.cupsOfWater < WATER.max
    ) {
      //We had at least 8 cups of water
      this.cupsOfWater =
        this.state.cupsOfWater + " Cups is healthy";
    } else if (this.state.cupsOfWater >= WATER.max) {
      this.cupsOfWater =
        this.state.cupsOfWater + " Cups is too much";
    } else {
      //We had less than 8 cups of water
      this.cupsOfWater =
        this.state.cupsOfWater + " Cup(s) is not enough";
    }

    // Check if we had enough sleep
    if (
      this.state.hoursOfSleep >= SLEEP.min &&
      this.state.hoursOfSleep <= SLEEP.max
    ) {
      this.hoursOfSleep = this.state.hoursOfSleep + " Hours is healthy";
    } else if (this.state.hoursOfSleep > SLEEP.max) {
      this.hoursOfSleep =
        this.state.hoursOfSleep + " Hours is too much";
    } else {
      this.hoursOfSleep =
        this.state.hoursOfSleep + " Hour(s) is not enough";
    }

    // Check amount of calories
    if(this.state.dailyCalories >= CALORIES.goal){
      this.dailyCalories = "Consuming "+ this.state.dailyCalories +" would lead to weight gain"
    } else {
      this.dailyCalories = "Consuming "+ this.state.dailyCalories +" would lead to weight loss"
    }

    // Check BMI
    // [weight (lb) / height (in) / height (in)] x 703
    let bmi = (this.state.weight / Math.pow(this.state.height, 2)) * 703;
    bmi = bmi.toFixed(2)

    // eslint-disable-next-line default-case
    switch (true) {
      case bmi >= BMI.obese:
        this.bmi = "A BMI of "+bmi + " is considered obese";
        break;
      case bmi < BMI.obese && bmi >= BMI.overweight:
        this.bmi = "A BMI of "+bmi + " is considered overweight";
        break;
      case bmi < BMI.overweight && bmi >= BMI.normal:
        this.bmi = "A BMI of "+bmi + " is considered healthy";
        break;
      case bmi < BMI.normal:
        this.bmi = "A BMI of "+bmi + " is considered underweight";
        break;
    }

    // Check excercise
    if (this.state.minutesOfExcercise >= EXCERCISE.goal) {
      this.minutesOfExcercise =
        this.state.minutesOfExcercise + " minutes is good";
    } else {
      this.minutesOfExcercise =
        this.state.minutesOfExcercise +
        " minute(s) is not enough";
    }
    // Check amount of sodium
    if (this.state.sodiumMilligrams >= SODIUM.limit) {
      this.sodiumMilligrams =
        this.state.sodiumMilligrams + "mg of sodium is too much.";
    } else {
      this.sodiumMilligrams =
        this.state.sodiumMilligrams +
        "mg of sodium is healthy.";
    }
    // Check sugar
    if (this.state.teaspoonsOfSugar >= SUGAR.limit) {
      this.teaspoonsOfSugar =
        this.state.teaspoonsOfSugar +
        " tsp is too much.";
    } else {
      this.teaspoonsOfSugar =
        this.state.teaspoonsOfSugar +
        " tsps is healthy";
    }

    // Check screen time
    if (this.state.screenTime > SCREENTIME.limit) {
      this.screenTime = this.state.screenTime + " hrs. is too much";
    } else {
      this.screenTime = this.state.screenTime + " hrs. is healthy";
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <form>
            <h1>Health Track</h1>
            <h5>
              Enter Information Below to help determine what daily habits may
              say about your health
            </h5>
            <hr className="sep" />
            <div className="row">
              <div className="group">
                <input
                  type="number"
                  value={this.state.cupsOfWater}
                  onChange={this.updateWater}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Cups of Water per Day</label>
              </div>
              <div className="group output">
                <p>{this.cupsOfWater}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="group">
                <input
                  type="number"
                  value={this.state.hoursOfSleep}
                  onChange={this.updateSleep}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Hours of Sleep</label>
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
                  type="number"
                  value={this.state.dailyCalories}
                  onChange={this.updateCalories}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Calories per Day</label>
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
                <p>{this.bmi}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="group">
                <input
                  type="number"
                  value={this.state.minutesOfExcercise}
                  onChange={this.updateExcercise}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Minutes of Excercise per Day</label>
              </div>
              <div className="group output">
                <p>{this.minutesOfExcercise}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="group">
                <input
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
                  type="number"
                  value={this.state.teaspoonsOfSugar}
                  onChange={this.updateSugar}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Teaspoons of Sugar per Day</label>
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
                  type="number"
                  value={this.state.screenTime}
                  onChange={this.updateScreenTime}
                  min="0"
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Hours of Screen Time per Day</label>
              </div>
              <div className="group output">
                <p>{this.screenTime}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="btn-box">
                <button className="btn btn-submit" onClick={this.handleSubmit}>
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
