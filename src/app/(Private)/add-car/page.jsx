'use client'
import { FieldError, Input, Select, Label, ListBox, TextField, Button, TextArea } from '@heroui/react';


const AddCar = () => {
    const onSubmit = async(e) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const carInfo = Object.fromEntries(formData.entries())
      console.log(carInfo)
      const res = await fetch(`http://localhost:5000/cars`,{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(carInfo)

      })
      const data = await res.json()
      console.log(data);
      return data

    }
    return (
        <div className='p-5 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold text-center'>Add Car</h1>
            <form onSubmit={onSubmit}
            className="p-10 space-y-8 w-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-2xl rounded-xl px-4 py-5">
              {/* Car Name */}
              <div className="md:col-span-2">
                <TextField name="carName" isRequired>
                  <Label>Car Name</Label>
                  <Input placeholder="Bali Paradise" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Brand */}
              <TextField name="brand" isRequired>
                <Label>Car Brand</Label>
                <Input placeholder="Mercedes-Benz" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div className=''>
                <Select
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
              <TextField name="dailyRentPrice" type="dailyRentPrice" isRequired>
                <Label>Rent Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="$90/day"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* seatCapacity */}
              <TextField name="seatCapacity" isRequired>
                <Label>Seat Capacity</Label>
                <Input
                  placeholder="5  / 6 "
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* transmission */}
              <TextField name="transmission" isRequired>
                <Label>transmission</Label>
                <Input
                  placeholder="Automatic / Manual"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* fuelType */}
              <TextField name="fuelType" isRequired>
                <Label>Fuel Type</Label>
                <Input
                  placeholder="Petrol  / Hybrid "
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* pickupLocation */}
              <TextField name="pickupLocation" isRequired>
                <Label>Pickup Location</Label>
                <Input
                  placeholder="Houston, USA"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* availability */}
              <TextField name="availability" isRequired>
                <Label>Availability</Label>
                <Input
                  placeholder="Available "
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* rating */}
              <TextField name="rating" isRequired>
                <Label>rating</Label>
                <Input
                  placeholder="4.5 "
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>


              {/* Image URL*/}
              <div className="md:col-span-2">
                <TextField name="image" isRequired>
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
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe car features..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
            //   isLoading={isPending}
              className="rounded-full w-full bg-blue-600 text-white"
            >
              {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
              Add Destination
            </Button>
          </form>
        </div>
    );
};

export default AddCar;