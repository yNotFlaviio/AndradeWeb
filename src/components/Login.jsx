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
        style: { fontSize: "1.2rem" },
        theme: localStorage.getItem("theme"),
        transition: Bounce,
      });
    } else if (sessionError) {
      const message = sessionError === "Email not confirmed" ? "E-mail não confirmado" : sessionError;
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        style: { fontSize: "1.2rem" },
        theme: localStorage.getItem("theme"),
        transition: Bounce,
      });
    }
  }, [sessionMessage, sessionError]);

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    
    if (!formValues.email) newErrors.email = "Obrigatório";
    if (!formValues.password) newErrors.password = "Obrigatório";
    
    if (mode === "register") {
      if (!formValues.username) newErrors.username = "Obrigatório";
      if (formValues.password !== formValues.confirmPassword)
        newErrors.confirmPassword = "Senhas diferentes";
    }
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (mode === "signin") {
      handleSignIn(formValues.email, formValues.password);
    } else {
      handleSignUp(formValues.email, formValues.password, formValues.username);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        {/* CABEÇALHO CINZA IGUAL AO PROTÓTIPO */}
        <div className={styles.topHeader}>
          {mode === "signin" ? "TELA DE LOGIN" : "TELA DE CADASTRO"}
        </div>

        <Form className={styles.form} errors={errors} onSubmit={handleSubmit}>
          
          <Field.Root name="email" className={styles.field}>
            <Field.Label className={styles.label}>EMAIL:</Field.Label>
            <Field.Control
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className={styles.input}
            />
          </Field.Root>

          {mode === "register" && (
            <Field.Root name="username" className={styles.field}>
              <Field.Label className={styles.label}>NOME DE USUÁRIO:</Field.Label>
              <Field.Control
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleInputChange}
                className={styles.input}
              />
            </Field.Root>
          )}

          <Field.Root name="password" className={styles.field}>
            <Field.Label className={styles.label}>SENHA:</Field.Label>
            <div className={styles.inputWrapper}>
              <Field.Control
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                className={styles.input}
              />
              <button
                type="button"
                className={styles.iconBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon size={20}/> : <EyeIcon size={20}/>}
              </button>
            </div>
          </Field.Root>

          {mode === "register" && (
            <Field.Root name="confirmPassword" className={styles.field}>
              <Field.Label className={styles.label}>CONFIRMAR SENHA:</Field.Label>
              <Field.Control
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                className={styles.input}
              />
            </Field.Root>
          )}

          <button onClick={() => setMode(mode === "signin" ? "register" : "signin")} type="button" className={styles.toggleMode}>
            {mode === "signin" ? "NÃO TEM CONTA? CADASTRE-SE" : "JÁ TEM CONTA? ENTRAR"}
          </button>

          <button type="submit" className={styles.submitBtn} disabled={sessionLoading}>
            {sessionLoading ? <CircularProgress size={24} color="inherit" /> : (mode === "signin" ? "ENTRAR" : "CADASTRAR")}
          </button>
        </Form>
      </div>
    </div>
  );
}