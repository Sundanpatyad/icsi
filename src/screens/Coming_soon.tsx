

export default function ComingSoon() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          🚧 Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          We’re working hard to bring you something amazing.  
          Stay tuned!
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-800 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
