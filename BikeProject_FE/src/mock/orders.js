const orders = [
    {
        id: 'o1',
        title: 'Xe đạp địa hình Giant ATX 830',
        buyerId: 'u1',
        sellerId: 'u2',
        bikeId: 'b1',
        status: 'Hoàn thành',
        orderDate: '2026-01-25',
        completedDate: '2026-01-28',
        payment: {
            total: 12500000,
            deposit: 2000000,
            method: 'Chuyển khoản',
            status: 'Đã thanh toán',
        },
    },
    {
        id: 'o2',
        title: 'Xe đạp đua Merida Reacto 4000',
        buyerId: 'u1',
        sellerId: 'u5',
        bikeId: 'b3',
        status: 'Đang chờ',
        orderDate: '2026-02-02',
        completedDate: null,
        payment: {
            total: 35000000,
            deposit: 0,
            method: 'COD',
            status: 'Chưa thanh toán',
        },
    },
    {
        id: 'o3',
        title: 'Xe đạp mini Asama trẻ em',
        buyerId: 'u1',
        sellerId: 'u4',
        bikeId: 'b5',
        status: 'Đã huỷ',
        orderDate: '2026-01-22',
        completedDate: null,
        payment: {
            total: 9800000,
            deposit: 1000000,
            method: 'Chuyển khoản',
            status: 'Hoàn tiền',
        },
    },
]

export default orders
