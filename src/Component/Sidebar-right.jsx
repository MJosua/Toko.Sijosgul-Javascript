import Keranjang from "./Keranjang"

function SidebarRight() {
    return (
        <div className="col-2 col-lg-2 d-none d-lg-block">
            <div className="sticky-element-90">
                <Keranjang />
            </div>
        </div>
    )
}

export default SidebarRight