import './ListElement.css';

export default function ListElement({ activity, onDelete }) {
  return (
    <li className="ListElement">
      {activity.name}
      <button onClick={() => onDelete(activity.id)} className="ListElement__button">
        x
      </button>
    </li>
  );
}
