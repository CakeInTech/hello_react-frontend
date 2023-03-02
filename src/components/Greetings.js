import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchRandomGreeting from '../api/fetchGreetings';

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

const mapStateToProps = (state) => ({
  message: state.greeting.message,
});

Greeting.propTypes = {
  message: PropTypes.string,
  fetchRandomGreeting: PropTypes.func,
};

Greeting.defaultProps = {
  message: 'Hello there!',
  fetchRandomGreeting: undefined,
};

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
