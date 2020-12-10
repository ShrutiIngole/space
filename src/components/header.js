import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import Welcome from './welcome';
import History from './history';
import Payload from './payload';

import store from '../redux/store';
import '../styles/header.css';

const Header = () => {
    const historyClick = () => {
        axios
            .get("https://api.spacexdata.com/v3/history")
            .then(res=> {
                store.dispatch({
                    type: "HISTORY_DATA",
                    values: res.data
                })
                store.dispatch({
                    type: "PAGE_HISTORY",
                    dataset: res.data,
                    start: 0,
                    end: 2
                })
            })
            .catch(err=>console.log(err))
        store.dispatch({
            type: "GOTO_HISTORY"
        })
    }
    
    const payloadClick = () => {
        axios
            .get("https://api.spacexdata.com/v3/payloads")
            .then(res=> {
                store.dispatch({
                    type: "PAYLOAD_DATA",
                    values: res.data
                })    
                
                store.dispatch({
                    type: "PAGE_PAYLOAD",
                    dataset: res.data,
                    start: 0,
                    end: 2
                })
            })
            .catch(err=>console.log(err))
            store.dispatch({
                type: "GOTO_PAYLOAD"
            })
    }
    
    return (
        <div id="header">
            <Router>
                <span className="tab" id={store.getState().hId} onClick={e=>historyClick(e)}>
                    <Link to="/History">History</Link>
                </span>
                <span className="tab" id={store.getState().pId} onClick={e=>payloadClick(e)}>
                    <Link to="/Payload">Payload</Link>
                </span>
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route path="/History">
                        <History />
                    </Route>
                    <Route path="/Payload">
                        <Payload />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Header;