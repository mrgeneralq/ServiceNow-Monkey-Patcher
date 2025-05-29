import { Grid, Typography, Box } from "@mui/material"
import logo from '../assets/logo.png'

export default function AboutPage() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    ServiceNow Monkey Patcher
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        my: 2
                    }}
                >
                    <img src={logo} alt="logo" width={100} style={{ display: "block" }} />
                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{ m: 4 }}>
                    <Typography variant="body1" sx={{ textAlign: "center" }}>
                        This is my text. I created bla bla bla blab blaaaa
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}