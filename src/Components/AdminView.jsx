import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class AdminView extends Component {
    render() {
        const productList = this.props.productList;
        const _addNewProductToProductList = this.props.addNewProductToProductList;
        const removeProductfromProductList = this.props.removeProductfromProductList;
        const adminMode = this.props.adminMode;

        return (
            <div>
                <h1>Admin View</h1>

                <h2>Products</h2>
                <ProductList productList = {productList} 
                removeProductfromProductList={removeProductfromProductList}
                adminMode={adminMode}/>

                <h2>Create a new product</h2>
                <ProductForm 
                    addNewProductToProductList={_addNewProductToProductList}/>
            </div>
        );
    }
}

export default AdminView;