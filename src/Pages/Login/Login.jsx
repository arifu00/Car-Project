import { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FiInstagram } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error.message);
    })
  };
  return (
    <div>
      <div className="hero mt-12 mb-20 ">
        <div className="hero-content flex-col gap-20 lg:flex-row">
          <div className="lg:w-1/3">
            <img src={loginImg} alt="" className="h-[500px]" />
          </div>
          <div className="w-2/3  lg:px-16 border border-[#D0D0D0] rounded-xl">
            <h1 className="text-4xl text-center text-[#444] lg:pt-12 lg:mb-8 font-semibold">
              Login
            </h1>
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-bold text-[#444]">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="text-base font-normal border border-[#E8E8E8] py-3 rounded-xl pl-4"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-bold text-[#444]">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="text-base font-normal border border-[#E8E8E8] py-3 rounded-xl pl-4"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign In"
                  className="text-xl font-semibold text-white bg-[#FF3811] py-3 mb-5 rounded-lg"
                />
              </div>
              <div className="text-center">
                <span className="text-lg font-medium  text-[#444]">
                  Or Sign In with
                </span>
                <div className="flex gap-4 justify-center items-center mt-7 text-xl font-semibold">
                  <button className="p-4 bg-[#F5F5F8] hover:bg-[#5a5ac5]  hover:text-white rounded-full">
                    <BiLogoFacebook></BiLogoFacebook>
                  </button>
                  <button className="p-4 bg-[#F5F5F8] hover:bg-[#5a5ac5] hover:text-white  rounded-full">
                    <FcGoogle></FcGoogle>
                  </button>
                  <button className="p-4 bg-[#F5F5F8] hover:bg-[#5a5ac5] hover:text-white rounded-full">
                    <FiInstagram></FiInstagram>
                  </button>
                </div>
              </div>
              <div className="text-center text-lg font-normal text-[#737373] my-8 pb-6">
                <p>
                  New Here ?{" "}
                  <NavLink
                    className="text-[#FF3811] font-semibold"
                    to="/register"
                  >
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
