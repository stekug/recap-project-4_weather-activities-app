import { uid } from 'uid';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import useLocalStorageState from 'use-local-storage-state';
import { useEffect, useState } from 'react';

function App() {
  const [activities, setActivities] = useLocalStorageState('activities', {
    defaultValue: [],
  });

  const [weather, setWeather] = useState();

  function handleAddActivity(newActivity) {
    // Rename & Destructure
    const { activityInput: name, checkbox } = newActivity;
    setActivities([{ id: uid(), name, checkbox }, ...activities]);
  }

  // Fetch API
  const apiURL = 'https://example-apis.vercel.app/api/weather/rainforest';

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
      setWeather(data);
    }
    getWeather();

    const timer = setInterval(getWeather, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!weather) {
    return null;
  }

  // Filter function:

  const isGoodWeather = weather.isGoodWeather;
  // Filter with implicit return "()" istead of "{return}"
  const filteredActivities = activities.filter((activity) => activity.checkbox === isGoodWeather);

  console.log(weather.isGoodWeather);

  return (
    <>
      <h2>
        Temperature: {weather.temperature}°C {weather.condition}
      </h2>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
