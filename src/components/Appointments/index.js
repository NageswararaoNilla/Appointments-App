import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const initialList = [
  {
    id: v4(),
    title: 'Dentist',
    date: new Date(),
    isFavorite: false,
  },
]

class Appointments extends Component {
  state = {appointmentsList: initialList, title: '', date: ''}

  renderAppointmentItems = () => {
    const {appointmentsList} = this.state
    const listItems = appointmentsList.map(eachItem => (
      <AppointmentItem appointmentDetails={eachItem} />
    ))
    return listItems
  }

  render() {
    const {title, date} = this.state
    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="appointment-heading">Add Appointment</h1>
          <div className="inputs-container">
            <form className="form">
              <label htmlFor="title-input" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title-input"
                placeholder="Title"
                className="input-style"
                value={title}
              />
              <br />
              <label htmlFor="date-input" className="label">
                DATE
              </label>
              <input
                type="date"
                id="date-input"
                className="input-style"
                value={date}
              />
              <br />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <hr className="line" />
          <div className="appointments-added-container">
            <div className="heading-container">
              <h1 className="heading">Appointments</h1>
              <button type="button" className="starred-btn">
                Starred
              </button>
            </div>
            <ul className="appointment-list">
              {this.renderAppointmentItems()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
