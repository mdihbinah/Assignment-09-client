export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <h1 className="text-2xl font-bold text-gray-700">
          Loading...
        </h1>

        <p className="text-gray-500">
          Please wait while we load your content
        </p>

      </div>

    </div>
  );
}