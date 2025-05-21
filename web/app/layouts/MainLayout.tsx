import Header from "@/components/Header"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default MainLayout
