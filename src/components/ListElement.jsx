import "./ListElement.css"

export default function ListElement ({activity}) {
    return (
        <li className="ListElement" >{activity.name}<button className="ListElement__button">x</button></li>
    )
}