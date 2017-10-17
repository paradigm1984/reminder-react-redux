
import { ADD_REMINDER, DELETE_REMINDER } from "../constants/constant.js";
import { bake_cookie, read_cookie } from "sfcookies";


const reminder = (action) => {
  let { text, dueDate } = action;

  return {
    id: Math.random(),
    text,
    dueDate
  }
}

const removeByID = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log("new, reduced reminders: ", reminders);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie("reminders");
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      bake_cookie("reminders", reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeByID(state, action.id);
      bake_cookie("reminders", reminders);
      console.log("new reduced reminders as state: ", reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
