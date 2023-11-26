// import './ChatRoom.css';
import {useState} from "react";

function ChatRoom({ onPrevBtnClick }) {
    // const [roomId, setRoomId] = useState(null);

    return (
        <div className="chat-room-index">
            <div className="chat-room-header">
                <img
                    className="chat-room-prev-btn"
                    alt="Chat room prev btn"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-room-prev-btn.svg"
                    onClick={ onPrevBtnClick }
                />
                <div className="chat-room-title">
                    <div className="text-wrapper">오리역 봉사모임 방</div>
                </div>
                <img
                    className="chat-room-menu"
                    alt="Chat room menu"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-room-menu.svg"
                />
            </div>
            <img
                className="chat-line"
                alt="Chat line"
                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-line.svg"
            />
            <div className="chat-content-list">
                <div className="chat-content-others">
                    <div className="chat-content-user">
                        <div className="div" />
                    </div>
                    <div className="chat-content-others-wrapper">
                        <div className="text-wrapper-2">반갑습니다!!!</div>
                    </div>
                </div>
                <div className="chat-content-me">
                    <div className="chat-content-me-msg">
                        <div className="text-wrapper-2">반갑습니다!!!!!</div>
                    </div>
                </div>
            </div>
            <img
                className="chat-line"
                alt="Chat line"
                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-line-1.svg"
            />
            <div className="chat-input">
                <div className="chat-input-msg">
                    <input className="chat-input-text" placeholder={"보낼 텍스트를 입력하세요..."}></input>
                </div>
                <img
                    className="chat-input-button"
                    alt="Chat input button"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-input-button.svg"
                />
            </div>
        </div>
    );
}

export default ChatRoom;