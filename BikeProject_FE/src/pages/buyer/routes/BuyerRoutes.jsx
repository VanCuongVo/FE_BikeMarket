
import { Routes, Route, Navigate } from "react-router-dom"
import BuyerLayout from '../layouts/BuyerLayout'
import BikeDetailPage from '../Home/BikeDetailsPage'
import OrdersPage from "../Home/OrdersPage"
import FavoritesPage from "../Home/FavoritesPage"
import ChatPage from "../Home/ChatPage"
function BuyerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/buyer" />} />
            <Route path="/buyer" element={<BuyerLayout />}>
                <Route index element={<BikeDetailPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="messages" element={<ChatPage />} />

            </Route>
        </Routes>
    )
}
export default BuyerRoutes