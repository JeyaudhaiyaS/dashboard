import React from 'react'
import { Box, Grid } from '@mui/material'


const SampleRoute = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={3}>
                Page in Progress
            </Grid>

        </Grid>
    )
}

export default SampleRoute