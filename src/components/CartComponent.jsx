import React from 'react';
import { connect } from 'react-redux';
import { removeItem, manageQty } from '../actions/actions';


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialQuantity: 1
        }
    }


    handleQty(e, product_id) {
        this.props.manageQty({ "qty": e.target.value, "product_id": product_id })
    }

    handleRemoveItem(item) {
        this.props.removeItem(item)
    }

    getCartTotalValue() {
        const items = this.props.cart_products
        let total = 0
        items.map((item) => {
            total += item.quantity * item.price
        })
        return total.toFixed(2)
    }

    render() {
        return (
            <div className='cart_container mt-3'>
                <div className="card mt-3">
                    <div className="card-body">
                        {this.props.cart_products && this.props.cart_products.length > 0 &&
                            this.props.cart_products.map((item) => {
                                return (
                                    <div className='d-flex' key={item.id}>
                                        <div className="col-md-4">
                                            <img src={item.image} className="img-fluid cart-image mt-4" />
                                            <div className="">
                                                <button className='btn btn-danger btn-sm deleteBtn fw-bold' onClick={() => this.handleRemoveItem(item)}>DELETE</button>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <div className="card-text fw-bold">
                                                    {item.title}
                                                </div>
                                                <p><span className='text-muted text-sm'>Availability: </span><small className='text-danger'>In Stock</small></p>
                                                <div className='price_quantity_container'>
                                                    <span className='text-danger'>${item.price}</span>
                                                    <div>
                                                        <label style={{ marginLeft: "20px" }}>Qty: </label>
                                                        <input type="number" min={1} onChange={(e) => this.handleQty(e, item.id)} value={item.quantity} style={{ width: "60px", marginLeft: "10px" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="card-footer border-default bg-white">
                        <div className="row fw-bold">
                            <div className="col-md-6">TOTAL </div>
                            <div className="col-md-6 text-danger">
                               <span className='float-end'> $ {this.getCartTotalValue()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart_products: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeItem: (data) => dispatch(removeItem(data)),
        manageQty: (data) => dispatch(manageQty(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)