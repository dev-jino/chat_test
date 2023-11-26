
function ChatRoomMenu() {

    return (
        <div className="chat-room-menu-index">
            <div className="chat-menu-header">
                <div className="chat-menu-header-2">대화 상대</div>
                <img
                    className="chat-room-menu"
                    alt="Chat room menu"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-room-menu.svg"
                />
            </div>
            <div className="chat-room-content">
                <div className="div-2">
                    <div className="chat-room-user">
                        <div className="div-3" />
                    </div>
                    <div className="chat-room-user-wrapper">
                        <div className="chat-room-user-2">(나) ㅇㅇㅇ</div>
                    </div>
                </div>
                <div className="div-2">
                    <div className="chat-room-user">
                        <div className="div-3" />
                    </div>
                    <div className="chat-room-user-wrapper">
                        <div className="chat-room-user-2">홍길동</div>
                    </div>
                </div>
            </div>
            <img
                className="chat-room-footer"
                alt="Chat room footer"
                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6562f97de84a8f0e2ca6a731/img/frame-15.svg"
            />
        </div>
    );
}

export default ChatRoomMenu;