import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Home({ user, onLogout }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", path: "/home" },
    { label: "Histórico", path: "/home/history" },
    { label: "Perfil", path: "/home/profile" },
    { label: "Configurações", path: "/home/settings" },
  ];

  const goTo = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* App Bar FIXA */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Coronel
          </Typography>
          <Button color="inherit" onClick={onLogout}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {menuItems.map((item) => (
              <ListItemButton key={item.path} onClick={() => goTo(item.path)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* CONTEÚDO ROLÁVEL */}
      <Box
        flexGrow={1}
        overflow="auto"
        sx={{
          mt: "64px",       // espaço do AppBar
          mb: "56px",       // espaço do BottomNav
        }}
      >
        <Box className="screen-container" sx={{ p: 2 }}>
          <Outlet />
        </Box>
      </Box>

      {/* Bottom Navigation FIXO no rodapé */}
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
        <BottomNavigationAction
          label="Dashboard"
          value="/home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Histórico"
          value="/home/history"
          icon={<HistoryIcon />}
        />
        <BottomNavigationAction
          label="Perfil"
          value="/home/profile"
          icon={<PersonIcon />}
        />
        <BottomNavigationAction
          label="Config"
          value="/home/settings"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
