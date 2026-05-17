function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          
          <h5 className="text-center mb-3">EMS - Employer Login</h5>

          <div className="card">
            <div className="card-body">
              <form>
                <label className="mb-1">Company Email</label>
                <input
                  type="email"
                  placeholder="company email"
                  className="form-control mb-2"
                />

                <label className="mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control mb-3"
                />

                <button className="btn btn-primary w-100">
                  Login
                </button>

                <p className="text-center mt-3">
                  Powered by Transflower Learning Framework
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
