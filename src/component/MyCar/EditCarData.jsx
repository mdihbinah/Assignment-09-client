"use client"
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Input, Label, ListBox, Select, Modal, Surface, TextField, TextArea } from "@heroui/react";
import { BsEnvelope } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

const EditCarData = ({ car }) => {
    const { carName, brand, carType, dailyRentPrice, image, seatCapacity, availability, pickupLocation, rating, transmission, description, bookingCount, fuelType } = car

    const onSubmit = async (e) => {
        // e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const carInfo = Object.fromEntries(formData.entries())
        carInfo.userId = car.userId
        console.log(carInfo)


        const { data: tokenData } = await authClient.token()
        console.log('ttttttttt', tokenData);
        const res = await fetch(`http://localhost:5000/my-added-cars/${car._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(carInfo)
        })
        
    }
    return (
        <Modal>
            <Button ><FaRegEdit />Edit</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BsEnvelope />
                            </Modal.Icon>
                            <Modal.Heading>Edit destination</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-1">
                            <Surface variant="default">
                                <form onSubmit={onSubmit}
                                    className="p-3 space-y-8 w-lg"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl rounded-xl px-4 py-5">
                                        {/* Car Name */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={carName} name="carName" isRequired>
                                                <Label>Car Name</Label>
                                                <Input placeholder="Tesla" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Brand */}
                                        <TextField defaultValue={brand} name="brand" isRequired>
                                            <Label>Car Brand</Label>
                                            <Input placeholder="Mercedes-Benz" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        {/* Category - Updated Select Component */}
                                        <div className=''>
                                            <Select
                                                // defaultValue={carName}
                                                name="carType"
                                                isRequired
                                                className="w-1/2 md:w-full"
                                                placeholder="Select Car Type"
                                            >
                                                <Label>Car Type</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="Luxury" textValue="Luxury">
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
                                            </Select>
                                        </div>

                                        {/* dailyRentPrice */}
                                        <TextField defaultValue={dailyRentPrice} name="dailyRentPrice" type="dailyRentPrice" isRequired>
                                            <Label>Rent Price (USD)</Label>
                                            <Input
                                                type="number"
                                                placeholder="$90/day"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* seatCapacity */}
                                        <TextField defaultValue={seatCapacity} name="seatCapacity" isRequired>
                                            <Label>Seat Capacity</Label>
                                            <Input
                                                placeholder="5  / 6 "
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* transmission */}
                                        <TextField defaultValue={transmission} name="transmission" isRequired>
                                            <Label>transmission</Label>
                                            <Input
                                                placeholder="Automatic / Manual"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* fuelType */}
                                        <TextField defaultValue={fuelType} name="fuelType" isRequired>
                                            <Label>Fuel Type</Label>
                                            <Input
                                                placeholder="Petrol  / Hybrid "
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* pickupLocation */}
                                        <TextField defaultValue={pickupLocation} name="pickupLocation" isRequired>
                                            <Label>Pickup Location</Label>
                                            <Input
                                                placeholder="Houston, USA"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* availability */}
                                        <TextField defaultValue={availability} name="availability" isRequired>
                                            <Label>Availability</Label>
                                            <Input
                                                placeholder="Available "
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* rating */}
                                        <TextField defaultValue={rating} name="rating" isRequired>
                                            <Label>rating</Label>
                                            <Input
                                                placeholder="4.5 "
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>


                                        {/* Image URL*/}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={image} name="image" isRequired>
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/hyundai-tucson.jpg"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <TextField defaultValue={description} name="description" isRequired>
                                                <Label>Description</Label>
                                                <TextArea
                                                    placeholder="Describe car features..."
                                                    className="rounded-3xl"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>


                                    <Button
                                        type="submit"
                                        variant="outline"
                                        className="rounded-full w-full bg-blue-600 text-white"
                                    >
                                        Add Update Car Data
                                    </Button>
                                </form>

                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditCarData;