import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import GuestRoutes from "./guest.routes"
import Footer from "./guest.footer"

const pages = [
   {
      id: 1,
      title: "Home",
      href: "/",
   },
   {
      id: 2,
      title: "About",
      href: "about",
   },
   {
      id: 3,
      title: "Service",
      href: "service",
   },
   {
      id: 4,
      title: "Blog",
      href: "blog",
   },
   {
      id: 5,
      title: "Contact",
      href: "contact",
   },
]

const GuestLayout = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null)

   // Handling of open/close navbar
   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget)
   }

   const handleCloseNavMenu = () => {
      setAnchorElNav(null)
   }

   return (
      <>
         <AppBar position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Box sx={{ display: "flex" }}>
                     <Link to="/">
                        <IconButton size="large" aria-label="logo" color="inherit">
                           <img src={"../assets/img/Logo.webp"} alt="Logo" height="50" width="50" />
                        </IconButton>
                     </Link>
                  </Box>
                  <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                     AmourAila
                  </Typography>

                  <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
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
                           color="inherit">
                           <MenuIcon />
                        </IconButton>
                     </Tooltip>
                     <Menu
                        sx={{ mt: "45px", width: "100%" }}
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                           vertical: "top",
                           horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: "top",
                           horizontal: "right",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}>
                        {pages.map((page) => (
                           <Link key={page.id} to={page.href} style={{ margin: 0 }}>
                              <MenuItem onClick={handleCloseNavMenu} style={{ width: "1000px" }}>
                                 <Typography align="center" color="primary">
                                    {page.title}
                                 </Typography>
                              </MenuItem>
                           </Link>
                        ))}
                        <Box sx={{ display: "flex", justifyContent: "end", m: "10px" }}>
                           <Link to="login" onClick={handleCloseNavMenu}>
                              <Button variant="contained" style={{ textTransform: "none" }}>
                                 Sign in
                              </Button>
                           </Link>
                        </Box>
                     </Menu>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
         <GuestRoutes />
         <Footer />
      </>
   )
}

export default GuestLayout
