import React, { Component } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Ship from '../components/Ship';

export class ships extends Component {
    state = {
        ships: null
    }
    componentDidMount() {
        axios.get('/ships')
        .then(res => {
            this.setState({
                ships: res.data
            })
        })
        .catch(err => console.log(err));
    }
    render() {
        let recentShipsMarkup = this.state.ships ? (
            this.state.ships.map((ship) => <Ship key={ship.shipId} ship={ship}/>)
        ) : <p>Loading...</p>
        return (
            <Grid container>
                <Grid item sm={"auto"} xs={"auto"}>
                    {recentShipsMarkup}
                </Grid>
            </Grid>
        )
    }
}

export default ships
