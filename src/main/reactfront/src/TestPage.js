import './TestPage.css';
import ChatButton from "./ChatButton";

function TestPage() {

    return (
        <div className="test-page-index">
            <div className="div">
                <div className="frame">
                    <div className="frame-2">
                        <div className="frame-3">
                            <div className="div-wrapper">
                                <div className="text-wrapper">방번호</div>
                            </div>
                            <input className="div-2" />
                        </div>
                        <div className="frame-4">
                            <div className="div-wrapper">
                                <div className="text-wrapper">아이디</div>
                            </div>
                            <input className="div-2" />
                        </div>
                        <div className="frame-5">
                            <div className="div-wrapper">
                                <div className="text-wrapper">닉네임</div>
                            </div>
                            <input className="div-2" />
                        </div>
                    </div>
                    <div className="frame-6">
                        <button className="text-wrapper-2">채팅방 참여하기</button>
                    </div>
                </div>
                <div className="frame-7">
                    <div className="frame-2">
                        <div className="frame-3">
                            <div className="div-wrapper">
                                <div className="text-wrapper">방번호</div>
                            </div>
                            <input className="div-2" />
                        </div>
                        <div className="frame-4">
                            <div className="div-wrapper">
                                <div className="text-wrapper">아이디</div>
                            </div>
                            <input className="div-2" />
                        </div>
                        <div className="frame-5">
                            <div className="div-wrapper">
                                <div className="text-wrapper">닉네임</div>
                            </div>
                            <input className="div-2" />
                        </div>
                    </div>
                    <div className="frame-6">
                        <button className="text-wrapper-2">채팅방 생성하기</button>
                    </div>
                </div>
            </div>
            <div className="chat-list-test">

            </div>
            <div className="chat-room-test">
                <div className="chat-room-chat-list">

                </div>
                <input className="chat-input-text-test" type="text"></input>
                <button className="chat-input-button-test" type="button">입력</button>
            </div>

            {/*<ChatButton />*/}
        </div>
    );
}

export default TestPage;