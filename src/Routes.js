import React, {Component} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'

import Cart from './components/Cart/Cart'
import Details from './components/Details/Details'
import Landing from './components/Landing/Landing'

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div >
                    <Nav/>
                        <div className="Routes">
                            <Switch >
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/details" component={Details} />
                                <Route render={() => <h2>Page not found!</h2>} />
                            </Switch>
                        </div>
                </div>
            </BrowserRouter>
        )
    }
}
