import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import {
  AppBar, Box, Button, Container, IconButton, Menu, MenuItem,
  Toolbar, Tooltip, Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdminLayout from '../admin/admin.layout';
import UserAll from '../../pages/admin/user/user.all'

import GuestHome from '../../pages/guest/guest.home'
import GuestAbout from '../../pages/guest/guest.about'
import GuestService from '../../pages/guest/guest.service'
import GuestBlog from '../../pages/guest/guest.blog';
import GuestContact from '../../pages/guest/guest.contact'
import GuestLogin from '../../pages/guest/guest.login';
import Footer from './guest.footer'

const pages = [
  {
    id: 1,
    title: 'Home',
    href: 'home'
  },
  {
    id: 2,
    title: 'About',
    href: 'about'
  },
  {
    id: 3,
    title: 'Service',
    href: 'service'
  },
  {
    id: 4,
    title: 'Blog',
    href: 'blog'
  },
  {
    id: 5,
    title: 'Contact',
    href: 'contact'
  }
];

const GuestLayout = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" style={{ height: '60px' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex' }}>
              <Link to='home'>
                <IconButton size="large"
                  aria-label="logo"
                  color="inherit">
                  <img sx={{ m: 0, display: 'flex', alignItems: 'center' }} style={{ height: '50px', width: '50px' }}
                    src={"../assets/img/Logo.png"}
                    alt="Logo" />
                </IconButton>
              </Link>
            </Box>
            <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              AmourAila
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              AmourAila
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: '45px', width: '100%' }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <Link key={page.id} to={page.href} style={{ margin: 0 }}>
                    <MenuItem

                      onClick={handleCloseNavMenu}
                      style={{ width: '1000px' }}>
                      <Typography align='center' color='primary'>{page.title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
                <Box sx={{ display: 'flex', justifyContent: 'end', m: '10px' }}>
                  <Link to='login' onClick={handleCloseNavMenu}><Button variant="contained">Login</Button></Link>
                </Box>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/settings" element={<UserAll />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/login" element={<GuestLogin />} />
        <Route path="/contact" element={<GuestContact />} />
        <Route path="/blog" element={<GuestBlog />} />
        <Route path="/service" element={<GuestService />} />
        <Route path="/about" element={<GuestAbout />} />
        <Route path="/home" element={<GuestHome />} />
        <Route path="/" element={<GuestHome />} />
        {/* <Route path="/" element={<GuestHome />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default GuestLayout