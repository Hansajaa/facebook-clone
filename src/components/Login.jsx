import "./Login.css";

export default function Login() {
  return (
    <div className="login-form">
      <div className="container w-100 login-component">
        <form>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address or Phone Number</label>
          </div>
          <div className="form-floating mt-3 mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2 mb-4" type="submit">
            <b>Login</b>
          </button>
          <a href="www.facebook.com" id="forgotten-password" className="mb-3">
            Forgotten password?
          </a>
          <div className="mt-4">
            <hr />
          </div>
          <div>
            <button id="button1" className="btn w-50 py-2" type="submit">
              <b>Create New Account</b>
            </button>
          </div>
        </form>
      </div>
      <p id="msg"><a id="msg-link" href="www.facebook.com"><b>Create a Page </b></a>for a celebrity, brand or business.</p>
    </div>
  );
}
