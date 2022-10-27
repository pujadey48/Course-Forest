import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { setLoading, signIn, user } = useContext(AuthContext);
  const { providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const loginDone = () => {
    console.log(from);
    navigate(from, { replace: true });
  };

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        loginDone();
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        loginDone();
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        loginDone();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (user) {
    return <Navigate to={from} state={{ from: location }} replace></Navigate>;
  }
  return (
    <Container className="w-50">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
      <p className="m-2">or Login with </p>
      <div>
        <Link onClick={handleGoogleSignIn} className="m-2">
          <FaGoogle></FaGoogle>
        </Link>{" "}
        <Link onClick={handleGithubSignIn} className="m-2">
          <FaGithub></FaGithub>
        </Link>
      </div>
    </Container>
  );
};

export default Login;
