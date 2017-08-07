import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {
    render() {
        const productList = this.props.productList;
        const removeProductfromProductList = this.props.removeProductfromProductList;
        const adminMode = this.props.adminMode;

        const productComponents = productList.map((product, index) => {
            return <Product 
                productName={product.productName}
                description={product.description}
                price={product.price}
                key={index}
                index={index}
                removeProductfromProductList = {removeProductfromProductList}
                adminMode = {adminMode} />
        });

        return (
            <div>
                {productComponents}
            </div>
        );
    }
}

export default ProductList;