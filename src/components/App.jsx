import React from "react";
import Msg from "./Msg";

// Get the corresponding element by time
function App(props) {
  const timeHour = props.date.getHours();
  if (timeHour < 12) {
    return <Msg msg="Morning" color="blue" />;
  } else if (timeHour < 18) {
    return <Msg msg="Afternoon" color="red" />;
  } else {
    return <Msg msg="Evening" color="green" />;
  }
}

export default App;
