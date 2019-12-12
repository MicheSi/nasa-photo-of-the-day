import React, {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function NavBar (props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Menu
          </DropdownToggle>
          <DropdownMenu left>
            <DropdownItem><a href="#">Home</a></DropdownItem>
            <DropdownItem><a href="#">Photo of the Day</a></DropdownItem>
            <DropdownItem><a href="#">Previous Photos</a></DropdownItem>
            <DropdownItem><a href="https://www.nasa.gov/">NASA</a></DropdownItem>
        </DropdownMenu>
        </Dropdown>
    )
}