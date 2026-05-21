'use client'
import { Select, Label, ListBox, SearchField } from '@heroui/react';
import { object } from 'better-auth';
import React from 'react';

const SearchCard = ({setCars}) => {

    const onSearch = async(e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const searched = form.get("search");
        console.log(searched);

        const res = await fetch(`http://localhost:5000/car?search=${searched}`);

            const data = await res.json();

            setCars(data);
        
    }

    const onType = async(e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const type = form.get("carType");
        console.log(type, typeof type);

        const res = await fetch(`http://localhost:5000/car?type=${type}`);

            const data = await res.json();

            setCars(data);
    }

    return (
        <div className='my-5 md:flex justify-around gap-5'>
            <form onSubmit={onSearch} className='flex flex-col lg:flex-row gap-8'>

                <div >
                    <SearchField name="search" className="flex justify-center gap-2 w-full">
                        <Label className={'text-lg font-bold'}>Search</Label>
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input className="" placeholder="Search by Car Name" />
                            <SearchField.ClearButton />
                            <button type='submit' className='btn bg-blue-600 text-white font-bold'>Search</button>
                        </SearchField.Group>
                    </SearchField>
                </div>

            </form>

            <form onSubmit={onType} className='flex flex-col lg:flex-row gap-8'>

                <div>
                    <Select
                        name="carType"
                        className="w-[250px] "
                        placeholder="Select Car Type"
                    >
                        <Label className='font-bold'>Car Type</Label>
                        <div className="">
                            <Select.Trigger className="rounded-lg border border-blue-600">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item  id="Luxury" textValue="Luxury">
                                    Luxury
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="SUV" textValue="SUV">
                                    SUV
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Electric" textValue="Electric">
                                    Electric
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Sports" textValue="Sports">
                                    Sports
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Sedan" textValue="Sedan">
                                    Sedan
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    <button className='btn bg-blue-600 text-white font-bold ml-2'>Filter</button>
                        </div>
                    </Select>
                </div>



            </form>


        </div>
    );
};

export default SearchCard;