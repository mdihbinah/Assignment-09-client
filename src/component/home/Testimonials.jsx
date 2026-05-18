import { testimonials } from "../../../public/testimonialsData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

    return (
        <div className="w-[90%] mx-auto my-5">
            <h1 className="text-center text-2xl font-bold mb-5">What Our Customer Say?</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    testimonials.map(testimonial => {
                        return <TestimonialCard key={testimonial.id} testimonial={testimonial}></TestimonialCard>
                    })
                }
            </div>
        </div>
    );
};

export default Testimonials;