"use client";
import {Selection} from "@heroui/react";
import {Button, Dropdown, Header, Label} from "@heroui/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SiNushell } from "react-icons/si";


const DropdownCard = ({setTotalPrice, car }) => {

    const [selected, setSelected] = useState(null);
    const [isDriverAdded, setIsDriverAdded] = useState(false)
    const handlePrice = () => {
        if (!isDriverAdded) {
            setTotalPrice(ele => ele + 10)
            setIsDriverAdded(true)
        }
    }
    const removePrice = () => {
        if (isDriverAdded) {
            setTotalPrice(car.dailyRentPrice)
            setIsDriverAdded(false)
        }
    }
    return (
        <Dropdown>
            <Button aria-label="Menu" variant="secondary">
                Select <IoIosArrowDown></IoIosArrowDown>
            </Button>
            <Dropdown.Popover className="min-w-[256px]">
                <Dropdown.Menu
                    selectedKeys={selected}
                    selectionMode="single"
                    onSelectionChange={setSelected}
                >
                    <Dropdown.Section>
                        {/* <Header>Select</Header> */}
                        <Dropdown.Item onPress={() => {handlePrice()}} id="yes" textValue="Yes">
                            <Dropdown.ItemIndicator />
                            <Label>Yes <span className="font-bold">(+$20)</span></Label>
                        </Dropdown.Item>
                        <Dropdown.Item onPress={() => {removePrice()}} id="no" textValue="No">
                            <Dropdown.ItemIndicator />
                            <Label>No</Label>
                        </Dropdown.Item>
                        
                    </Dropdown.Section>
                        
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
};

export default DropdownCard;