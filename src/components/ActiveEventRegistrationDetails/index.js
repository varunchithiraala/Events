// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegisterView = () => (
    <div className="registration-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="register-view-image"
        alt="yet to register"
      />
      <p className="register-view-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-view-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registration-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered-view-image"
        alt="registered"
      />
      <h1 className="registered-view-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registration-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="registrations-closed-view-image"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-view-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-view-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
