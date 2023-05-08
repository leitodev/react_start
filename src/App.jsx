import './App.css';
import Label from "./components/label";
import Btn from "./components/Btn";
import ShoppingList from "./components/ShoppingList";
import Header from './components/Header.js';

const App = () => {
    return (
        <>
             <Header />
            <Label/>
            <Btn />
            <h1>Angular and React are Friends </h1>
            <ShoppingList />
        </>
    )
}

export default App;
