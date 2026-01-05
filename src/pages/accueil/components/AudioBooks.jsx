import React from "react";

function AudioBooks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Livres Audio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-lg p-4 text-center hover:shadow"
            >
              <div className="h-40 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-semibold">Titre du livre</h3>
              <p className="text-sm text-gray-500">Auteur</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudioBooks;
