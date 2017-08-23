import React, { Component } from 'react';
import moment from 'moment';
import $ from 'jquery-ajax';


class UpdateGroceryItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.groceryItem.name,
      expirationDate: this.props.groceryItem.expirationDate,
      section: this.props.groceryItem.section,
      groceryId: this.props.groceryItem._id,
    };
  }

  _handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  _handleExpirationDateChange = (e) => {
    this.setState({
      expirationDate: e.target.value,
    });
  }

  _handleSectionChange = (e) => {
    this.setState({
      section: e.target.value,
    });
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    const id = this.state.groceryId;
    const item = {
      name: this.state.name,
      expirationDate: this.state.expirationDate,
      section: this.state.section,
    };

    $.ajax({
      method: 'PUT',
      url: `http://localhost:3001/api/groceryItems/${id}`,
      data: item,
    })
    .then((res) => {
      console.log('groceryItem Updated!', item)
      this.setState({
        name: '',
        expirationDate: '',
        section: '',
        groceryId: '',
      });
      this.props.handleEditCompletion();
    }, (err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <form onSubmit={ (e) => this._handleSubmit(e) }>
        <input
          type='text'
          placeholder='Grocery name'
          value={this.state.name}
          onChange={ (e) => this._handleNameChange(e) }
        />
        <input
          type='date'
          placeholder='Expiration Date'
          value={moment(this.state.expirationDate).utc().format('YYYY-MM-DD')}
          onChange={ (e) => this._handleExpirationDateChange(e) }
        />
        <input
          type='text'
          placeholder='Section'
          value={this.state.section}
          onChange={ (e) => this._handleSectionChange(e) }
        />
        <input type='submit' />
      </form>
    );
  }
}

export default UpdateGroceryItemForm;
