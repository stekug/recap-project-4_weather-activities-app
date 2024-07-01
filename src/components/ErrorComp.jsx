import './List.css';

export default function ErrorComp() {
  return (
    <>
      <h1>Ups...</h1>
      <h2>We couldn´t get any wather-data, here are some ideas, what you can do:</h2>
      <ul className="activityList">
        <li>Read a book...</li>
        <li>Watch Tv...</li>
        <li>Surf on Reddit...</li>
        <li>Learn React...</li>
      </ul>
    </>
  );
}
