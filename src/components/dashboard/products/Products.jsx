import React, { useState } from "react";
import { Button, Modal, Form, FormControl } from "react-bootstrap";
import { getErrorMessage } from '../../../utils/validation';
import { PRODUCT_CONSTRAINTS } from "./constraints";
import validate from 'validate.js';
import { toast } from "react-toastify";
import ProductList from "./ProductList";

const Products = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const [name, setName] = useState("");
    const [rate, setRate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate({ name, rate, quantity }, PRODUCT_CONSTRAINTS);
        console.log(errors);
        if (!!errors) {
            setErrors(errors);
            return;
        }
        setShowModal(false)
        setErrors(null);
        const newProduct = productsList.concat({ id: productsList.length + 1, name: name, rate: rate, quantity: quantity });
        setProductsList(newProduct);
        toast.success(
            "Product Added successful"
        );
    }

    const handleDeleteProd = proId => {
        const updatedProduct = productsList.filter(item => item.id !== proId);
        setProductsList(updatedProduct);
        toast.success(
            "Product Deleted successful"
        );
    }
    const handleClose = () => {
        setShowModal(false)
    }



    return (
        <>
            <div style={{ width: "70%", margin: "auto" }}>
                <h2 className="text-center">Products List</h2>
                <div style={{ padding: "20px 0" }}>
                    <Button type="button" className="float-right" onClick={() => setShowModal(true)}>Add Product</Button>
                </div>
                <ProductList onProdDelete={handleDeleteProd} productsList={productsList} />
            </div >
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className={`${!!errors ? 'was-validated' : ''}`} noValidate>
                        <Form.Group>
                            <Form.Label className="mb-1">Name</Form.Label>
                            <FormControl
                                id="name"
                                type="text"
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                            <div className="invalid-feedback">{getErrorMessage('name', errors)}</div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mb-1">Rate</Form.Label>
                            <FormControl
                                id="rate"
                                type="text"
                                onChange={(event) => setRate(event.target.value)}
                                required
                            />
                            <div className="invalid-feedback">{getErrorMessage('rate', errors)}</div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mb-1">Quantity</Form.Label>
                            <FormControl
                                id="quantity"
                                type="text"
                                onChange={(event) => setQuantity(event.target.value)}
                                required
                            />
                            <div className="invalid-feedback">{getErrorMessage('quantity', errors)}</div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" type="button" onClick={handleSubmit} >Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Products;