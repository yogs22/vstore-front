import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { getGameCategory } from '../services/player.ts';
import { setSignUp } from '../services/auth.ts';

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
  });

  const getGameCategoryAPI = useCallback(async () => {
    const data = await getGameCategory();

    setCategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoryAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form');
    setLocalForm(JSON.parse(getLocalForm));
  }, []);

  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem('user-form');
    const form = JSON.parse(getLocalForm);
    const data = new FormData();

    data.append('file', image);
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('password', form.password);
    data.append('username', form.name);
    data.append('phoneNumber', '081293891231');
    data.append('role', 'user');
    data.append('status', 'Y');
    data.append('favorite', favorite);

    console.log(image, data);
    const result = await setSignUp(data);
  };
  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    {imagePreview
                      ? <img src={imagePreview} width={120} height={120} className="img-upload" alt="img-upload" />
                      : <Image src="/icon/upload.svg" width={120} height={120} className="img-upload" alt="img-upload" />}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
              <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
              <div className="pt-50 pb-50">
                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite
                  Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(event) => setFavorite(event.target.value)}
                >
                  {categories.map((category) => (
                    <option
                      key={category._id}
                      value={category._id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                type="button"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms &
                Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
