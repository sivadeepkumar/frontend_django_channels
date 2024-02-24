import Message from "./Message"

const ChatArea = () => {
    return (
    <div className="chat-area">
        <div className="chat-header">

        </div>
            <div className="messages">
                <Message text="Hey , how's it going" sent={true}/>
                <Message text="I am good" sent={false} />

            </div>
    </div>
    )
}

export default ChatArea