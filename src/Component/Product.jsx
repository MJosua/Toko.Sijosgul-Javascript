import {
    Input,
    InputGroup,
    InputRightAddon,
    Select,
    Button,
    Image
} from "@chakra-ui/react"
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { MdArrowDropDown } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

function Product() {
    return (
        <div className="col-12  col-md-9  col-lg-8">

            <div className="row  bg-white  sticky-element-40  d-block d-md-none ">
                <div className=" bg-white  py-2">

                    <div className="col-12 d-block d-md-none">
                        <InputGroup
                            size='xs'
                        >
                            <Input placeholder='Search' />
                            <InputRightAddon >
                                <FaSearch />
                            </InputRightAddon>
                        </InputGroup>
                    </div>

                    <div className="col-12 mt-1 d-block d-md-none">
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
                    <div className="col-12">
                        <div className="row ">
                            <div className="col-2 mt-1 d-flex d-md-none">
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
                            <div className="col-10 mt-1 d-flex d-md-none">
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
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-6 col-md-4 col-lg-3 my-2">
                    <div className="card">
                        <Image src='https://bit.ly/dan-abramov' draggable="false" alt='Dan Abramov' />
                        <div className="card-body px-0">
                            <h5 class="card-title px-2">Card title</h5>
                            <p class="card-text px-2">Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="card-footer px-0">
                            <p class="card-price my-0  px-2">Rp.20.000</p>
                            <div className="col-12 px-2">
                                <div className="row  d-flex ">
                                    <div className="col-6 ">
                                        <Button colorScheme='pink' size='xs'
                                            className="w-100"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                    <div className="col-6 ">
                                        <Button colorScheme='blue' size='xs'
                                            className="w-100"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 my-2">
                    <div className="card">
                        <Image src='https://bit.ly/dan-abramov' draggable="false" alt='Dan Abramov' />
                        <div className="card-body px-0">
                            <div className="col-6 label promo">
                                PROMO
                            </div>
                            <h5 class="card-title px-2">Card title</h5>
                            <p class="card-text px-2">Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="card-footer px-0">
                            <p class="card-price my-0  px-2 float-left">
                                Rp. 20.000
                                <span class="discount-price px-2 text-decoration-line-through">
                                    Rp. 50.000
                                </span>
                            </p>

                            <div className="col-12 px-2">
                                <div className="row  d-flex ">
                                    <div className="col-6 ">
                                        <Button colorScheme='pink' size='xs'
                                            className="w-100"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                    <div className="col-6 ">
                                        <Button colorScheme='blue' size='xs'
                                            className="w-100"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 my-2">
                    <div className="card ">
                        <Image src='https://bit.ly/dan-abramov' draggable="false" className="img" alt='Dan Abramov' />
                        <div className="card-body px-0">
                            <div className="col-6 label limited">
                                 LIMITED
                            </div>
                            <h5 class="card-title px-2">Card title</h5>
                            <p class="card-text px-2">Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="card-footer px-0">
                            <p class="card-price my-0  px-2 float-left">
                                Rp. 20.000
                                <span class="discount-price px-2 text-decoration-line-through">
                                    Rp. 50.000
                                </span>
                            </p>

                            <div className="col-12 px-2">
                                <div className="row  d-flex ">
                                    <div className="col-6 ">
                                        <Button colorScheme='pink' size='xs'
                                            className="w-100"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                    <div className="col-6 ">
                                        <Button colorScheme='blue' size='xs'
                                            className="w-100"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 my-2">
                    <div className="card ">
                        <Image src='https://bit.ly/dan-abramov' draggable="false" className="img" alt='Dan Abramov' />
                        <div className="card-body px-0">
                            <div className="col-6 label2 terlaris">
                                 TERLARIS
                            </div>
                            <h5 class="card-title px-2">Card title</h5>
                            <p class="card-text px-2">Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="card-footer px-0">
                            <p class="card-price my-0  px-2 float-left">
                                Rp. 20.000
                                <span class="discount-price px-2 text-decoration-line-through">
                                    Rp. 50.000
                                </span>
                            </p>

                            <div className="col-12 px-2">
                                <div className="row  d-flex ">
                                    <div className="col-6 ">
                                        <Button colorScheme='pink' size='xs'
                                            className="w-100"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                    <div className="col-6 ">
                                        <Button colorScheme='blue' size='xs'
                                            className="w-100"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 my-2">
                    <div className="card ">
                        <Image src='https://bit.ly/dan-abramov' draggable="false" className="img" alt='Dan Abramov' />
                        <div className="card-body px-0">
                            <div className="col-6 label2 terlaris">
                                 TERLARIS
                            </div>
                            <h5 class="card-title px-2">Card title</h5>
                            <p class="card-text px-2">Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="card-footer px-0">
                            <p class="card-price my-0  px-2 float-left">
                                Rp. 20.000
                                <span class="discount-price px-2 text-decoration-line-through">
                                    Rp. 50.000
                                </span>
                            </p>

                            <div className="col-12 px-2">
                                <div className="row  d-flex ">
                                    <div className="col-6 ">
                                        <Button colorScheme='pink' size='xs'
                                            className="w-100"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                    <div className="col-6 ">
                                        <Button colorScheme='blue' size='xs'
                                            className="w-100"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 my-2">
                    <div className="card ">
                        <Image src='https://bit.ly/dan-abramov' draggable="false" className="img" alt='Dan Abramov' />
                        <div className="card-body px-0">
                            <div className="col-6 label2 terlaris">
                                 TERLARIS
                            </div>
                            <h5 class="card-title px-2">Card title</h5>
                            <p class="card-text px-2">Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="card-footer px-0">
                            <p class="card-price my-0  px-2 float-left">
                                Rp. 20.000
                                <span class="discount-price px-2 text-decoration-line-through">
                                    Rp. 50.000
                                </span>
                            </p>

                            <div className="col-12 px-2">
                                <div className="row  d-flex ">
                                    <div className="col-6 ">
                                        <Button colorScheme='pink' size='xs'
                                            className="w-100"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                    <div className="col-6 ">
                                        <Button colorScheme='blue' size='xs'
                                            className="w-100"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 my-2">
                    <div className="card ">
                        <Image src='https://bit.ly/dan-abramov' draggable="false" className="img" alt='Dan Abramov' />
                        <div className="card-body px-0">
                            <div className="col-6 label2 terlaris">
                                 TERLARIS
                            </div>
                            <h5 class="card-title px-2">Card title</h5>
                            <p class="card-text px-2">Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="card-footer px-0">
                            <p class="card-price my-0  px-2 float-left">
                                Rp. 20.000
                                <span class="discount-price px-2 text-decoration-line-through">
                                    Rp. 50.000
                                </span>
                            </p>

                            <div className="col-12 px-2">
                                <div className="row  d-flex ">
                                    <div className="col-6 ">
                                        <Button colorScheme='pink' size='xs'
                                            className="w-100"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                    <div className="col-6 ">
                                        <Button colorScheme='blue' size='xs'
                                            className="w-100"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 my-2">
                    <div className="card ">
                        <Image src='https://bit.ly/dan-abramov' draggable="false" className="img" alt='Dan Abramov' />
                        <div className="card-body px-0">
                            <div className="col-6 label2 terlaris">
                                 TERLARIS
                            </div>
                            <h5 class="card-title px-2">Card title</h5>
                            <p class="card-text px-2">Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="card-footer px-0">
                            <p class="card-price my-0  px-2 float-left">
                                Rp. 20.000
                                <span class="discount-price px-2 text-decoration-line-through">
                                    Rp. 50.000
                                </span>
                            </p>

                            <div className="col-12 px-2">
                                <div className="row  d-flex ">
                                    <div className="col-6 ">
                                        <Button colorScheme='pink' size='xs'
                                            className="w-100"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                    <div className="col-6 ">
                                        <Button colorScheme='blue' size='xs'
                                            className="w-100"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 my-2">
                    <div className="card ">
                        <Image src='https://bit.ly/dan-abramov' draggable="false" className="img" alt='Dan Abramov' />
                        <div className="card-body px-0">
                            <div className="col-6 label2 terlaris">
                                 TERLARIS
                            </div>
                            <h5 class="card-title px-2">Card title</h5>
                            <p class="card-text px-2">Lorem ipsum dolor sit amet</p>

                        </div>
                        <div className="card-footer px-0">
                            <p class="card-price my-0  px-2 float-left">
                                Rp. 20.000
                                <span class="discount-price px-2 text-decoration-line-through">
                                    Rp. 50.000
                                </span>
                            </p>

                            <div className="col-12 px-2">
                                <div className="row  d-flex ">
                                    <div className="col-6 ">
                                        <Button colorScheme='pink' size='xs'
                                            className="w-100"
                                        >
                                            Add to cart
                                        </Button>
                                    </div>
                                    <div className="col-6 ">
                                        <Button colorScheme='blue' size='xs'
                                            className="w-100"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                


            </div>
        </div>
    )
}

export default Product