import bikes from "../../../mock/bikes"
import favorites from "../../../mock/favorites"
import FavoritesItem from "../components/favorites/FavoritesItem"


export default function FavoritesPage() {
    const favoriteBikes = favorites.map(favorite => ({
        ...favorite,
        bike: bikes.find(b => b.id === favorite.bikeId),
    }))
    return (
        <div className="max-w-7xl mx-auto px-6 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Xe yêu thích</h1>
                <div className="border rounded-lg px-4 py-2 text-sm bg-white">{favoriteBikes.length} xe</div>
            </div>


            {/* Grid  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteBikes.map(favorite => (
                    <FavoritesItem key={favorite.id} bike={favorite.bike} />
                ))}
            </div>
        </div>
    )
}