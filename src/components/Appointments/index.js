import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

// const initialList = [
//   {
//     id: v4(),
//     title: 'Dentist',
//     date: new Date(),
//     isFavorite: false,
//   },
// ]

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: ''}

  onSubmitForm = event => {
    event.preventDefault()
    const {title, date} = this.state
    let newAppointment
    if (title === '' && date === '') {
      newAppointment = {
        id: v4(),
        title: 'Title',
        date: new Date(date),
        isFavorite: false,
      }
    } else {
      // console.log(title, date)
      newAppointment = {
        id: v4(),
        title,
        date: new Date(date),
        isFavorite: false,
      }
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  showOnlyStarred = () => {
    const {appointmentsList} = this.state
    const updateResult = appointmentsList.filter(
      each => each.isFavorite === true,
    )
    this.setState({
      appointmentsList: updateResult,
    })
  }

  renderAppointmentItems = () => {
    const {appointmentsList} = this.state
    const listItems = appointmentsList.map(eachItem => (
      <AppointmentItem
        appointmentDetails={eachItem}
        key={eachItem.id}
        toggleIsFavorite={this.toggleIsFavorite}
      />
    ))
    return listItems
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  render() {
    const {title, date} = this.state
    return (
      <div className="app-container">
        <div className="appointment-container">
          <h1 className="appointment-heading">Add Appointment</h1>
          <div className="inputs-container">
            <form className="form" onSubmit={this.onSubmitForm}>
              <label htmlFor="title-input" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title-input"
                placeholder="Title"
                className="input-style"
                value={title}
                onChange={this.onChangeTitle}
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
                onChange={this.onChangeDate}
              />
              <br />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="appointment-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointments-img"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="appointments-added-container">
            <div className="heading-container">
              <h1 className="heading">Appointments</h1>
              <button
                type="button"
                className="starred-btn"
                onClick={this.showOnlyStarred}
              >
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
