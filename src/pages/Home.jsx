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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useNavigate } from "react-router-dom";

export default function Home({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", path: "/home" },
    { label: "Histórico", path: "/home/history" },
    { label: "Perfil", path: "/home/profile" },
    { label: "Configurações", path: "/home/settings" },
  ];

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Box minHeight="100vh" className="screen-container">
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
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

      {/* Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
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

      {/* Page Content */}
      <Box p={2}>
        <Outlet />
      </Box>
    </Box>
  );
}
