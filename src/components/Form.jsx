import './Form.css';

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    // Get the boolean from checkbox
    const checkbox = event.target.checkbox.checked;
    const formElements = new FormData(event.target);
    const data = Object.fromEntries(formElements);
    // Save the boolean into the data object
    data.checkbox = checkbox;
    onAddActivity(data);
    event.target.reset();
    event.target.activityInput.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add new Activity:</h2>
      <div>
        <label htmlFor="activityInput">Name:</label>
        <input type="text" name="activityInput" id="activityInput" required></input>
      </div>
      <div>
        <label htmlFor="checkbox">Good-weather Activity:</label>
        <input type="checkbox" name="checkbox" id="checkbox"></input>
      </div>
      <button type="submit">Submit Activity</button>
    </form>
  );
}
