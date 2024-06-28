import './Form.css';

function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    // Get the boolean from checkbox
    const isGoodWeatherCheck = event.target.isGoodWeatherCheck.checked;
    const formElements = new FormData(event.target);
    const data = Object.fromEntries(formElements);
    // Save the boolean into the data object
    data.isGoodWeatherCheck = isGoodWeatherCheck;
    // console.log(data);
    onAddActivity(data);
    event.target.reset();
    event.target.activityInput.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <div>
        <label htmlFor="activityInput">Name:</label>
        <input type="text" name="activityInput" id="activityInput"></input>
      </div>
      <div>
        <label htmlFor="isGoodWeatherCheck">Good-weather Activity:</label>
        <input type="checkbox" name="isGoodWeatherCheck" id="isGoodWeatherCheck"></input>
      </div>
      <button type="submit">Submit Activity</button>
    </form>
  );
}

export default Form;
