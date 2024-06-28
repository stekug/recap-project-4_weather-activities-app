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
    const { activityInput: name, isGoodWeatherCheck: isChecked } = newActivity;
    setActivities([{ id: uid(), name, isChecked }, ...activities]);
  }
  /* console.log(activities); */

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
