import BikePage from "../../pages/buyer/Home/BikePage";


export default function MainLayout() {
    return (
        <main className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
                <BikePage />
            </div>
        </main>
    );
}

