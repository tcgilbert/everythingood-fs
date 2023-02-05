const BlankPage = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div>
        <div className="sticky top-0 z-50 h-96 w-full bg-red-500">1</div>
        <div className="h-96 w-full bg-yellow-400">3</div>
        <div className="h-96 w-full bg-pink-400">2</div>
        <div className="h-96 w-full bg-green-500">4</div>
      </div>
      <div className="h-96 w-full bg-white">4</div>
      <div className="h-96 w-full bg-white">4</div>
      <div className="h-96 w-full bg-white">4</div>
    </div>
  );
};

export default BlankPage;
