import React, { useState } from "react";
import loader from '@monaco-editor/loader';
loader.config({ paths: { vs: '/vs' } });

// Add this block for Chrome extension support
self.MonacoEnvironment = {
  getWorker: function (workerId, label) {
    return new Worker('/vs/base/worker/workerMain.js');
  }
};

import Editor from "@monaco-editor/react";

import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography,
} from "@mui/material";

const objectOptions = ["g_form", "g_user", "GlideAjax"];
const methodOptions = {
    g_form: ["setValue", "getValue", "clearValue"],
    g_user: ["hasRole"],
    GlideAjax: ["getXML", "getAnswer"],
};

export default function EditRulePage() {
    const [rule, setRule] = useState({
        object: "",
        method: "",
        order: 0,
        code: "",
        active: false,
    });

    const methods = methodOptions[rule.object] || [];

    const handleSave = () => {
        // Logic for saving the rule (either creating or updating)
        console.log("Rule saved:", rule);
    };

    return (

        <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
                {rule.object ? "Edit Rule" : "Create Rule"}
            </Typography>

            <Box display="flex" gap={2} alignItems="center" mb={2}>
                <FormControl fullWidth>
                    <InputLabel>Object</InputLabel>
                    <Select
                        value={rule.object || ""}
                        onChange={(e) => setRule({ ...rule, object: e.target.value })}
                        label="Object"
                    >
                        {objectOptions.map((obj) => (
                            <MenuItem key={obj} value={obj}>
                                {obj}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>Method</InputLabel>
                    <Select
                        value={rule.method || ""}
                        onChange={(e) => setRule({ ...rule, method: e.target.value })}
                        label="Method"
                    >
                        {methods.map((m) => (
                            <MenuItem key={m} value={m}>
                                {m}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <TextField
                    label="Order"
                    type="number"
                    value={rule.order}
                    onChange={(e) =>
                        setRule({ ...rule, order: parseInt(e.target.value) })
                    }
                    sx={{ width: 100 }}
                />
            </Box>

            <Editor
                height="200px"
                defaultLanguage="javascript"
                value={rule.code}
                onChange={(value) => setRule({ ...rule, code: value || "" })}
                monacoPath="/vs" // <-- serve monaco locally from /public/vs
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={rule.active}
                        onChange={(e) => setRule({ ...rule, active: e.target.checked })}
                    />
                }
                label="Active"
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{ mt: 2 }}
            >
                Save
            </Button>
        </Box>
    );
}
