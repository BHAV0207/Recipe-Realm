import React from "react";

function Page({ page, setPage, totalPages }) {
  const pageDown = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const pageUp = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <div className="flex flex-row p-1 justify-center ">
      <button
        onClick={pageDown}
        className="bg-gray-500 rounded-md p-1 mr-3 font-medium text-center"
        disabled={page === 1}
      >
        Previous
      </button>
      <p className="text-center font-semibold items-center justify-center">
        {page} / {totalPages}
      </p>
      <button
        onClick={pageUp}
        className="bg-gray-500 rounded-md p-1 ml-3 font-medium text-center"
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Page;
