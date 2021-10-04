import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";

function useUser() {
  const { token, setToken } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: true });

  const login = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false });
      loginService({ email, password })
        .then((token) => {
          console.log(token);
          window.localStorage.setItem("token", token);
          setState({ loading: false, error: false });
          setToken(token);
        })
        .catch((err) => {
          console.log(err);
          window.localStorage.removeItem("token");
          setState({ loading: false, error: true });
        });
    },
    [setToken]
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem("token");
    setToken(null);
  }, [setToken]);

  return {
    isLogged: Boolean(token),
    isLogginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  };
}

export default useUser;
