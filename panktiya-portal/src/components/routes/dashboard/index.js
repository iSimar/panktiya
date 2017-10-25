import React, { Component } from 'react';
import './styles.css';
import { withCookies } from 'react-cookie';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            loadingShabad: false
        };
    }
    componentDidMount(){
        const userUID = this.props.cookies.get('userUID');
        if (!userUID) {
            // this.props.history.push('/');
            this.setState({ loading: false });
        }
        else {
            this.setState({ loading: false });
        }
    }

    pasteURL(event){
        this.setState({ loadingShabad: true });
        const url = event.target.value;
        if (this.validURL(url)) {

        }
        else{
            this.setState({ loadingShabad: false });
        }
    }

    validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(str);
    }

    render() {
        const loading = (
            <div className="container" >
                <CircularProgress />
            </div>
        );

        let content = loading;

        if (!this.state.loading){

            let cardContent = (
                <Card className="card">
                    <div className="step">
                        <Button 
                            raised 
                            href="http://beta.igurbani.com/search"
                            target="_blank"
                            color="primary">
                            Search shabad here
                        </Button>
                    </div>
                    <div className="step">
                        <TextField
                            id="url"
                            className="urlField"
                            placeholder="Paste shabad page link here..."
                            value={this.state.url}
                            onChange={this.pasteURL.bind(this)}
                        />
                    </div>
                </Card>
            );
            
            if(this.state.loadingShabad){
                cardContent = (
                    <Card className="cardLoading">
                        <CircularProgress />
                    </Card>
                );
            };

            content = (
                <div className="container">
                    
                    {cardContent}
                    <div className="logoutContainer">
                        guest@guest.com
                        <Button color="primary" 
                                className="logoutButton"
                                onClick={() => { this.props.history.push('/'); }}>
                        Logout
                        </Button>
                    </div>
                </div>
            );
        }

        return content;
    }
}

export default withCookies(Dashboard);