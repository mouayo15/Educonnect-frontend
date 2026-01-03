import authBgDark from '@/assets/images/auth-bg-dark.jpg';
import authBg from '@/assets/images/auth-bg.jpg';
import logoDark from '@/assets/images/logo-dark.png';
import logoLight from '@/assets/images/logo-light.png';
import PageMeta from '@/components/PageMeta';
import { LuLogOut } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Get user info before clearing for logging
    const userData = localStorage.getItem('user');
    const userRole = localStorage.getItem('userRole');
    let userInfo = null;
    
    try {
      userInfo = userData ? JSON.parse(userData) : null;
    } catch (e) {
      console.warn('Could not parse user data from localStorage');
    }
    
    // Perform complete logout - clear ALL localStorage
    console.log('🧹 LOGOUT: Clearing all localStorage data...');
    localStorage.clear(); // Clear everything instead of individual items
    
    // Dispatch storage event to notify other components (for same-tab updates)
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'userRole',
      oldValue: userRole,
      newValue: null,
      storageArea: localStorage
    }));

    // Add logging for logout
    console.log(`🚪 LOGOUT: User ${userInfo?.email || 'unknown'} (${userRole || 'unknown role'}) logged out at ${new Date().toISOString()}`);
    if (userInfo) {
      console.log('Logged out user details:', userInfo);
    }

    // Optional: Call logout API if needed
    // You can add an API call here to invalidate the token on the server
    
    // Auto-redirect to login after 3 seconds
    const redirectTimer = setTimeout(() => {
      console.log('⏰ AUTO REDIRECT: Redirecting to login page...');
      navigate('/cover-login');
    }, 3000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        console.log(`⏱️ COUNTDOWN: ${prev - 1} seconds remaining...`);
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup timers if component unmounts
    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  return <>
      <PageMeta title="Logout" />
      <div className="h-screen w-full flex justify-center items-center">
        <div className="absolute inset-0">
          <div className="block dark:hidden h-full w-full relative">
            <img src={authBg} alt="background" className="object-cover" />
          </div>
          <div className="hidden dark:block h-full w-full relative">
            <img src={authBgDark} alt="background dark" className="object-cover" />
          </div>
        </div>
        <div className="relative">
          <div className="bg-default-50 rounded-lg w-lg relative">
            <div className="text-center px-10 py-12">
              <Link to="/cover-login" className="flex justify-center">
                <div className="h-6 w-auto relative block dark:hidden">
                  <img src={logoDark} alt="logo dark" className="object-contain" width={111} />
                </div>
                <div className="h-6 w-auto relative hidden dark:block">
                  <img src={logoLight} alt="logo light" width={111} className="object-contain" />
                </div>
              </Link>
              <div className="mt-8 text-center">
                <div className="mb-4">
                  <LuLogOut className="size-6 text-purple-500 mx-auto fill-purple-100" />
                </div>
                <h4 className="mb-2 text-primary text-xl font-semibold">You are Logged Out</h4>
                <p className="mb-8 text-base text-default-500">
                  Thank you for using tailwick admin template. You will be redirected to the login page in {countdown} second{countdown !== 1 ? 's' : ''}.
                </p>
              </div>

              <button 
                onClick={() => navigate('/cover-login')} 
                className="btn bg-primary text-white w-full"
              >
                {countdown > 0 ? `Sign In (${countdown}s)` : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Index;