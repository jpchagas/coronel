import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();   // <--- ADD THIS

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;
    if (mode !== "reset" && !password) return;

    if (mode === "login") {
      console.log("Login:", email, password);
      onLogin({ email });
      navigate("/home");           // <--- AND THIS
    }

    if (mode === "signup") {
      console.log("Signup:", email, password);
      onLogin({ email });
      navigate("/home");           // <--- SAME HERE
    }

    if (mode === "reset") {
      console.log("Password reset request:", email);
      alert("Se este email existir, enviaremos instruções.");
      setMode("login");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      p={2}
      className="screen-container"
    >
      <Paper elevation={3} sx={{ p: 3, width: "100%", maxWidth: 360 }}>
        <Typography variant="h5" align="center" gutterBottom>
          {mode === "login" && "Entrar no Coronel"}
          {mode === "signup" && "Criar Conta"}
          {mode === "reset" && "Recuperar Senha"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {mode !== "reset" && (
            <TextField
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            {mode === "login" && "Entrar"}
            {mode === "signup" && "Criar Conta"}
            {mode === "reset" && "Enviar Reset"}
          </Button>
        </form>

        {/* Troca de telas */}
        <Box mt={2} textAlign="center">
          {mode === "login" && (
            <>
              <Link component="button" onClick={() => (resetFields(), setMode("signup"))}>
                Criar Conta
              </Link>
              <br />
              <Link component="button" onClick={() => (resetFields(), setMode("reset"))}>
                Esqueci minha senha
              </Link>
            </>
          )}

          {mode === "signup" && (
            <Link component="button" onClick={() => (resetFields(), setMode("login"))}>
              Já tenho uma conta
            </Link>
          )}

          {mode === "reset" && (
            <Link component="button" onClick={() => (resetFields(), setMode("login"))}>
              Voltar ao Login
            </Link>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
