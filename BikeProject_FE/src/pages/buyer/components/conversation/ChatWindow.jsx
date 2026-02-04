function ChatWindow({ conversation }) {
    if (!conversation) {
        return (
            <div className="w-2/3 flex items-center justify-center text-gray-400">
                Chọn một hội thoại để bắt đầu
            </div>
        )
    }

    return (
        <div className="w-2/3 flex flex-col">

            {/* Header */}
            <div className="p-4 border-b font-semibold">
                {conversation.user.name} · {conversation.user.role}
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {conversation.messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`max-w-[70%] px-4 py-2 rounded-lg text-sm
              ${msg.sender === 'buyer'
                                ? 'ml-auto bg-blue-500 text-white'
                                : 'bg-gray-200'
                            }
            `}
                    >
                        {msg.text}
                        <div className="text-xs opacity-70 mt-1">
                            {msg.time}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t">
                <input
                    placeholder="Nhập tin nhắn..."
                    className="w-full border rounded-lg px-3 py-2"
                />
            </div>
        </div>
    )
}

export default ChatWindow
