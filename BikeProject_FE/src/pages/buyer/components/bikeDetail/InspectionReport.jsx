function InspectionReport({ inspection }) {
    return (
        <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold mb-4">✅ Báo cáo kiểm định</h2>

            <p><b>Khung:</b> {inspection.frame}</p>
            <p><b>Phanh:</b> {inspection.brake}</p>
            <p><b>Truyền động:</b> {inspection.drivetrain}</p>

            <p className="text-gray-600 mt-2">{inspection.note}</p>
        </div>
    )
}

export default InspectionReport
