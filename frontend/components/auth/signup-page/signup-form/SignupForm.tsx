import { useState } from "react";
import styles from "./SignupForm.module.css";
import { useAccount} from 'wagmi';
import { useForm} from "react-hook-form"
import { UserDetailFormFields } from "./UserDetailFormFields";
import { UserDetail } from "../../../../models/UserDetails";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "w3m-button": {
        className: string
      };
    }
  }
}

const SignupForm = (props: {signupAction: (user: UserDetail) => {}}) => {

  const { handleSubmit, register, getFieldState, formState, unregister } = useForm<UserDetail | any>({mode: "all"});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const account = useAccount({
    onConnect: async (data) => {
      register("address", { value: data.address });
    },
    onDisconnect: () => {
      unregister("address");
    }
  })

  const onSubmit = async(event: any | UserDetail) => {
    delete event[UserDetailFormFields.password_confirmation]
    props.signupAction(event);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <form
      action="#"
      className="user-data-form mt-40 lg-mt-30"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label className={styles.required}>Name</label>
            <input className={`form-control ${(formState.errors[UserDetailFormFields.name]) ? 'is-invalid' : 'is-valid'}`}
              type="text" {...register(UserDetailFormFields.name,
                {
                  required: { value: true, message: "Name is required." },
                  minLength: { value: 4, message: "Minimum length should be 4" },
                  maxLength: 20
                })}
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label className={styles.required}>Email</label>
            <input className={`form-control ${(getFieldState(UserDetailFormFields.email).invalid) ? 'is-invalid' : 'is-valid'}`}
              type="email" {...register(UserDetailFormFields.email,
                {
                  required: { value: true, message: "Email is required." },
                  maxLength: { value: 50, message: "The email should have at most 50 characters" },
                  validate: (value) => {
                    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address"
                  }
                }
              )} />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label className={styles.required}>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`pass_log_id form-control ${(getFieldState(UserDetailFormFields.password).invalid) ? 'is-invalid' : 'is-valid'}`}
              {...register(UserDetailFormFields.password,
                {
                  required: { value: true, message: "Password is required." }
                }
              )}
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
          <div className="input-group-meta mb-25">
            <label className={styles.required}>Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className={`pass_log_id form-control ${(getFieldState(UserDetailFormFields.password_confirmation).invalid) ? 'is-invalid' : 'is-valid'}`}
              {...register(UserDetailFormFields.password_confirmation,
                {
                  required: { value: true, message: "Password is required." },
                  validate: (value, values: UserDetail) => {
                    return values.password === value || "Password confimration must matches"
                  }
                }
              )}
            />
            <span
              className="placeholder_icon"
              onClick={handleToggleConfirmPassword}
            >
              <span className=" d-flex align-items-center">
                {showConfirmPassword ? (
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
          <div className="input-group-meta mb-25">
            <label className={styles.toto}>Wallet address</label>
            <w3m-button className={styles['connect-button']} />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="agree_to_policy" />
              <label htmlFor="agree_to_policy">
                By clicking &quot;SIGN UP&quot; I agree to the Terms and
                Conditions and Privacy Policy.
              </label>
            </div>
          </div>
          {/* /.agreement-checkbox */}
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
            Sign Up
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default SignupForm;
