const conversations = [
    {
        id: 'c1',
        user: {
            name: 'Trần Thị Bình',
            avatar: '/avatar1.jpg',
            role: 'Người bán'
        },
        lastMessage: 'Dạ xe vẫn còn ạ...',
        messages: [
            {
                id: 'm1',
                sender: 'buyer',
                text: 'Xin chào, xe còn không ạ?',
                time: '10:00 02-02'
            },
            {
                id: 'm2',
                sender: 'seller',
                text: 'Dạ xe vẫn còn ạ. Bạn có muốn xem xe không?',
                time: '10:10 02-02'
            }
        ]
    }
]
export default conversations