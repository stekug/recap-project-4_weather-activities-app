import { uid } from 'uid';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import useLocalStorageState from 'use-local-storage-state';
import { useEffect, useState } from 'react';
import ErrorComp from './components/ErrorComp';

const apiURL = 'https://example-apis.vercel.app/api/weather/rainforest';

export default function App() {
  const [activities, setActivities] = useLocalStorageState('activities', { defaultValue: [] });
  const [weather, setWeather] = useState();

  function handleAddActivity(newActivity) {
    // Rename & Destructure
    const { activityInput: name, checkbox } = newActivity;
    setActivities([{ id: uid(), name, checkbox }, ...activities]);
  }

  function handleDeleteActivity(id) {
    setActivities((prevActivities) => {
      return prevActivities.filter((activity) => activity.id !== id);
    });
  }

  // Fetch API
  async function getWeather() {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setWeather(data);
      throw new TypeError('Fetching Error');
    } catch (e) {
      console.log('Our Error', e);
    }
  }

  useEffect(() => {
    getWeather();
    const timer = setInterval(getWeather, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!weather) {
    return null;
  }

  // Filter function:
  const isGoodWeather = weather.isGoodWeather;
  const filteredActivities = activities.filter((activity) => activity.checkbox === isGoodWeather);
  console.log(isGoodWeather);

  if (isGoodWeather !== undefined) {
    return (
      <>
        <h2>
          Temperature: {weather.temperature}°C {weather.condition}
        </h2>
        <List onDelete={handleDeleteActivity} activities={filteredActivities} isGoodWeather={isGoodWeather} />
        <Form onAddActivity={handleAddActivity} />
      </>
    );
  }
  return <ErrorComp />;
}
