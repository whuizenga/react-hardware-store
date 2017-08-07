import React, { Component } from 'react';
import ProductList from './ProductList';

class StoreView extends Component {
    render() {
        const productList = this.props.productList;
        const adminMode = this.props.adminMode;

        return (
            <div>
                <h1>View the Store</h1>

                <h2>Products</h2>
                <ProductList productList = {productList}
                adminMode = {adminMode} />
            </div>
        );
    }
}

export default StoreView;