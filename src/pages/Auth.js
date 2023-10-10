import { useContext, useState } from "react";
import { useNavigate } from "react-router";

import Card from "../shared/ui/Card";
import { Input } from "../shared/ui/Input";
import Button from "../shared/ui/Button";
import TextSecondary from "../shared/text/TextSecondary";
import { AccountContext } from "../components/AccountContext";

const Auth = () => {
  const { setUser } = useContext(AccountContext);
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [invalid, setInvalid] = useState(null);

  return (
    <div className="w-full [@media(pointer:coarse)]:p-[12px] mt-[62px] flex justify-center">
      <Card styles="flex flex-col items-center gap-[12px] w-full [@media(hover)]:max-w-[500px]">
        {invalid != null && (
          <p className="font-medium select-none text-[14px] leading-[16.8px] tracking-[-0.013em] mb-[6px] text-red-500">
            {invalid}
          </p>
        )}

        <Input
          value={loginState}
          onChange={(value) => setLoginState(value)}
          label="Ваше имя"
          placeholder="Введите имя"
          maxLength={25}
        />
        <Input
          value={passwordState}
          onChange={(value) => setPasswordState(value)}
          label="Ваш пароль"
          type="password"
          placeholder="Введите пароль..."
          password
          maxLength={25}
        />

        <Button
          text="Регистрация"
          styles="w-full mt-[12px]"
          onClick={() => {
            if (!loginState.length > 0 || !passwordState.length > 0) {
              setInvalid("Все поля обязательны");
              return;
            }

            const vals = { username: loginState, password: passwordState };

            setPasswordState("");
            setLoginState("");
            setInvalid(null);

            fetch(`http://localhost:8000/auth/register`, {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(vals),
            })
              .catch((err) => {
                return;
              })
              .then((res) => {
                if (!res || !res.ok || res.status >= 400) return;
                return res.json();
              })
              .then((data) => {
                if (!data) return;
                setUser({ ...data });
                if (data.status) setInvalid(data.status);
              });
          }}
        />

        <TextSecondary
          text={"Уже есть аккаунт?"}
          styles="font-medium text-[14px] select-none leading-[16.8px] tracking-[-0.013em] mb-[6px]"
        />

        <Button
          text="Вход"
          styles="w-full"
          onClick={() => {
            if (!loginState.length > 0 || !passwordState.length > 0) {
              setInvalid("Все поля обязательны");
              return;
            }

            const vals = { username: loginState, password: passwordState };

            setPasswordState("");
            setLoginState("");
            setInvalid(null);

            fetch(`http://localhost:8000/auth/login`, {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(vals),
            })
              .catch((err) => {
                return;
              })
              .then((res) => {
                if (!res || !res.ok || res.status >= 400) return;
                return res.json();
              })
              .then((data) => {
                if (!data) return;
                setUser({ ...data });
                if (data.status) setInvalid(data.status);
                else if (data.loggedIn) navigate("/feed");
              });
          }}
        />
      </Card>
    </div>
  );
};

export default Auth;
