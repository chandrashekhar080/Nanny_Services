export default function Pagination({ totalPages, currentPage, onChange, totalResults, itemsPerPage = 10 }) {
  const startResult = (currentPage - 1) * itemsPerPage + 1;
  const endResult = Math.min(currentPage * itemsPerPage, totalResults);

  // Calculate which page numbers to show (max 4)
  const getVisiblePages = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, start + 3);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // If we don't have 4 pages, adjust to show more from the beginning
    if (pages.length < 4 && pages[0] > 1) {
      const diff = 4 - pages.length;
      const newStart = Math.max(1, pages[0] - diff);
      pages.unshift(...Array.from({ length: pages[0] - newStart }, (_, i) => newStart + i));
    }

    return pages.slice(0, 4);
  };

  const visiblePages = getVisiblePages();

  const handlePrev = () => {
    if (currentPage > 1) onChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onChange(currentPage + 1);
  };

  return (
    <div className="flex-col md:flex-row flex items-center justify-end gap-5 mt-4 [font-family:'Poppins',Helvetica]">
      <div className="text-sm text-gray-600">
        See more {Math.min(itemsPerPage, totalResults - endResult)} results
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="w-8 h-8 rounded border border-gray-500  flex items-center justify-center text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          ‹
        </button>
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`w-8 h-8 rounded flex items-center justify-center text-sm ${
              currentPage === page
                ? "bg-[#fae3e3] border-[#FF999A] border"
                : "bg-white text-black hover:bg-gray-50 border border-gray-500"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="w-8 h-8 rounded border border-gray-500  flex items-center justify-center text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          ›
        </button>
      </div>
    </div>
  );
}
