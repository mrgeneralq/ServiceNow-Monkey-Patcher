import React from "react"
import logo from '../assets/logo.png'
import { useState } from "react"
import BottomMenu from "../components/BottomMenu";
import { Button, Typography } from "@mui/material";
import { CoPresent } from "@mui/icons-material";
import { Grid } from "@mui/material"
import PatchruleList from "../components/PatchruleList";
import { Outlet } from "react-router-dom";


function RuleTabPage() {
    const [rules, setRules] = useState([]);

    return (
        <Grid
            container
            direction="column"
            sx={{ height: '100%' }}
        >
            <Grid item xs={12} sx={{ height: '100%' }}>
                <Outlet context={{ rules, setRules }} />
            </Grid>
        </Grid>
    );
}

export default RuleTabPage;