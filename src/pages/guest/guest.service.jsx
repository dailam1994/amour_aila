import React, { useState, useEffect } from 'react'
import { Typography, Container, Grid } from '@mui/material';
import Cookies from 'js-cookie'

const GuestService = () => {
    const [id, setId] = useState(Cookies.get('userId'))
    const [name, setName] = useState(Cookies.get('name'))
    const [role, setRole] = useState(Cookies.get('role'))

    const logout = () => {
        fetch('https://proj19940827.herokuapp.com/api/user/logout', {
            method: 'POST',
            credentials: 'include',
        })
            .then(res => {
                if (res.status === 200) {
                    console.log('Logged out successfully!')
                } else {
                    console.log('Error Logging out!')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ m: '10px' }} variant='h4'>
                    <strong onClick={logout}>Services</strong>
                </Typography>
                <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} style={{ color: 'rgb(0,0,0)' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Container>
            <Grid container spacing={3} sx={{ py: '20px' }}>
                <Grid item xs={4} style={{ padding: '0px', margin: '0px' }}>
                    <img style={{ width: '100%', height: '100%' }}
                        src={"../assets/img/service-black-and-silver-box-mod.jpg"}
                        alt="service-black-and-silver-box-mod" />
                </Grid>
                <Grid item xs={4} style={{ padding: '0px', margin: '0px' }}>
                    <img style={{ width: '100%', height: '100%' }}
                        src={"../assets/img/service-red-and-silver-bread-knife.jpg"}
                        alt="service-red-and-silver-bread-knife" />
                </Grid>
                <Grid item xs={4} style={{ padding: '0px', margin: '0px' }}>
                    <img style={{ width: '100%', height: '100%' }}
                        src={"../assets/img/service-woman-in-white-tank-top-wearing-black-sunglasses.jpg"}
                        alt="service-woman-in-white-tank-top-wearing-black-sunglasses" />
                </Grid>
            </Grid>
            <Typography sx={{ m: '10px' }} variant='h4'>
                <strong>Packages</strong>
            </Typography>
            <ul style={{ margin: "10px", borderLeft: "8px solid rgb(50,53,101)" }}>
                <li>Service 1<ul>
                    <li>Item 1</li>
                </ul>
                </li>
                <li>Service 2<ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
                </li>
                <li>Service 3<ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                </li>
                <li>Service 4<ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
                </li>
            </ul>
        </>
    )
}

export default GuestService