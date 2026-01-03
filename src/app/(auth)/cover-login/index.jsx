import authBgDark from '@/assets/images/auth-bg-dark.jpg';
import authBg from '@/assets/images/auth-bg.jpg';
import logoDark from '@/assets/images/logo-dark.png';
import logoLight from '@/assets/images/logo-light.png';
import IconifyIcon from '@/components/client-wrapper/IconifyIcon';
import PageMeta from '@/components/PageMeta';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import React, { useState } from 'react'; 

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/index'); // or wherever the dashboard is
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
return( <>
      <PageMeta title="Login" />
      <div className="relative h-screen w-full flex justify-center items-center">
        <div className="absolute inset-0">
          <div className="block dark:hidden h-full w-full">
            <img src={authBg} alt="background" className="object-cover" />
          </div>
          <div className="hidden dark:block h-full w-full">
            <img src={authBgDark} alt="background dark" className="object-cover" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="bg-card/70 rounded-lg w-lg relative">
            <div className="text-center px-10 py-12">
              <Link to="/index" className="flex justify-center">
                <div className="h-6 flex dark:hidden relative w-auto">
                  <img src={logoDark} alt="logo dark" className="object-contain" />
                </div>
                <div className="h-6 hidden dark:flex relative w-auto">
                  <img src={logoLight} alt="logo light" className="object-contain" />
                </div>
              </Link>

              <div className="mt-8 text-center">
                <h4 className="mb-2.5 text-xl font-semibold text-primary">Welcome Back !</h4>
                <p className="text-base text-default-500">Sign in to continue to Tailwick.</p>
              </div>

              <form onSubmit={handleSubmit} className="text-left w-full mt-10">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                  <label htmlFor="email" className="block font-medium text-default-900 text-sm mb-2">
                    Username/ Email ID
                  </label>
                  <input type="text" id="email" className="form-input" placeholder="Enter Username or email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-4">
                  <Link to="/cover-reset-password" className="text-primary font-medium text-sm mb-2 float-end">
                    Forgot Password ?
                  </Link>
                  <label htmlFor="Password" className="block font-medium text-default-900 text-sm mb-2">
                    Password
                  </label>
                  <input type="password" id="Password" className="form-input" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <input id="checkbox-1" type="checkbox" className="form-checkbox" />
                  <label className="text-default-900 text-sm font-medium" htmlFor="checkbox-1">
                    Remember Me
                  </label>
                </div>

                <div className="mt-10 text-center">
                  <button type="submit" className="btn bg-primary text-white w-full" disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign In'}
                  </button>
                </div>

                <div className="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0">
                  <h4 className="relative z-1 py-0.5 px-2 inline-block font-medium text-default-600 bg-card">
                    Sign In With
                  </h4>
                </div>

                <div className="flex w-full justify-center items-center gap-2">
                  <Link to="#" className="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                    <IconifyIcon icon={'logos:google-icon'} />
                    Use Google
                  </Link>

                  <Link to="#" className="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                    <IconifyIcon icon={'logos:apple'} className="text-mono" />
                    Use Apple
                  </Link>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-base text-default-500">
                    Don't have an Account ?{' '}
                    <Link to="/cover-register" className="font-semibold underline hover:text-primary transition duration-200">
                      SignUp
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>);
};
export default Index;