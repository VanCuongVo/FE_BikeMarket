
import OrderItem from '../components/order/OrderItem'
import orders from '../../../mock/orders'
import bikes from '../../../mock/bikes'


export default function OrdersPage() {
    const ordersWithBike = orders.map(order => ({
        ...order,
        bike: bikes.find(b => b.id === order.bikeId),
    }))

    return (
        <div className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Đơn mua của tôi</h2>
                <span className="px-3 py-1 rounded-md border text-sm bg-white">
                    {ordersWithBike.length} đơn hàng
                </span>
            </div>
            {ordersWithBike.map(order => (
                <OrderItem key={order.id} order={order} />
            ))}
        </div>
    )
}
