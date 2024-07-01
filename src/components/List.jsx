import "./List.css";
import ListElement from "./ListElement";


function List({ activities, isGoodWeather }) {
  const goodWeather = "The weather is awesome! Go outside and: ";
  const badWeather = "Bad weather outside! Here is what you can do now: ";
  return (
    <ul className="activityList">
      <h2>{isGoodWeather ? goodWeather : badWeather}</h2>
      {activities.map((activity) => (
        <ListElement key={activity.id} activity={activity}/>
        
      ))}
    </ul>
  );
}

export default List;
