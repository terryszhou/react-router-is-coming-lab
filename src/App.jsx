import './App.css'

import { HousePlural } from './components/HousePlural'
import { HouseSingular } from './components/HouseSingular'
import { Member } from './components/Member'

import { gameOfThrones } from './data/gameOfThrones'

export const App = () => {
    return (
        <div>
            <HousePlural/>
            <HouseSingular/>
            <Member/>
        </div>
    )
}