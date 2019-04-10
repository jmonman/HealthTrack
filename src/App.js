import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    //Variables to be displayed
    this.cupsOfWater = "";
    this.hoursOfSleep = "";
    this.dailyCalories = "";
    this.sodiumMilligrams = "";
    this.bmi = "";
    this.screenTime = "";
    this.minutesOfExcercise = "";
    this.teaspoonsOfSugar = "";

    //Variables for user input
    this.state = {
      cupsOfWater: 0,
      hoursOfSleep: 0,
      dailyCalories: 0,
      sodiumMilligrams: 0, // 1500 to 2300
      bmi: 0,
      screenTime: 0,
      minutesOfExcercise: 0,
      teaspoonsOfSugar: 0 // 6 tsp max
    };

    this.updateCupsOfWater = this.updateCupsOfWater.bind(this);
    this.updateHoursOfSleep = this.updateHoursOfSleep.bind(this);
    this.updateDailyCalories = this.updateDailyCalories.bind(this);
    this.updateSodiumMilligrams = this.updateSodiumMilligrams.bind(this);
    this.updateBMI = this.updateBMI.bind(this);
    this.updateScreenTime = this.updateScreenTime.bind(this);
    this.updateMinutesOfExcercise = this.updateMinutesOfExcercise.bind(this);
    this.updateSugar = this.updateSugar.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCupsOfWater(event) {
    this.setState({ cupsOfWater: event.target.value });
  }
  updateHoursOfSleep(event) {
    this.setState({ hoursOfSleep: event.target.value });
  }
  updateDailyCalories(event) {
    this.setState({ dailyCalories: event.target.value });
  }
  updateSodiumMilligrams(event) {
    this.setState({ sodiumMilligrams: event.target.value });
  }
  updateBMI(event) {
    this.setState({ bmi: event.target.value });
  }
  updateScreenTime(event) {
    this.setState({ screenTime: event.target.value });
  }
  updateMinutesOfExcercise(event) {
    this.setState({ minutesOfExcercise: event.target.value });
  }
  updateSugar(event) {
    this.setState({ teaspoonsOfSugar: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.forceUpdate();

    // Check if we had enough water
    if (this.state.cupsOfWater >= 8 && this.state.cupsOfWater < 24) {
      //We had at least 8 cups of water
      this.cupsOfWater =
        this.state.cupsOfWater + " Cup(s) of water is a good amount";
    } else if (this.state.cupsOfWater >= 24) {
      this.cupsOfWater =
        this.state.cupsOfWater + " Cup(s) of water too much water";
    } else {
      //We had less than 8 cups of water
      this.cupsOfWater =
        this.state.cupsOfWater + " Cup(s) of water is not enought";
    }

    // Check if we had enough sleep
    if (this.state.hoursOfSleep >= 8 && this.state.hoursOfSleep <= 10) {
      this.hoursOfSleep = this.state.hoursOfSleep + " Hours of sleep is good";
    } else if (this.state.hoursOfSleep > 10) {
      this.hoursOfSleep =
        this.state.hoursOfSleep + " Hours of sleep is too much sleep";
    } else {
      this.hoursOfSleep =
        this.state.hoursOfSleep + " Hours of sleep is not enought";
    }

    //TODO:
    // Check amount of calories
    // Check amount of sodium
    // Check BMI
    // Check screen time
    // Check excercise
    // Check sugar
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
                  onChange={this.updateCupsOfWater}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Water</label>
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
                  onChange={this.updateHoursOfSleep}
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
                  onChange={this.updateDailyCalories}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Calories</label>
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
                  type="number"
                  value={this.state.sodiumMilligrams}
                  onChange={this.updateSodiumMilligrams}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Sodium</label>
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
                  value={this.state.bmi}
                  onChange={this.updateBMI}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>BMI</label>
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
                  value={this.state.screenTime}
                  onChange={this.updateScreenTime}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Screen Time</label>
              </div>
              <div className="group output">
                <p>{this.screenTime}</p>
                <span className="highlight" />
                <span className="bar" />
              </div>
            </div>
            <div className="row">
              <div className="group">
                <input
                  type="number"
                  value={this.state.minutesOfExcercise}
                  onChange={this.updateMinutesOfExcercise}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Minutes of Excercise</label>
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
                  value={this.state.teaspoonsOfSugar}
                  onChange={this.updateSugar}
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Sugar</label>
              </div>
              <div className="group output">
                <p>{this.teaspoonsOfSugar}</p>
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
