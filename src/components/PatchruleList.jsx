import Box from '@mui/material/Box';
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import { Grid, Typography, Button, Stack } from "@mui/material";
import logo from '../assets/logo.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Router, Link, useNavigate, useOutletContext } from "react-router-dom";

function CustomNoRowsOverlay() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <img src={logo} alt="Logo" style={{ width: 150 }} />
            <Typography variant="h4">No Rules yet!</Typography>
            <Typography variant="body1" sx={{ fontSize: 18, textAlign: "center" }}>
                Let's build your first patch rule!
            </Typography>
        </Box>
    );
}

function CustomFooter({ navigate }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                p: 2,
                borderTop: '1px solid',
                borderColor: 'divider', // MUI theme divider color
                bgcolor: 'background.paper', // match DataGrid background
            }}
        >
            <Button
                color="primary"
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ mr: 2 }}
                onClick={() => {
                    navigate('/rules/edit'); // Use navigate for routing
                }}
            >
                Add Rule
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <GridPagination />
        </Box>
    );
}

function PatchruleList() {
    const { rules, setRules } = useOutletContext();
    const navigate = useNavigate();


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', flex: 1, editable: true },
        { field: 'type', headerName: 'Type', flex: 1, editable: true },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <EditIcon
                        sx={{ cursor: 'pointer', mr: 1 }}
                        onClick={() => {
                            alert(`Edit row ${params.row.id}`);
                        }}
                    />
                    <DeleteIcon
                        sx={{ cursor: 'pointer', color: 'red' }}
                        onClick={() => {
                            alert(`Delete row ${params.row.id}`);
                        }}
                    />
                </Box>
            ),
        },
    ];

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{ width: '100%', height: '100%' }}
        >
            <Grid item sx={{ flexGrow: 1, minHeight: 0 }}>
                <Box sx={{ height: '100%', width: '100%' }}>
                    <DataGrid
                        rows={rules}
                        columns={columns}
                        sx={{ height: '100%', width: '100%' }}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        slots={{
                            noRowsOverlay: CustomNoRowsOverlay,
                            footer: CustomFooter,
                        }}
                        slotProps={{
                            footer: {
                                navigate, // Pass navigate to CustomFooter
                            },
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );

}
export default PatchruleList;