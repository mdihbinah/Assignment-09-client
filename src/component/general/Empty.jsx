import { FaCarSide } from "react-icons/fa";
import Link from "next/link";

const EmptyData = ({
  title = "No Cars Found",
  description = "Sorry, there is no data available right now.",
  buttonText = "Back To Home",
  buttonLink = "/",
}) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      
      <div className="text-center max-w-md">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-6 rounded-full">
            <FaCarSide className="text-5xl text-blue-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-800">
          {title}
        </h1>

        <p className="mt-3 text-gray-500">
          {description}
        </p>

        <Link href={buttonLink}>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            {buttonText}
          </button>
        </Link>

      </div>

    </div>
  );
};

export default EmptyData;