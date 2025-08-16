export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <div className="w-full h-full border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600">Loading about page...</p>
      </div>
    </div>
  )
}