import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Home({ user, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* FIXED APP BAR */}
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* Botão "+" AGORA À ESQUERDA */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => alert("Adicionar item!")}
          >
            <AddIcon />
          </IconButton>

          {/* TÍTULO CENTRALIZADO */}
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Coronel
          </Typography>

          {/* Logout alinhado à direita */}
          <Button color="inherit" onClick={onLogout}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>


      {/* SCROLLABLE CONTENT */}
      <Box
        flexGrow={1}
        overflow="auto"
        sx={{
          mt: "64px", // espaço do AppBar
          mb: "56px", // espaço do BottomNav
        }}
      >
        <Box className="screen-container" sx={{ p: 2 }}>
          <Outlet />
        </Box>
      </Box>

      {/* FIXED BOTTOM NAV */}
      <BottomNavigation
        showLabels
        value={location.pathname}
        onChange={(e, newValue) => navigate(newValue)}
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <BottomNavigationAction label="Dashboard" value="/home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Histórico" value="/home/history" icon={<HistoryIcon />} />
        <BottomNavigationAction label="Perfil" value="/home/profile" icon={<PersonIcon />} />
        <BottomNavigationAction label="Config" value="/home/settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}
