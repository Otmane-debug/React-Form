import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    button: {
        margin: 15
    }
}

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const { values: {   firstname, lastname, email, occupaton, city, bio    } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={ firstname }
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={ lastname }
                        />    
                        <ListItem 
                            primaryText="Email"
                            secondaryText={ email }
                        />    
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={ occupaton }
                        />
                        <ListItem                        
                            primaryText="City"
                            secondaryText={ city }
                        />    
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={ bio }
                        />    
                    </List>            
                    <br />
                    <RaisedButton  
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button} 
                        onClick={this.continue}
                    />                    
                    <RaisedButton  
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
