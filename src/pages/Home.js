import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutHandle } from "../store/auth";
import { logout } from "../firebase";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate('/login',{
        replace:true
    })
  };

  if (user) {
    return (
      <div className="max-w-xl mx-auto py-5">
        <h1 className="flex gap-x-4 items-center">
          oturum açık {user.email}
          <button
            onClick={handleLogout}
            className="h-8 rounded px-4 text-sm text-white bg-indigo-700"
          >
            Çıkış yap
          </button>
        </h1>
      </div>
    );
  }

  return (
    <>
      <Link to="/register">Kayıt ol</Link>
      <Link to="/login">Giriş yap</Link>
    </>
  );
}
