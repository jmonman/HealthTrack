import React from "react";
import "../styles/App.css";

const Legend = () => (
  <div className="legend">
    <br />
    <h3>Formulas and Information</h3>

    <ul>
      <li>Gender & Age</li>
      <ul>
        <li>Both are factors in determining Base Metabolic Rate (BMR)</li>
        <li>
          BMR is the number of calories your body burns in a resting state per
          day
        </li>
        <li>
          BMR is calculated using the The Harris Benedict equations revised by
          Mifflin and St Jeor 1990 defined below:
        </li>
        <ul>
          <li>
            For Women: <br />
            BMR = (4.536 × weight in pounds) + (15.88 × height in inches) − (5 ×
            age) − 161
          </li>
          <li>
            For Men: <br />
            BMR = (4.536 × weight in pounds) + (15.88 × height in inches) − (5 ×
            age) + 5
          </li>
        </ul>
      </ul>

      <li>Weight Goal (Lose, Maintain, or Gain weight)</li>
      <ul>
        <li>
          Depending on personal factors including Body Mass Index (BMI) an
          individual may want to lose, gain, or maintain their current weight
        </li>
        <li>
          This is used as a factor to determine based on total calories consumed
          in a day and BMR if an individual had a caloric surplus or caloric
          deficit for the day which can be used as baseline to determine whether
          or not they will lose or gain weight.
        </li>
        <li>Caloric Surplus or Deficit = Calories consumed per day - BMR</li>
        <li>
          It is considered healthy to meet your goal based on the criteria and a
          comparison is done in the application to check this based on the
          chosen goal
        </li>
      </ul>
      <li>Cups of water consumed in a day</li>
      <ul>
        <li>
          It is healthy to drink between 8 and 24 glasses of water per day
        </li>
      </ul>
      <li>Hours of sleep in a day</li>
      <ul>
        <li>It is healthy to sleep 7 to 9 hours per day</li>
      </ul>
      <li>Calories consumed in a day</li>
      <ul>
        <li>The total number of kCals consumed in a day</li>
        <li>
          Used as factor in detemining caloric surplus or deficit for the day
        </li>
      </ul>
      <li>Height and Weight</li>
      <ul>
        <li>
          Both are used as factors in determining BMR as well as Body Mass Index
          or BMI
        </li>
        <ul>
          <li>
            BMI is calculated by the formula:
            <br />
            BMI = ((lbs)/(in^2)) X 703
          </li>
          <li>
            {" "}
            Values for BMR are:
            <br />
            {"Underweight = <18.5"}
            <br />
            {"Normal weight = 18.5–24.9"}
            <br />
            {"Overweight = 25–29.9"}
            <br />
            {"Obesity = BMI of 30 or greater"}
            <br />
          </li>
        </ul>
      </ul>
      <li>Milligrams of sodium consumed in a day</li>
      <ul>
        <li>
          It is considered healthy to consume no more than 2300mg of sodium in a
          day
        </li>
      </ul>
      <li>Teaspoons of sugar consumed in a day</li>
      <ul>
        <li>
          For women it is unhealthy to consume 6 teaspoon or more of sugar in a
          day
        </li>
        <li>
          For men it is unhealthy to consume 9 teaspoon or more of sugar in a
          day
        </li>
      </ul>
      <li>Hours spent in front of a screen</li>
      <ul>
        <li>
          It is unhealthy to spend more than 2 hours in a day staring at
          electronic screens such as computer monitors, televisions, or cell
          phones which can be challenging in a world which relies more and more
          on our devices
        </li>
      </ul>
    </ul>
    <ul>
      <li>
        This app was built using <a href="https://reactjs.org/">React.js</a>,
        styled with{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> and
        hosted via <a href="https://pages.github.com/">Github Pages</a>
      </li>
    </ul>
  </div>
);

export default Legend;
