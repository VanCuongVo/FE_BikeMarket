

function BikeInfo({ bike }) {
    return (
        <div className="bg-white rounded-xl border p-6">
            <h1 className="text-xl font-bold mb-2">{bike.title}</h1>

            <p className="text-2xl font-bold text-blue-600 mb-4">
                {bike.price.toLocaleString()} đ
            </p>

            <p className="mb-4">{bike.description}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
                <p><b>Hãng:</b> {bike.brand}</p>
                <p><b>Loại:</b> {bike.type}</p>
                <p><b>Khung:</b> {bike.frameSize}</p>
                <p><b>Tình trạng:</b> {bike.condition}</p>
            </div>

        </div>
    )
}

export default BikeInfo