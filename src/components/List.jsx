import "./List.css";

function List({ activities }) {
  console.log("test: ", activities);
  return (
    <ul className="activityList">
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}

export default List;
