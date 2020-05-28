import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SignIn: React.FC = () => {
  let history = useHistory();
  const [submitted, setSubmitted] = useState(false);
  const { signIn } = useAuth();

  async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setSubmitted(true);
    await signIn();
    history.push("/");
    setSubmitted(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 10 }}>Login</h1>

      <form onSubmit={(event) => handleSignIn(event)}>
        <button type="submit" className="btn btn-dark">
          {!submitted ? `Sign In` : <FontAwesomeIcon icon={faSpinner} spin />}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
