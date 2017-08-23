import React, { Component } from 'react';
import $ from 'jquery-ajax';
import GroceryItem from '../GroceryItem/GroceryItem';
import UpdateGroceryItemForm from '../UpdateGroceryItemForm/UpdateGroceryItemForm';
import './GroceryItemList.css';


const viewportWidth = window.innerWidth;
const determineMobileOrDesktop = viewportWidth < 768 ? 'mobile-grocery-items-container' : 'grocery-items-container';

class GroceryItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      viewportWidth: determineMobileOrDesktop,
      itemToUpdate: {},
      isFormVisible: false,
    }
  }

  _getAllGroceryItemsFromServer = () => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/api/groceryItems', // TODO: put in config file
    })
    .then((res) => {
      this.setState({
        groceries: res
      }, (err) => {
        console.log(err);
      })
    });
  }

  componentWillMount() {
    this._getAllGroceryItemsFromServer();
  }

  _handleGroceryItemDelete = (id, e) => {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: `http://localhost:3001/api/groceryItems/${id}`,
    })
    .then((res) => {
      this._getAllGroceryItemsFromServer();
    }, (err) => {
      console.error(err);
    });
  }

  _showForm = (item) => {
    this.setState({
      itemToUpdate: item,
      isFormVisible: true,
    });
  }

  _handleEditCompletion = () => {
    this._getAllGroceryItemsFromServer();
    this.setState({
      itemToUpdate: {},
      isFormVisible: false,
    });
    console.log('aaaand we are back', this.state.groceries);
  }

  render() {
    const { groceries, isFormVisible, viewportWidth, itemToUpdate } = this.state;
    console.log('itemTOUpdate', this.state.itemToUpdate)
    console.log('is form vis', isFormVisible)
      const groceryItems = groceries.map((groceryItem, index) => {
        return (
          <GroceryItem
            key={index}
            groceryItem={groceryItem}
            onDeleteButtonClick={ this._handleGroceryItemDelete }
            onEditButtonClick={ this._showForm }
          />
        );
      });
    return (isFormVisible
      ? (
        <UpdateGroceryItemForm
          groceryItem={itemToUpdate}
          handleEditCompletion={ () => this._handleEditCompletion() }
        />
      )
      : (
        <div className={viewportWidth}>
          {groceryItems}
        </div>
      )
    );
  }
}

export default GroceryItemList;
