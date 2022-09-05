import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { UserTypes } from '../../../services/data-types/index.ts';

export default function Auth() {
  const [isBlock, setIsBlock] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
    email: '',
    id: '',
    phoneNumber: '',
    username: '',
  });
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const userPlayer: UserTypes = payload.player;

      const IMG = process.env.NEXT_PUBLIC_UPLOAD;

      userPlayer.avatar = `${IMG}/${userPlayer.avatar}`;
      setUser(userPlayer);
      setIsLogin(true);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/');
    setIsLogin(false);
  };

  const showMenu = () => {
    if (isBlock) {
      setIsBlock(false);
    } else {
      setIsBlock(true);
    }
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={showMenu}
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink" style={{ display: isBlock ? 'block' : 'none' }}>
            <li><Link href="/member"><a className="dropdown-item text-lg color-palette-2">My Profile</a></Link></li>
            <li><Link href="/"><a className="dropdown-item text-lg color-palette-2">Wallet</a></Link></li>
            <li><Link href="/member/edit-profile"><a className="dropdown-item text-lg color-palette-2">Account Settings</a></Link></li>
            <li onClick={onLogout} role="presentation"><a className="dropdown-item text-lg color-palette-2">Log Out</a></li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}
