import { Heart, Eye } from 'lucide-react'

function BikeCard({ bike }) {
    return (
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            {/* IMAGE */}
            <div className="relative">
                <img
                    src={bike.images?.[0]}
                    alt={bike.title}
                    className="w-full h-56 object-cover"
                />

                {/* Badge kiểm định */}
                {bike.inspected && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                        ✔ Đã kiểm định
                    </span>
                )}

                {/* Heart */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                    <Heart size={16} />
                </button>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-3">
                <h3 className="font-semibold text-base line-clamp-2">
                    {bike.title}
                </h3>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap text-xs">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">
                        {bike.type}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">
                        {bike.condition}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-2">
                    {bike.description}
                </p>

                {/* Price + views */}
                <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">
                        {bike.price.toLocaleString()} đ
                    </span>

                    <span className="flex items-center gap-1 text-gray-400 text-sm">
                        <Eye size={16} />
                        {bike.views}
                    </span>
                </div>

                {/* Button */}
                <button className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90">
                    Xem chi tiết
                </button>
            </div>
        </div>
    )
}
export default BikeCard
