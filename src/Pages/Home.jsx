import Header from "../Component/Header"
import Product from "../Component/Product"
import SidebarLeft from "../Component/Sidebar-left"
import SidebarRight from "../Component/Sidebar-right"

function Home() {

    return (
        <>
            <Header />
            <div className=" container-fluid mt-2">
                <div className="row">

                    <SidebarLeft />
                    <Product />
                    <SidebarRight />
                </div>
            </div>
        </>
    )
}

export default Home