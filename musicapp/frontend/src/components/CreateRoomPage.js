import React, { Component } from 'react';
import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Link } from "react-router-dom";
import { Radio, RadioGroup } from '@material-ui/core';
import { FormControl,FormControlLabel } from '@material-ui/core';
// import { ThemeProvider } from '@mui/material/styles';




export default class CreateRoomPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <MuiThemeProvider muiTheme={getMuiTheme()}>
            // <p>This is create room page</p>
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        Create A Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div align="center">
                                Guest Control of Playback State
                            </div>
                        </FormHelperText>
                        <RadioGroup row defaultValue="true">
                            <FormControlLabel
                                value="true"
                                control={<Radio color="primary" />}
                                label="Play/Pause"
                                labelPlacement="bottom"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}