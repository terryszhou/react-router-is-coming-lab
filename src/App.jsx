import './App.css'
import { useState } from 'react'

import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom'

import { HousePlural } from './components/HousePlural'
import { HouseSingular } from './components/HouseSingular'
import { Member } from './components/Member'
import { Header } from './components/Header'
import { gameOfThrones } from './data/gameOfThrones'

export const App = () => {
    const [GOT] = useState(gameOfThrones)

    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route 
                        exact path="/houses"
                        render={() => <HousePlural gameOfThrones={GOT}/>}
                    />
                    <Route 
                        exact path="/houses/:id"
                        render={props => {
                            const house = GOT.find(e => e.id.toString() === props.match.params.id)
                            props = {...props, ...house}
                            return <HouseSingular {...props} />
                        }}
                    />
                    <Route 
                        path="/houses/:houseId/members/:memberId"
                        render={props => {
                            const house = GOT.find(e => e.id.toString() === props.match.params.houseId)
                            const member = house.people.find(member => member.id.toString() === props.match.params.memberId)
                            props = {...props, ...member}
                            return <Member {...props} />
                        }}
                    />
                </Switch>
            </main>
        </Router>
    )
}