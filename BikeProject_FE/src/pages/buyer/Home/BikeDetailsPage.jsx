import { useParams } from "react-router-dom"
import BikeGallery from "../components/bikeDetail/BikeGallery";
import BikeInfo from "../components/bikeDetail/BikeInfo";
import InspectionReport from "../components/bikeDetail/InspectionReport";
import SellerCard from "../components/bikeDetail/SellerCard";
import bikes from "../../../mock/bikes";

function BikeDetailPage() {
    const { id } = useParams()
    const bike = bikes.find(b => b.id == id);
    if (!bike) return <p>Không tiềm thấy xe</p>
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8 space-y-6">
                {/* LEFT */}
                <BikeGallery images={bike.images} />
                <BikeInfo bike={bike} />
                {bike.verified && (
                    <InspectionReport inspection={bike.inspection} />
                )}

            </div>

            {/* RIGHT */}
            <div className="col-span-12 lg:col-span-4">
                <SellerCard seller={bike.seller} price={bike.price} />
            </div>
        </div>
    )

}

export default BikeDetailPage