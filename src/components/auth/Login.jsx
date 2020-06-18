import React, { useState } from "react";
import { Form, FormControl, Button, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { getErrorMessage } from '../../utils/validation';
import validate from 'validate.js';
import { LOGIN_CONSTRAINTS } from './constraints';
import { STORAGE_KEYS } from '../../utils/constants';
import crypto from "crypto";
import { toast } from "react-toastify";
import { isLoggedIn } from "../../utils/storage";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null);

    const handleSubmit = (event) => {

        event.preventDefault();
        const errors = validate({ email, password }, LOGIN_CONSTRAINTS);
        if (!!errors) {
            setErrors(errors);
            return;
        }

        const token = crypto.randomBytes(32).toString('base64')
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN_KEY, token);
        localStorage.setItem(STORAGE_KEYS.USER_NAME, email);

        setErrors(null);
        toast.success(
            "Login successful"
        );
        props.history.push("/");
    }

    const renderLoginForm = () => (
        <Form onSubmit={handleSubmit} className={`${!!errors ? 'was-validated' : ''}`} noValidate>
            <Form.Group>
                <Form.Label className="mb-1">Email</Form.Label>
                <FormControl
                    id="email"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <div className="invalid-feedback">{getErrorMessage('email', errors)}</div>
            </Form.Group>
            <Form.Group>
                <Form.Label className="mb-1">Password</Form.Label>
                <FormControl
                    id="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                <div className="invalid-feedback">{getErrorMessage('password', errors)}</div>
            </Form.Group>
            <Form.Group style={{ textAlign: "center" }}>
                <Button type="submit" className="btn btn-success" >Login</Button>
            </Form.Group>
        </Form>
    );

    return (
        <>
            {isLoggedIn() ? <Redirect to={{ pathname: '/' }} /> : null}
            <Card style={{ margin: "auto", width: "40%", marginTop: "5%", padding: "20px" }}>
                <h2 style={{ textAlign: "center" }}>Login</h2>
                {renderLoginForm()}
            </Card>
        </>
    )
}


export default Login;