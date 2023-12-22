import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const [logInError, setLogInError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLogInError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        console.log(result);
        setSuccess("User Logged in Successfully.");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLogInError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        setSuccess("User Logged in Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLogInError(error.message);
      });
  };
  // const handlegithunSignIn = () => {
  //   githubSignIn()
  //     .then((result) => {
  //       console.log(result.user);
  //       setSuccess("User Logged in Successfully");
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       setLogInError(error.message);
  //     });
  // };
  // GitHub provider


  return (
    <div>
      <div className="hero bg-lime-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Provide Valid Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Login</button>
              </div>
            </form>
            <div className="text-center">
              {logInError && <p className="text-red-700">{logInError}</p>}
              {success && <p className="text-green-600">{success}</p>}
              <div className="flex justify-center mt-5">
                <hr className="w-12 mt-4 " />
                <hr className="w-12 mt-4 " />
                <p className="mx-4">or</p> <hr className="w-12 mt-4" />
                <hr className="w-12 mt-4 " />
              </div>
              <div className=" justify-center">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-ghostflex gap-3 my-5"
                >
                  <FcGoogle />
                  <p className="text-green-600">Continue with Google</p>
                </button>

              </div>
              <p className="ml-2 mb-5">
                New to this site? Please{" "}
                <Link to="/register">
                  <button className="btn btn-link">Register</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
