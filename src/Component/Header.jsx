import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    InputGroup,
    InputRightAddon,
    Input,
    Button
} from '@chakra-ui/react'

import {
    HamburgerIcon,
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon,
} from '@chakra-ui/icons'
import { BiCart } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
function Header() {

    return (
        <div className="col-12 header sticky-top bg-info d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 col-md-3  col-lg-2 fw-bold text-light d-flex align-items-center  justify-content-start justify-content-md-center justify-content-lg-start  user-select-none pointer">
                        <div className='header-border'>
                            <button className='header-title px-2 d-flex justify-content-center' style={{fontSize:"15px"}}>
                                TOKO SIJOSGUL
                            </button>
                        </div>

                    </div>
                    <div className="col-0 col-md-7  pe-md-5 col-lg-8 d-flex align-items-center d-none d-md-flex">
                        <InputGroup
                            size='xs'
                        >
                            <Input className='w-100 ' placeholder='Search' bg="white"/>
                            <InputRightAddon >
                                <FaSearch />
                            </InputRightAddon>
                        </InputGroup>
                    </div>
                    <div className="col-6 col-md-2 col-lg-2  d-flex justify-content-end d-flex align-items-center d-flex align-items-center">

                        <Menu >
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<BiCart />}
                                className='mx-1'
                                size='xs'
                            />
                        </Menu>



                        <div className='mx-2 d-none d-lg-block'>
                            <Button colorScheme='pink' size='xs'>
                                Register
                            </Button>
                        </div>
                        <span className='d-none d-lg-block'>|</span>
                        <div className='mx-2 d-none d-lg-block'>
                            <Button colorScheme='dark' size='xs' variant="outline" className='px-2'>
                                Login
                            </Button>
                        </div>

                        <Menu >
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon  />}
                                className='d-flex d-lg-none mx-1'
                                size='xs'
                            />
                            <MenuList>
                                <MenuItem icon={<AddIcon />} command='⌘T'>
                                    Login / Register
                                </MenuItem>
                                <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                                    Help
                                </MenuItem>
                            </MenuList>
                        </Menu>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header