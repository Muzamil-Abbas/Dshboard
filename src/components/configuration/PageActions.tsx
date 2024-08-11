import React from "react";

interface Page {
  name: string;
  subPages: string[];
}

interface PageActionsProps {
  pages: Page[];
}

const PageActions: React.FC<PageActionsProps> = ({ pages }) => {
  const handleAddPageClick = () => {
    alert("You're about to add a new page.");
  };

  return (
    <section className="page-actions-section p-5 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Page Actions</h3>
      <div className="flex flex-wrap justify-between items-start gap-6 section-content">
        {pages.map((page, index) => (
          <div key={index} className="page-group text-center md:text-left">
            <h4 className="text-xl font-semibold text-blue-600">{page.name}</h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {page.subPages.map((subPage, subIndex) => (
                <li key={subIndex} className="text-gray-700">
                  {subPage}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PageActions;
