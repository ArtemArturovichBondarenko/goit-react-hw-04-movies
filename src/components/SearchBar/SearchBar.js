import React, { Component } from 'react';
import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmite = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
    this.setState({ query: '' });
  };

  
  render() {
    const { query } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmite}>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter movie name"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </>
    );
  }
}
