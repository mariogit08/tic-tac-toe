import { useState } from "react";
export default function Player({ name, symbol, isActive }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function editableName() {
        let input = (<input type="text" required value={playerName} onChange={handleNameChange} />);
        let span = <span className="player-name">{playerName}</span>;
        return isEditing ? input : span;
    }

    function buttonLabel() {
        return isEditing ? "Save" : "Edit";
    }

    function handleEditClick() {
        if (isEditing) {
            setPlayerName(playerName);
        }
        setIsEditing((e) => !e);
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editableName()}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonLabel()}</button>
        </li>
    );
}

