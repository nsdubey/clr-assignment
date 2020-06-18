import React from "react";
import { Table, Button } from "react-bootstrap";


const ProductList = props => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Rate</th>
                <th>Quality</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.productsList.length > 0 ? props.productsList.map((item, index) => (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.rate}</td>
                    <td>{item.quantity}</td>
                    <td>
                        <Button type="button" className="btn btn-danger" onClick={() => props.onProdDelete(item.id)}>Delete</Button>
                    </td>
                </tr>
            )) : <tr className="text-center">
                    <td colSpan="5">No Products Found</td>
                </tr>}
        </tbody>
    </Table>
);

export default ProductList;