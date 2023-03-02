import React, { useEffect} from "react";
import { connect } from 'react-redux';
import { fetchRandomGreeting } from "../api/fetchGreetings";

const Greeting = ({ message, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div className="container">
      <h1 className="message">{message}</h1>
    </div>
  );
};


const mapStateToProps = state => ({
  message: state.greeting.message
});

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
