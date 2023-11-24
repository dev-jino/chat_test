import './Main.css';
import ChatTest from "./ChatTest";
import React, {useState} from "react";

function Main() {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <button className="myButton" onClick={handleClick}>채팅</button>
            {showPopup && (
                ChatTest()
            )}
        </div>

    );
}

export default Main;