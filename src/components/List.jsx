import './List.css';
import './ListElement.css';

export default function List({ activities, isGoodWeather, onDelete }) {
  const goodWeather = 'The weather is awesome! Go outside and: ';
  const badWeather = 'Bad weather outside! Here is what you can do now: ';

  return (
    <ul className="activityList">
      <h2>{isGoodWeather ? goodWeather : badWeather}</h2>
      {activities.map((activity) => (
        <li key={activity.id} className="ListElement">
          {activity.name}
          <button onClick={() => onDelete(activity.id)} className="ListElement__button">
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
