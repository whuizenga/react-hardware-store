import React, { Component } from 'react';

class Product extends Component {
    _delete = (event) => {
        this.props.removeProductfromProductList(this.props.index);
    }

    render() {
            const productName=this.props.productName;
            const description=this.props.description;
            const price=this.props.price;
            const adminMode = this.props.adminMode;

        return (
            <div>
                <h4>{productName}</h4>
                <div>Price: {price} </div>
                <div>{description}</div>
                {adminMode ? <button onClick={this._delete}>delete</button> : null }
            </div>
        );
    }
}

export default Product;
