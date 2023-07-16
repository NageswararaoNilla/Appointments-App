import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {title, date, isFavorite} = appointmentDetails

  const dayFormat = format(date, 'dd MMMM yyyy, EEEE')

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-container">
      <div className="star-container">
        <p className="title">{title}</p>
        <button type="button" data-testid="star" className="star-btn">
          <img src={starImgUrl} alt="star" className="star-img" />
        </button>
      </div>
      <p className="day-style">Date: {dayFormat}</p>
    </li>
  )
}

export default AppointmentItem
