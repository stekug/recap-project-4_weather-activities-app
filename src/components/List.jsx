import Form from './Form';
import ListElement from './ListElement';
import ErrorComp from './ErrorComp';
import useLocalStorageState from 'use-local-storage-state';
import { useEffect, useState } from 'react';
import { uid } from 'uid';
import './List.css';
import './ListElement.css';

const apiURL = 'https://example-apis.vercel.app/api/weathertt';

export default function List() {
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
    } catch (error) {
      setWeather('fetchError');
      console.log('Our Error', error);
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
  const filteredActivities = activities.filter((activity) => activity.checkbox === weather.isGoodWeather);

  if (weather === 'fetchError') {
    return <ErrorComp />;
  } else {
    return (
      <>
        <h2>
          Temperature: {weather.temperature}°C {weather.condition}
        </h2>
        <ul className="activityList">
          <h2>
            {weather.isGoodWeather
              ? 'The weather is awesome! Go outside and: '
              : 'Bad weather outside! Here is what you can do now: '}
          </h2>
          {filteredActivities.map((activity) => (
            <ListElement key={activity.id} activity={activity} onDelete={handleDeleteActivity} />
          ))}
        </ul>
        <hr></hr>
        <Form onAddActivity={handleAddActivity} />
      </>
    );
  }
}
