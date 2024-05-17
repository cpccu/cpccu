export default function ComingSoon() {
  return (
    <div className="h-[calc(100svh-200px)] flex flex-col items-center justify-center">
      <svg className="animate-spin h-5 w-5 mb-3 bg-gray-700"></svg>

      <h1 className="text-4xl mb-2 text-gray-600">Coming Soon</h1>
      <p className="text-gray-500">
        We're working on something awesome! Stay tuned.
      </p>
    </div>
  );
}
