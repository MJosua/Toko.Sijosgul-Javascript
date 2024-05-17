import { FaCartPlus } from 'react-icons/fa';
function Keranjang() {
    return (
        <>
            <div className="card keranjang ">
                <div className="card-header">
                    <span className="fw-bold">
                        Cart
                    </span>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center">
                    <FaCartPlus className='fs-1 text-secondary' style={{opacity:"0.7"}} />
                </div>
                <div className="card-footer">

                </div>
            </div>
        </>
    )
}

export default Keranjang