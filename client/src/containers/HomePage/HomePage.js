import React, { useState, useEffect } from 'react';
import * as api from '../../api/api';

function HomePage(props) {
    const [roomID, setRoomID] = useState('')

    const handleHostTournament = () => {
        api.startTournament()
    }

    const handleJoinTournament = () => {
        api.joinTournament(roomID)
    }

    return (
        <div>
            <button style={{margin: "50px"}} onClick={handleHostTournament}>
                Host Tournament
            </button>
            <input type="text" onInput={e => setRoomID(e.target.value)} style={{margin: "50px", width: "200px"}}>
            </input>
            <button onClick={handleJoinTournament}>Join Tournament Room</button>
        </div>
    )
}

export default HomePage;