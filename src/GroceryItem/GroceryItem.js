import React, { Component } from 'react';
import moment from 'moment';
import produceImageUrl from './images/produce-image.png';
import meatImageUrl from './images/meat-image.png';
import otherImageUrl from './images/other-image.png';
import dairyImageUrl from './images/dairy-image.png';
import './GroceryItem.css';


export const GROCERY_ITEM_CATEGORY_PRODUCE = 'Produce';
export const GROCERY_ITEM_CATEGORY_MEAT = 'Meat';
export const GROCERY_ITEM_CATEGORY_OTHER = 'Other';
export const GROCERY_ITEM_CATEGORY_DAIRY = 'Dairy';

const GROCERY_ITEM_CATEGORY_TO_IMAGE_URL_MAPPING = {
  [GROCERY_ITEM_CATEGORY_PRODUCE]: produceImageUrl,
  [GROCERY_ITEM_CATEGORY_MEAT]: meatImageUrl,
  [GROCERY_ITEM_CATEGORY_OTHER]: otherImageUrl,
  [GROCERY_ITEM_CATEGORY_DAIRY]: dairyImageUrl,
};

class GroceryItem extends Component {
  render() {
    const {
      groceryItem,
      onDeleteButtonClick,
      onEditButtonClick
    } = this.props;

    const formattedExpirationDate = moment(groceryItem.expirationDate).utc().format('M/D/YYYY');
    return (
      <div className="grocery-item-box">
        <div className="item-icon-box">
          <img
            src={ GROCERY_ITEM_CATEGORY_TO_IMAGE_URL_MAPPING[groceryItem.section] }
            alt={ groceryItem.name }
            className="item-icon-image"
          />
        </div>
        <div className="item-details-box">
          <div className="item-label">
            <h3 className="margin-top-0">
              { groceryItem.name.toUpperCase() }
            </h3>
            <div className="item-buttons">
              <button type="button" onClick={ () => onEditButtonClick(groceryItem) }>
                <i className="fa fa-pencil" aria-hidden="true" />
              </button>
              <button type="button" onClick={
                (e) => onDeleteButtonClick(groceryItem._id, e)
              }>
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
            </div>
          </div>
          <p className="expiration-date margin-bottom-0">
            {`Exp. ${formattedExpirationDate}`}
          </p>
        </div>
      </div>
    );
  }
}

export default GroceryItem;
