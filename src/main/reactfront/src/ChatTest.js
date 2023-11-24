import './ChatTest.css';

function ChatTest() {
    return (
        <div className="index">
            <div className="wrapper-wrapper">
                <div className="wrapper">
                    <div className="chat-room-wrap">
                        <div className="chat-room-rectangle">
                            <div className="chat-room-title">채팅방</div>
                            <div className="chat-room-list">
                                <div className="chat-room">
                                    <div className="chat-room-header">
                                        <div className="logo">
                                            <img
                                                className="icon-leaf"
                                                alt="Icon leaf"
                                                src="https://cdn.animaapp.com/projects/6525f2dfa92dfedf9e474af1/releases/6560400384f33ca76ac7e5f0/img/---icon--leaf-@2x.png"
                                            />
                                        </div>
                                    </div>
                                    <div className="chat-room-content">
                                        <div className="text-wrapper">오리역 봉사모임 방</div>
                                        <div className="recent-msg">ㅇㅇ : 안녕하세요~~~</div>
                                    </div>
                                    <div className="chat-room-footer">
                                        <div className="recent-msg-time">오전 02 : 52</div>
                                        <div className="unread-alarm">
                                            <div className="overlap-group">
                                                <div className="unread-count">1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className="chat-room-list-line"
                                    alt="Chat room list line"
                                    src="https://cdn.animaapp.com/projects/6525f2dfa92dfedf9e474af1/releases/6560400384f33ca76ac7e5f0/img/chat-room-list-line.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="chat-wrap">
                        <div className="chat-rectangle">
                            <div className="chat-header">
                                <div className="logo-wrap">
                                    <div className="icon-leaf-wrapper">
                                        <img
                                            className="img"
                                            alt="Icon leaf"
                                            src="https://cdn.animaapp.com/projects/6525f2dfa92dfedf9e474af1/releases/6560400384f33ca76ac7e5f0/img/---icon--leaf--1@2x.png"
                                        />
                                    </div>
                                </div>
                                <div className="frame">
                                    <div className="div">오리역 봉사모임 방</div>
                                </div>
                                <img
                                    className="frame-2"
                                    alt="Frame"
                                    src="https://cdn.animaapp.com/projects/6525f2dfa92dfedf9e474af1/releases/6560400384f33ca76ac7e5f0/img/frame-4.svg"
                                />
                            </div>
                            <img
                                className="chat-line"
                                alt="Chat line"
                                src="https://cdn.animaapp.com/projects/6525f2dfa92dfedf9e474af1/releases/6560400384f33ca76ac7e5f0/img/chat-line.svg"
                            />
                            <div className="chat-content-list">
                                <div className="chat-content-others">
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
                                src="https://cdn.animaapp.com/projects/6525f2dfa92dfedf9e474af1/releases/6560400384f33ca76ac7e5f0/img/chat-line.svg"
                            />
                            <div className="chat-input">
                                <div className="chat-input-msg">
                                    <div className="chat-input-text">보낼 텍스트를 입력하세요...</div>
                                </div>
                                <img
                                    className="chat-input-button"
                                    alt="Chat input button"
                                    src="https://cdn.animaapp.com/projects/6525f2dfa92dfedf9e474af1/releases/6560400384f33ca76ac7e5f0/img/chat-input-button.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatTest;