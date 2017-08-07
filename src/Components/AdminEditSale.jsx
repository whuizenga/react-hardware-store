import React from 'react';

const AdminEditSale = (props) => {
    return (
        <div>
            <span>
                <button onClick={props._toggleEditSaleItem}>
                    {props.editSaleItem ? "Hide" : "Edit Sale Item"}
                </button>
            </span>

            {props.editSaleItem ?
                <div>
                    <input
                        value={props.itemCurrentlyOnSale}
                        onChange={props._changeItemOnSale}
                        type="text"
                    />
                </div>
                : null}
        </div>
    );
};

export default AdminEditSale;