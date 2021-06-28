import './App.css'
import { useState } from 'react'

import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom'

import { HousePlural } from './components/HousePlural'
import { HouseSingular } from './components/HouseSingular'
import { Member } from './components/Member'
import { gameOfThrones } from './data/gameOfThrones'

export const App = () => {
    const [GOT] = useState(gameOfThrones)

    return (
        <Router>
            <Switch>
                <Route 
                    exact path="/houses"
                    render={() => <HousePlural gameOfThrones={GOT}/>}
                />
                <Route 
                    path="/houses/:id"
                    render={props => {
                        const house = GOT.find(e => e.id.toString() === props.match.params.id)
                        props = {...props, ...house}
                        return <HouseSingular {...props} />
                    }}
                />
                <Route 
                    path="/houses/:houseId/members/:memberId"
                    component={Member}
                />
            </Switch>
        </Router>
    )
}