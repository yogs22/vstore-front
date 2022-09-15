import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Sidebar from '../../components/organisms/Sidebar';
import Input from '../../components/atoms/Input/index';
import { UserTypes, JWTPayloadTypes } from '../../services/data-types/index';
import { updateProfile } from '../../services/member';

interface UserStateTypes {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: any;
}

export default function EditProfile() {
  const [user, setUser] = useState<UserStateTypes>({
    id: '',
    name: '',
    username: '',
    email: '',
    avatar: '',
  });
  const [imagePreview, setImagePreview] = useState('/');
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode<JWTPayloadTypes>(jwtToken);
      const userPlayer : UserTypes = payload.player;

      const IMG = process.env.NEXT_PUBLIC_UPLOAD;

      userPlayer.avatar = `${IMG}/${userPlayer.avatar}`;
      setUser(userPlayer);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();
    data.append('file', user.avatar);
    data.append('name', user.username);

    const response = await updateProfile(data);

    if (response?.error) {
      return toast.error(response.message);
    }

    toast.success('Sukses update profile');
    Cookies.remove('token');
    return router.push('/sign-in');
  };
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="setting" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview === '/' ? (
                      <img src={user.avatar} alt="upload icon" width={90} height={90} style={{ borderRadius: '100%' }} />
                    ) : (
                      <img src={imagePreview} alt="upload icon" width={90} height={90} style={{ borderRadius: '100%' }} />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.username}
                  onChange={(event) => setUser({
                    ...user,
                    username: event.target.value,
                  })}
                />
              </div>
              <div className="pt-30">
                <Input label="Email Address" value={user.email} disabled />
              </div>
              {/* <div className="pt-30">
                <Input label="Phone" name="phone" placeholder="Enter your phone" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>

          </div>

        </div>
      </main>
    </section>

  );
}
