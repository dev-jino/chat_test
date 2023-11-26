import './ChatRoomList.css';
import {useState} from "react";

function ChatRoomList({ onSelectRoom }) {
    // const [selectedChatRoom, setSelectedChatRoom] = useState(null);
    const handleChatOpen = (roomId) => {
        // setSelectedChatRoom(roomId);
        onSelectRoom(1);
    };


    return (
        <div className="chat-room-list-index">
            <div className="chat-room-title">채팅</div>
            <div className="chat-room-list">
                <div className="chat-room" onClick={ handleChatOpen }>
                    <div className="chat-room-header">
                        <div className="logo">
                            <img
                                className="icon-leaf"
                                alt="Icon leaf"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b21e7701c048f8af3edc/img/---icon--leaf-@2x.png"
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
                <div className="chat-room" onClick={ handleChatOpen }>
                    <div className="chat-room-header">
                        <div className="logo">
                            <img
                                className="icon-leaf"
                                alt="Icon leaf"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b21e7701c048f8af3edc/img/---icon--leaf-@2x.png"
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
            </div>
        </div>
    );
}

export default ChatRoomList;