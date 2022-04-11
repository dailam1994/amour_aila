import React, { useState, useEffect } from 'react'
import { Typography, Box, Container, Grid } from '@mui/material'
import Cookies from 'js-cookie'

const GuestAbout = () => {
    const [id, setId] = useState(Cookies.get('userId'))
    const [name, setName] = useState(Cookies.get('name'))
    const [role, setRole] = useState(Cookies.get('role'))

    useEffect(() => {
        fetch('https://proj19940827.herokuapp.com/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'set-cookies': { id, name, role }
            },
            credentials: 'include',
        })
            .then(res => res.json())
            .then(json => {
                if (json) {
                    console.log(json)
                } else {
                    console.log('No data')
                }
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ m: '10px' }} variant='h4'>
                    <strong>About US</strong>
                </Typography>
                <img sx={{ m: 0, width: 1, display: 'flex', alignItems: 'center' }}
                    src={"../assets/img/about-selective-focus-half-face-closeup-photography-of-female-s-green-eyes.jpg"}
                    alt="about-selective-focus-half-face-closeup-photography-of-female-s-green-eyes" />
            </Box>
            <Container sx={{ display: 'flex', flexDirection: 'column', borderLeft: "8px solid rgb(50,53,101)" }}>
                <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} style={{ color: 'rgb(0,0,0)' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Container>
            <Grid container spacing={2} sx={{ pb: '5px' }}>
                <Grid item xs={6} style={{ padding: '0px' }}>
                    <img style={{ width: '100%' }}
                        src={"../assets/img/about-close-up-shot-of-pretty-woman-applying-mascara.jpg"}
                        alt="about-close-up-shot-of-pretty-woman-applying-mascara" />
                </Grid>
                <Grid item xs={6} style={{ padding: '0px' }}>
                    <img style={{ width: '100%' }}
                        src={"../assets/img/about-woman-in-black-long-sleeve-shirt-lying-on-bed.jpg"}
                        alt="about-woman-in-black-long-sleeve-shirt-lying-on-bed" />
                </Grid>
            </Grid>
        </>
    )
}

export default GuestAbout