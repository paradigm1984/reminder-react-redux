// packages
import React, { Component } from "react";
import { Container, FormGroup, Label, Input, ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addReminder } from "../actions/actions.js";

// VIDEO: https://youtu.be/oCAc3EsEWZ8

class CreateReminder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  reminder() {
    console.log("this: ", this);
    this.props.addReminder(this.state.text);
  }

  renderReminders() {
    const { reminders } = this.props;
    console.log("reminders: ", reminders);
    return (
      <ListGroup>
      {
        reminders.map(reminder => {
          return (
            <ListGroupItem key={ reminder.id }>
              <div> { reminder.text } </div>
            </ListGroupItem>
          )
        })
      }
      </ListGroup>
    )
  }


  render() {
    return(
      <Container className="form-container">
        <h1 className="form-header"> Remember everything! </h1>
        <FormGroup>
          <Input className="input" type="text" onChange={ event => this.setState({text: event.target.value}) } placeholder="I need to..." />
        </FormGroup>
        <button className="add-button" onClick={ () => this.reminder() }>
          Add Reminder
        </button>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReminder);
