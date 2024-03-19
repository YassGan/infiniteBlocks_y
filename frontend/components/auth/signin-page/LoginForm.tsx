import { FormEvent, useState } from 'react';

const LoginForm = (props: { signinAction: (user: any) => {} }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission

    const formData = new FormData(event.currentTarget)
    var jsonObject = Array.from(formData.entries()).reduce((accumulator: any, [key, value]) => {
      accumulator[key] = value;
      return accumulator;
    }, {});
    await props.signinAction(jsonObject);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="user-data-form mt-40 lg-mt-30"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input type="email" placeholder="hasan@gmail.com" name="username" required />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              className="pass_log_id"
              required
            />
            <span className="placeholder_icon" onClick={handleTogglePassword}>
              <span className=" d-flex align-items-center">
                {showPassword ? (
                  <>
                    <i className="fa-regular fa-eye"></i>
                  </>
                ) : (
                  <>
                    <i className=" fa-regular fa-eye-slash"></i>
                  </>
                )}
              </span>
            </span>
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
            <a href="#">Forget Password?</a>
          </div>
          {/* /.agreement-checkbox */}
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
            Login
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default LoginForm;
