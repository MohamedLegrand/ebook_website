import React from "react";

function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Catégories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Romans", "Business", "Éducation", "Technologie"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
