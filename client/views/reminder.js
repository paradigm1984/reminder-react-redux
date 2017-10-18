// packages
import React, { Component } from "react";
import { Container, FormGroup, Label, Input, ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

// required files
import { addReminder, deleteReminder } from "../actions/actions.js";

// VIDEO: https://youtu.be/m7X0cvGp534?t=3m31s

class Reminder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: ""
    };
  }

  reminder() {
    console.log("this.state.dueDate: ", this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);

    this.setState({
      text: "",
      dueDate: ""
    });
  }

  deleteReminder(id) {
    // console.log("this.props: ", this.props);
    console.log("deleting reminder no: ", id);
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    // console.log("reminders: ", reminders);
    return (
      <div className="reminders-lis">
      {
        reminders.map(reminder => {
          return (
            <div>
              <div className="reminders-list">
                <div className="reminder-item" key={ reminder.id }>
                  <p className="reminder-time"> <em><strong>Due: </strong> { moment(new Date(reminder.dueDate)).fromNow() }</em>,  on { moment(new Date(reminder.dueDate)).format("dddd, MMMM Do YYYY, h:mm:ss a") } </p>
                  <p className="reminder-text"> { reminder.text } </p>
                </div>
                <button onClick={ () => this.deleteReminder(reminder.id) } className="x-button"> &#x2715; </button>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }


  render() {
    return(
      <Container className="form-container">
        <h3 className="form-header"> What would you like to remember? </h3>
        <FormGroup className="reminder-input">
          <Input className="input form-control" type="text" ref="form" value={ this.state.text } onChange={ event => this.setState({text: event.target.value}) } placeholder="I need to..." />
          <p className="date-title"> When is it due? <em>(Month, Day, Year and Time)</em>. </p>
          <Input className="date form-control" type="datetime-local" ref="form" value={ this.state.dueDate } onChange={ event => this.setState({dueDate: event.target.value}) } />
          <button className="add-button" onClick={ () => this.reminder() }> Add It! </button>
        </FormGroup>
        { this.renderReminders() }
      </Container>
    )
  }
}


function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder} )(Reminder);
