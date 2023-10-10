// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, name, imageUrl, location} = eventDetails
  const eventItemImageClassName = isActive
    ? 'event-item-image active-item'
    : 'event-item-image'

  const onSetActiveEventId = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item-list">
      <button
        type="button"
        className="event-item-button"
        onClick={onSetActiveEventId}
      >
        <img src={imageUrl} className={eventItemImageClassName} alt="event" />
      </button>
      <p className="event-item-name">{name}</p>
      <p className="event-item-location">{location}</p>
    </li>
  )
}

export default EventItem
