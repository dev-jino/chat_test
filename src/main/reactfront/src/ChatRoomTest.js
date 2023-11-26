import './ChatRoomTest.css';
import { useState } from "react";

function ChatRoomTest({ onPrevBtnClick }) {


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
            <div className="chat-content-list">
                <div className="chat-content-others">
                    <div className="chat-content-user">
                        <div className="div" />
                    </div>
                    <div className="chat-content-user-2">
                        <div className="chat-content-user-wrapper">
                            <div className="chat-content-user-3">홍길동</div>
                        </div>
                        <div className="chat-content-others-wrapper">
                            <div className="text-wrapper-2">반갑습니다!!!</div>
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="chat-content-user-4">오전 10:42</div>
                    </div>
                </div>
                <div className="chat-content-others-2">
                    <div className="chat-content-user-5" />
                    <div className="chat-content-user-6">
                        <div className="chat-content-others-wrapper">
                            <div className="text-wrapper-2">반갑습니다!!!</div>
                        </div>
                    </div>
                    <div className="chat-content-user-7">
                        <div className="chat-content-user-4">오전 10:42</div>
                    </div>
                </div>
                <div className="chat-content-me">
                    <div className="chat-content-user-8">
                        <div className="chat-content-user-9">오전 10:42</div>
                    </div>
                    <div className="chat-content-me-msg">
                        <div className="chat-content-me-text-wrapper">
                            <div className="text-wrapper-2">반갑습니다!!!!!</div>
                        </div>
                    </div>
                </div>
                <div className="chat-content-user-10">
                    <div className="chat-content-user-11">ㅇㅇㅇ님이 입장하셨습니다.</div>
                </div>
            </div>
            <div className="chat-input">
                <div className="chat-input-msg">
                    <div className="chat-input-text">보낼 텍스트를 입력하세요...</div>
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

export default ChatRoomTest;