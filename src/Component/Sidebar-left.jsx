import {
    Select,
    Button,
    Input,
    Checkbox

} from "@chakra-ui/react"
import { MdArrowDropDown } from 'react-icons/md';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
function SidebarLeft() {

    return (
        <div className="col-4 col-md-3  col-lg-2 d-none d-md-block">
            <div className="sticky-element-80">
                <span className="fw-bold">
                    Filter
                </span>
                <div className="row mb-3">
                    <div className="col-12 mt-1 ">
                        <Select
                            size='xs'
                            placeholder="Category"
                            icon={<MdArrowDropDown />}
                        >
                            <option value="1" >
                                Elektronik
                            </option>
                        </Select>
                    </div>
                    <div className="col-4 mt-1">
                        <div className="row px-0 ">
                            <div className="col-6">
                                <Button
                                    colorScheme='blue'
                                    size='xs'
                                >
                                    <FaSortAmountDown />
                                </Button>
                            </div>
                            <div className="col-6">
                                <Button
                                    colorScheme='blue'
                                    size='xs'
                                >
                                    <FaSortAmountUp />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 mt-1 ps-3">
                        <Select
                            size='xs'
                            placeholder="Sort By"
                        >
                            <option value="1" >
                                Harga
                            </option>
                        </Select>
                    </div>



                </div>

                <span className="fw-bold ">
                    Range Harga
                </span>

                <div className="row mb-3">

                    <div className="col-4 mt-1">
                        Min
                    </div>
                    <div className="col-8 mt-1 ps-3">
                        <Input size="xs" placeholder=" Rp.-" />
                    </div>

                    <div className="col-4 mt-1">
                        Max
                    </div>
                    <div className="col-8 mt-1 ps-3">
                        <Input size="xs" placeholder=" Rp.-" />
                    </div>


                </div>

                <span className="fw-bold ">
                    Kondisi Barang
                </span>

                <div className="row ">

                    <div className="col-12 mt-1 ms-3 ps-4">
                        <Checkbox
                            iconColor='blue.400'
                            size="sm"
                            spacing={10}
                        >
                            Baru
                        </Checkbox>

                    </div>
                    <div className="col-12 mt-1 ms-3 ps-4">
                        <Checkbox
                            iconColor='blue.400'
                            size="sm"
                            spacing={10}
                        >
                            Second
                        </Checkbox>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SidebarLeft