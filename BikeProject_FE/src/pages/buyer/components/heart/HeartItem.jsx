import { Eye, Heart, ShieldCheck, Trash2 } from 'lucide-react'
import React from 'react'

function HeartItem({ bike }) {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">

            {/* IMAGE */}
            <div className="relative h-52">
                <img
                    src={bike.images[0]}
                    alt={bike.title}
                    className="w-full h-full object-cover"
                />

                {/* Đã kiểm định */}
                {bike.verified && (
                    <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <ShieldCheck size={14} />
                        Đã kiểm định
                    </span>
                )}

                {/* Đang bán */}
                <span className="absolute bottom-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Đang bán
                </span>

                {/* Xoá */}
                <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow">
                    <Trash2 size={16} className="text-red-500" />
                </button>
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-1">
                {/* Title */}
                <h3 className="font-semibold text-base mb-2 line-clamp-2">
                    {bike.title}
                </h3>

                {/* Tags */}
                <div className="flex gap-2 mb-2 flex-wrap">
                    <span className="border rounded-full px-2 py-0.5 text-xs">
                        {bike.type}
                    </span>
                    <span className="border rounded-full px-2 py-0.5 text-xs">
                        {bike.condition}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {bike.description || "Xe chất lượng tốt, phù hợp đi làm và dạo phố."}
                </p>

                {/* Price + Views */}
                <div className="flex items-center justify-between mt-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">
                        {bike.price.toLocaleString()} đ
                    </span>

                    <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Eye size={16} />
                        {bike.views}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button className="flex-1 bg-black text-white py-2 rounded-lg text-sm font-medium">
                        Xem chi tiết
                    </button>

                    <button className="w-10 h-10 border rounded-lg flex items-center justify-center">
                        <Heart className="fill-red-500 text-red-500" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HeartItem