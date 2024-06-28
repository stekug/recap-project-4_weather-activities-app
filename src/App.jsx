import { useState } from 'react';
import { uid } from 'uid';
import './App.css';
import Form from './components/Form';

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    // Rename & Destructure
    const { activityInput: name, isGoodWeatherCheck: isChecked } = newActivity;
    setActivities({ id: uid(), name, isChecked });
  }
  console.log(activities);

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
