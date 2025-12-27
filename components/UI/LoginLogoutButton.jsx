import { selectIsAuthenticated } from '@/lib/features/auth/authSelector';
import { setIsAuthenticated } from '@/lib/features/auth/authSlice';
import { logout } from '@/lib/service/authService';
import Link from 'next/link';

const { useDispatch, useSelector } = require('react-redux');

export const LoginLogoutButton = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsAuthenticated);
  const handleLogout = () => {
    logout();
    dispatch(setIsAuthenticated(false));
  };
  return (
    <>
      {!isLogin && (
        <Link
          href="/login"
          className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
        >
          Login
        </Link>
      )}
      {isLogin && (
        <Link
          href="/login"
          onClick={handleLogout}
          className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
        >
          Logout
        </Link>
      )}
    </>
  );
};
