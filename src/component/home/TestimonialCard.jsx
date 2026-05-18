import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { name, role, rating, review, image } = testimonial;

  return (
    <div className="flex flex-col justify-center items-center gap-1 text-center p-6 border-2 border-blue-600 rounded-2xl shadow-md bg-white">
      <Image
        src={image}
        alt={name}
        width={60}
        height={60}
        className="rounded-full object-cover"
      />

      <div className="">
        <h2 className="text-xl font-bold tracking-wider mt-4">{name}</h2>
      <p className="text-gray-500">{role}</p>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 text-yellow-500 mt-3">
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <FaStar key={index} />
          ) : (
            <FaRegStar key={index} />
          )
        )}
      </div>

      <p className="text-gray-700 mt-4">{review}</p>
    </div>
  );
};

export default TestimonialCard;