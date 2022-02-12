import React from 'react';
import { connect } from 'react-redux';
import Products from '../data/data.json'
import { addItem } from '../actions/actions';
import Cart from './CartComponent';


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_cart: false
        }
    }

    handleAddCart(product) {
        product['quantity'] = 1
        this.props.addItem(product)
    }

    render() {
        return (
            <div>
                <div className='main_container'>
                    <div className="row mt-3">
                        {Products && Products.map((product, i) => {
                            return (
                                <div className="col-md-3 p-3" key={i}>
                                    <div className='card product-card'>
                                        <div className="card-body">
                                            <p className='text-muted fw-small'>{product.category}</p>
                                            <h6 className="card-title" style={{ color: "#7AC9FA" }}>{product.title.length > 50 ? product.title.substring(0, 50).concat('...') : product.title}</h6>
                                            <div className="text-center mt-4 image_container">
                                                <img src={product.image} className="img-fluid image" alt="#"></img>
                                            </div>
                                            <div className='text-danger fw-bold'>$ {product.price}</div>
                                        </div>
                                        <div className="card-footer bg-white product-card-footer">
                                            <div className="d-grid gap-2">
                                                {
                                                    this.props.cart.find((item) => item.id === product.id) ?
                                                        <button className="btn btn-outline-primary" type="button" disabled>Added</button>
                                                        : <button className="btn btn-outline-primary" type="button" onClick={() => this.handleAddCart(product)}>Add to Cart</button>
                                                }
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                       
                    </div>
                   
                    { this.props.cart?.length ? <Cart /> : <div></div>}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart

    }
}

function mapDispatchToState(dispatch) {
    return {
        addItem: (data) => dispatch(addItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(ProductList);