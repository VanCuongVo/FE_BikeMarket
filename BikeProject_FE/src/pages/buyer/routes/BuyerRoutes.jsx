
import OrdersPage from '../Home/Order'
import BuyerDetails from '../Home/BuyerDetails'
import { Routes, Route, Navigate } from "react-router-dom"
import BuyerLayout from '../layouts/BuyerLayout'
import FavoritesPage from '../Home/Heart'
function BuyerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/buyer" />} />
            <Route path="/buyer" element={<BuyerLayout />}>
                <Route index element={<BuyerDetails />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
            </Route>
        </Routes>

    )
}
export default BuyerRoutes