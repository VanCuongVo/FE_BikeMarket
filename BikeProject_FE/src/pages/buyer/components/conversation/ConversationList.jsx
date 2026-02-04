function ConversationList({ conversations, onSelect, selectedId }) {
    return (
        <div className="w-1/3 border-r">
            <h2 className="p-4 font-bold">Hội thoại</h2>

            {conversations.map((c) => (
                <div
                    key={c.id}
                    onClick={() => onSelect(c)}
                    className={`p-4 cursor-pointer hover:bg-gray-100
            ${selectedId === c.id ? 'bg-blue-50' : ''}
          `}
                >
                    <div className="font-semibold">{c.user.name}</div>
                    <div className="text-sm text-gray-500 truncate">
                        {c.lastMessage}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ConversationList
