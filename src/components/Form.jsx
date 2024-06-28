import './Form.css';

function Form({ onAddActivity }) {
  return (
    <form className="form">
      <h2>Add new Activity:</h2>
      <div>
        <label htmlFor="activityInput">Name:</label>
        <input type="text" name="activityInput" id="activityInput"></input>
      </div>
      <div>
        <label htmlFor="activityWeather">Good-weather Activity:</label>
        <input type="checkbox" name="activityWeather" id="activityWeather"></input>
      </div>
      <button type="submit">Submit Activity</button>
    </form>
  );
}

export default Form;
