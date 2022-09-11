import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { UserTypes } from '../../../services/data-types/index.ts';

export default function Profile() {
  const token = Cookies.get('token');
  const [user, setUser] = useState({
    avatar: '',
    username: '',
    name: '',
    email: '',
  });

  useEffect(() => {
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const userPlayer: UserTypes = payload.player;

      const IMG = process.env.NEXT_PUBLIC_UPLOAD;

      userPlayer.avatar = `${IMG}/${userPlayer.avatar}`;
      setUser(userPlayer);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <img src={user.avatar} width="90" height="90" className="img-fluid mb-20" alt="" />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
