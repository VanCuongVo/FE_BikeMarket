
import OrderItem from '../components/order/OrderItem'
import orders from '../../../mock/orders'
import bikes from '../../../mock/bikes'


export default function OrdersPage() {
    const ordersWithBike = orders.map(order => ({
        ...order,
        bike: bikes.find(b => b.id === order.bikeId),
    }))

    return (
        <div className="space-y-6">
            {ordersWithBike.map(order => (
                <OrderItem key={order.id} order={order} />
            ))}
        </div>
    )
}
