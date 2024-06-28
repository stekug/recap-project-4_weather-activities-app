import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    // Rename & Destructure
    const { activityInput: name, checkbox } = newActivity;
    setActivities([{ id: uid(), name, checkbox }, ...activities]);
  }

  //Filter function:

  const isGoodWeather = true;
  //Filter with implicit return "()" istead of "{return}"
  const filteredActivities = activities.filter(
    (activity) => activity.checkbox === isGoodWeather
  );

  console.log(filteredActivities);

  return (
    <>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
