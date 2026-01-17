import styles from "./Login.module.css";
import { useState, useContext, useEffect } from "react";
import { SessionContext } from "../context/SessionContext";
import { Field } from "@base-ui-components/react/field";
import { Form } from "@base-ui-components/react/form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { toast, Bounce } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router";

export function Login({ value }) {
  // Contexto do Usuário
  const {
    handleSignIn,
    handleSignUp,
    session,
    sessionLoading,
    sessionMessage,
    sessionError,
  } = useContext(SessionContext);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  const [errors, setErrors] = useState({});
  const [mode, setMode] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  useEffect(() => {
    setMode(value);
  }, [value]);

  useEffect(() => {
    if (sessionMessage) {
      toast.success(sessionMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
        style: { fontSize: "1.5rem" },
        theme: localStorage.getItem("theme"),
        transition: Bounce,
      });
    } else if (sessionError) {
      const isEmailNotConfirmed = sessionError === "Email not confirmed";
      const message = isEmailNotConfirmed ? "E-mail não confirmado" : sessionError;
      
      toast[isEmailNotConfirmed ? "info" : "error"](message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
        style: { fontSize: "1.5rem" },
        theme: localStorage.getItem("theme"),
        transition: Bounce,
      });
    }
  }, [sessionMessage, sessionError]);

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    
    if (!formValues.email) newErrors.email = "E-mail é obrigatório";
    if (!formValues.password) newErrors.password = "Senha é obrigatória";
    
    if (mode === "register") {
      if (!formValues.username) newErrors.username = "Nome de usuário é obrigatório";
      if (!formValues.confirmPassword)
        newErrors.confirmPassword = "Confirmação de senha é obrigatória";
      if (formValues.password !== formValues.confirmPassword)
        newErrors.confirmPassword = "As senhas não coincidem";
    }
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (mode === "signin") {
      handleSignIn(formValues.email, formValues.password);
    } else {
      handleSignUp(formValues.email, formValues.password, formValues.username);
    }
    
    setFormValues({
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    });
    setErrors({});
    setShowPassword(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleTogglePassword = () => setShowPassword((show) => !show);

  return (
    <div className={styles.container}>
      <h1>{mode === "signin" ? "Entrar" : "Cadastrar"}</h1>
      <Form
        className={styles.form}
        errors={errors}
        onClearErrors={setErrors}
        onSubmit={handleSubmit}
      >
        <Field.Root name="email" className={styles.field}>
          <Field.Label className={styles.label}>E-mail</Field.Label>
          <Field.Control
            type="email"
            name="email"
            required
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="Digite seu e-mail"
            className={styles.input}
          />
          <Field.Error className={styles.error} />
        </Field.Root>

        {mode === "register" && (
          <Field.Root name="username" className={styles.field}>
            <Field.Label className={styles.label}>Nome de Usuário</Field.Label>
            <Field.Control
              type="text"
              name="username"
              required
              value={formValues.username}
              onChange={handleInputChange}
              placeholder="Digite seu nome de usuário"
              className={styles.input}
            />
            <Field.Error className={styles.error} />
          </Field.Root>
        )}

        <Field.Root name="password" className={styles.field}>
          <Field.Label className={styles.label}>Senha</Field.Label>
          <div className={styles.inputWrapper}>
            <Field.Control
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formValues.password}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
              className={styles.input}
            />
            <button
              type="button"
              className={styles.iconBtn}
              onClick={handleTogglePassword}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              title={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          <Field.Error className={styles.error} />
        </Field.Root>

        {mode === "register" && (
          <Field.Root name="confirmPassword" className={styles.field}>
            <Field.Label className={styles.label}>Confirmar Senha</Field.Label>
            <div className={styles.inputWrapper}>
              <Field.Control
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                required
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirme sua senha"
                className={styles.input}
              />
              <button
                type="button"
                className={styles.iconBtn}
                onClick={handleTogglePassword}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                title={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <Field.Error className={styles.error} />
          </Field.Root>
        )}

        <button
          type="submit"
          className={styles.button}
          disabled={sessionLoading}
        >
          {sessionLoading ? (
            <CircularProgress
              size={24}
              thickness={4}
              sx={{
                color: "var(--primary-contrast)",
                marginLeft: "1rem",
              }}
            />
          ) : mode === "signin" ? (
            "Entrar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </Form>

      {mode === "register" && (
        <button onClick={() => setMode("signin")} className={styles.info}>
          Já tem uma conta? Clique aqui!
        </button>
      )}
      
      {mode === "signin" && (
        <button onClick={() => setMode("register")} className={styles.info}>
          Não tem uma conta? Clique aqui!
        </button>
      )}
    </div>
  );
}