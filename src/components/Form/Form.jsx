import { Component } from 'react';
import css from './Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.name);
  };

  onBtnSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const nameValue = this.state.name;
    const telValue = this.state.number;

    return (
      <form onSubmit={this.onBtnSubmit} className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <input
            className={css.input}
            type="text"
            name="name"
            value={nameValue}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={css.label}>
          <span>Tel number</span>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={telValue}
            onChange={this.handleChange}
            pattern="\d{1,9}"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
