import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../../layouts/Header'

function BuyerLayout() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
        </>
    )
}

export default BuyerLayout