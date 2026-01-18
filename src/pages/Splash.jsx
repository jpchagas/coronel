import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Splash({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [user, navigate]);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#ffffff"
      textAlign="center"
      p={2}
      className="screen-container"
    >
      <img src="/coronel_logo.png" alt="Coronel Logo" width={180} />
      <Typography variant="h4" mt={2}>
        Coronel
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Monitoramento de Saúde
      </Typography>
    </Box>
  );
}
