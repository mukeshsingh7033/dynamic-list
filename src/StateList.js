import React, { useState } from 'react';
import './StateList.css';  // Import the CSS file

function StateList() {
    const [cars, setCars] = useState(["BMW"]);
    const [bikes, setBikes] = useState(["Hero"]);
    const [players, setPlayers] = useState(["Dhoni"]);

    // Add functions
    function AddCars() {
        let car = document.getElementById('inpCars').value;
        if (car !== '') {
            setCars([...cars, car]);
            document.getElementById('inpCars').value = '';
        } else {
            alert('Please enter a car name');
        }
    }

    function AddBikes() {
        let bike = document.getElementById('inpBikes').value;
        if (bike !== '') {
            setBikes([...bikes, bike]);
            document.getElementById('inpBikes').value = '';
        } else {
            alert('Please enter a bike name');
        }
    }

    function AddPlayers() {
        let player = document.getElementById('inpPlayers').value;
        if (player !== '') {
            setPlayers([...players, player]);
            document.getElementById('inpPlayers').value = '';
        } else {
            alert('Please enter a player name');
        }
    }

    // Delete functions
    function DeleteCar() {
        setCars(cars.slice(0, -1));
    }

    function DeleteBike() {
        setBikes(bikes.slice(0, -1));
    }

    function DeletePlayer() {
        setPlayers(players.slice(0, -1));
    }

    return (
        <div className="center">
            <h2>Manage Cars, Bikes, and Players</h2>

            {/* Cars Section */}
            <div className="section">
                <div className="input-group">
                    <input type='text' id='inpCars' />
                    <button onClick={AddCars}>Add Cars</button>
                    <button onClick={DeleteCar} className="delete-button">Delete Car</button>
                </div>
                <ul>
                    {cars.map((car, index) => <li key={index}>{car}</li>)}
                </ul>
            </div>

            {/* Bikes Section */}
            <div className="section">
                <div className="input-group">
                    <input type='text' id='inpBikes' />
                    <button onClick={AddBikes}>Add Bikes</button>
                    <button onClick={DeleteBike} className="delete-button">Delete Bike</button>
                </div>
                <ul>
                    {bikes.map((bike, index) => <li key={index}>{bike}</li>)}
                </ul>
            </div>

            {/* Players Section */}
            <div className="section">
                <div className="input-group">
                    <input type='text' id='inpPlayers' />
                    <button onClick={AddPlayers}>Add Players</button>
                    <button onClick={DeletePlayer} className="delete-button">Delete Player</button>
                </div>
                <ul>
                    {players.map((player, index) => <li key={index}>{player}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default StateList;