import React, { Component } from 'react';
import './styles.css';
import { withCookies } from 'react-cookie';
import { CircularProgress } from 'material-ui/Progress';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            email: null,
            password: null
        };
    }
    componentDidMount(){
        const userUID = this.props.cookies.get('userUID');
        if (userUID){
            //re-route
        }
        this.setState({ loading: false });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const loading = (
            <div className="container" >
                <CircularProgress />
            </div>
        );

        const loginForm = (
            <Card className="loginCard">
                <h2>Panktiya Selector</h2>
                <TextField
                    required
                    id="email"
                    label="Email Address"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                />
                <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                />
                <Button 
                    raised 
                    color="primary"
                    className="loginButton"
                    onClick={() => { this.props.history.push('/dashboard'); }}>
                    Login
                </Button>
            </Card>
        );

        let content = loading;

        if (!this.state.loading){
            content = loginForm;
        }

        return content;
    }
}

export default withCookies(Login);