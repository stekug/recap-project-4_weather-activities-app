import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  /* const isGoodWeather = true; */

  /*   {activities.filter((activity)=>{
    if (activity.checkbox === isGoodWeather) 
  })} */

  function handleAddActivity(newActivity) {
    // Rename & Destructure
    const { activityInput: name, checkbox } = newActivity;
    setActivities([{ id: uid(), name, checkbox }, ...activities]);
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
