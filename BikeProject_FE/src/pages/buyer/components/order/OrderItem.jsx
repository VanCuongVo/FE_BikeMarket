import bikes from "../../../../mock/bikes"

export default function OrderItem({ order }) {
    const bike = bikes.find(b => b.id === order.bikeId)

    if (!bike) return null

    return (
        <div className="border rounded-2xl p-6 flex gap-4">
            <img
                src={bike.images[0]}
                alt={bike.title}
                className="w-32 h-24 object-cover rounded-lg"
            />

            <div>
                <h3 className="font-bold">{bike.title}</h3>

                <p className="text-sm text-gray-500">
                    {bike.brand} • {bike.type} • Size {bike.frameSize}
                </p>

                <p className="mt-2 font-semibold text-blue-600">
                    {bike.price.toLocaleString('vi-VN')} đ
                </p>

                <p className="text-sm mt-1">
                    Trạng thái: <b>{order.status}</b>
                </p>
            </div>
        </div>
    )
}
