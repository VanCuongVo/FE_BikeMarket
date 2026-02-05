import { CalendarDays, Eye, Package, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"
import bikes from "../../../../mock/bikes"

export default function OrderItem({ order }) {
    const navigate = useNavigate()

    const bike = bikes.find((b) => b.id === order.bikeId)
    if (!bike) return null

    const statusColor = {
        "Hoàn thành": "bg-green-100 text-green-700",
        "Đang xử lý": "bg-yellow-100 text-yellow-700",
        "Đang chờ": "bg-yellow-100 text-yellow-700",
        "Đã huỷ": "bg-red-100 text-red-700",
    }

    const sellerNames = {
        u2: "Phạm Thu Hà",
        u3: "Nguyễn Hoàng Anh",
        u4: "Lê Thị Bích",
        u5: "Trần Văn Quân",
        u6: "Võ Minh Đức",
        u7: "Đặng Thảo Nhi",
    }

    const formatDate = (value) => {
        if (!value) return "Chưa hoàn thành"
        return new Date(value).toLocaleDateString("vi-VN")
    }

    return (

        <div className="border rounded-2xl p-8 bg-white space-y-4">
            {/* ===== HEADER ===== */}
            <div className="flex gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                    <Package size={16} className="text-gray-500" />
                    <span className="font-semibold text-sm">Đơn hàng #{order.id}</span>
                    <span
                        className={`text-xs px-2 py-0.5 rounded ${statusColor[order.status] || "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {order.status}
                    </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                        <CalendarDays size={14} /> {formatDate(order.orderDate)}
                    </span>
                    <span className="flex items-center gap-1">
                        <CalendarDays size={14} /> Hoàn thành: {formatDate(order.completedDate)}
                    </span>
                </div>
            </div>

            {/* ===== ITEM ===== */}
            <div className="flex gap-4 lg:flex-row lg:items-start">
                <div className="flex gap-4 flex-1">
                    <img
                        src={bike.images?.[0]}
                        alt={bike.title}
                        className="w-28 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                        <h3 className="font-bold text-sm">{bike.title}</h3>

                        <p className="text-xs text-gray-500 mt-0.5">
                            {bike.brand} - {bike.type}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span className="text-[11px] px-2 py-0.5 rounded-full border text-gray-600">
                                {bike.condition}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 rounded-full border text-gray-600">
                                {bike.frameSize || "One Size"}
                            </span>
                        </div>

                        <p className="mt-2 text-xs text-gray-600">
                            Người bán: <span className="font-medium text-gray-900">{sellerNames[bike.sellerId] || "Đang cập nhật"}</span>
                        </p>
                    </div>
                </div>

                <div className="min-w-[170px] lg:text-right space-y-1 text-xs">
                    <p className="text-gray-500">Tổng tiền</p>
                    <p className="font-semibold text-blue-600">
                        {order.payment?.total?.toLocaleString("vi-VN")} đ
                    </p>
                    <p className="text-gray-500">Đã đặt cọc</p>
                    <p className="font-semibold text-green-600">
                        {order.payment?.deposit?.toLocaleString("vi-VN")} đ
                    </p>
                </div>
            </div>

            {/* ===== ACTIONS ===== */}
            <div className="flex gap-3 pt-3 border-t">
                <button
                    onClick={() => navigate(`/orders/${order.id}`)}
                    className="flex items-center gap-1 border px-3 py-1 rounded text-sm hover:bg-gray-50"
                >
                    <Star size={16} /> Đánh giá người bán
                </button>

                <button
                    onClick={() => navigate(`/buyer/bikes/${bike.id}`)}
                    className="flex items-center gap-1 border px-3 py-1 rounded text-sm hover:bg-gray-50"
                >
                    <Eye size={16} /> Xem chi tiết xe
                </button>
            </div>
        </div>
    )
}
