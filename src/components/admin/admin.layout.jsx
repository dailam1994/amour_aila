import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import LogoutIcon from "@mui/icons-material/Logout"
import AdminRoutes from "./admin.routes"
import Footer from "./admin.footer"

const pages = [
   {
      id: 1,
      title: "Home",
      href: "home",
   },
   {
      id: 2,
      title: "Record",
      href: "record",
   },
   {
      id: 3,
      title: "Settings",
      href: "settings",
   },
]

const AdminLayout = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null)
   const [open, setOpen] = React.useState(true)

   const handleClick = () => {
      setOpen(!open)
   }

   // Handling the open/close of the navbar
   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget)
   }

   const handleCloseNavMenu = () => {
      setAnchorElNav(null)
   }

   // Function to handle the logout feature
   const handleLogout = async () => {
      // Delay feature
      const delay = (ms = 1001) => new Promise((r) => setTimeout(r, ms))
      await delay()

      // Fetch API POST user logout
      await fetch("http://localhost:3333/api/user/logout", {
         method: "POST",
         credentials: "include",
      })
         .then((res) => {
            if (res.status === 200) {
               // Handling the successful logut & refirect
               console.log("Logged out successfully!")
               window.location.href = "http://localhost:3000"
            } else {
               console.log("Error Logging out!")
            }
         })
         .catch((err) => console.log(err))
   }

   return (
      <>
         <AppBar position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Box sx={{ display: "flex" }}>
                     <Link to="/">
                        <IconButton size="large" aria-label="logo" color="inherit">
                           <img src={"/assets/img/Logo.webp"} alt="Logo" height="50" width="50" />
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
                     <Tooltip title="Open menu">
                        <IconButton
                           size="large"
                           aria-label="current menu"
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
                        onClose={handleCloseNavMenu}
                        style={{ position: "absolute" }}>
                        {pages.map((page) => (
                           <Link key={page.id} to={page.href} style={{ margin: 0 }}>
                              <MenuItem onClick={handleCloseNavMenu} style={{ width: "1000px" }}>
                                 <Typography sx={{ ml: "5px" }} align="center" color="primary">
                                    {page.title}
                                 </Typography>
                              </MenuItem>
                           </Link>
                        ))}
                        <Box sx={{ display: "flex", justifyContent: "center", mr: "10px" }}>
                           <Link to="" onClick={handleCloseNavMenu}>
                              <Button
                                 variant="contained"
                                 color="warning"
                                 onClick={handleLogout}
                                 style={{ textTransform: "none" }}>
                                 <LogoutIcon sx={{ mr: "5px" }} />
                                 Sign out
                              </Button>
                           </Link>
                        </Box>
                     </Menu>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
         <AdminRoutes />
         <Footer />
      </>
   )
}

export default AdminLayout
