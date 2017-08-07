import React, { Component } from 'react';
import AdminView from './AdminView';
import StoreView from './StoreView';
import AdminEditSale from './AdminEditSale';

class HomePage extends Component {
    constructor() {
        super();

        this.state = {
            itemCurrentlyOnSale: "A Hammer",
            editSaleItem: true,
            productList: [
 		        {
 		            productName: 'Hammer',
 		            description: 'Itsa hammer',
 		            price: 12.3,
 		        },
 		        {
 		            productName: 'Nail',
 		            description: 'Itsa nail',
 		            price: 0.12,
                 },
 	        ],
            adminMode: false

        };
    };

    _toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({ editSaleItem });
        }
    _toggleAdminMode = () => {
        const adminMode = !this.state.adminMode;
        this.setState({adminMode});
    }
    _changeItemOnSale = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({ itemCurrentlyOnSale });
        };
    _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({productList});
        };

    _removeProductfromProductList = (index) => {
        const productList = [...this.state.productList];
        productList.splice(index, 1);
        this.setState({productList});
    }
    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <button onClick={this._toggleAdminMode}>
                    {this.state.adminMode ? "Show Store View" : "Show Admin Mode"}
                </button>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}! </span>
                    {this.state.adminMode ?
                        <AdminEditSale 
                        _toggleEditSaleItem = {this._toggleEditSaleItem}
                        editSaleItem = {this.state.editSaleItem}
                        itemCurrentlyOnSale = {this.state.itemCurrentlyOnSale}
                        _changeItemOnSale = {this._changeItemOnSale} /> :
                        null }


                </div>
                {this.state.adminMode ?
                    <AdminView 
                    productList={this.state.productList}
                    addNewProductToProductList={this._addNewProductToProductList}
                    removeProductfromProductList={this._removeProductfromProductList}
                    adminMode={this.state.adminMode}/> :
                    <StoreView 
                    productList={this.state.productList}
                    adminMode={this.state.adminMode}/> }
            </div>
        );
    };
};

export default HomePage;