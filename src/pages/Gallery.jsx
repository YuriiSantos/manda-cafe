import { useState } from "react";
import { X, ChevronRight } from "lucide-react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "restaurant", label: "Restaurant" },
    { id: "food", label: "Food" },
    { id: "cafe", label: "Cafe" },
    { id: "table", label: "Table" },
    { id: "chair", label: "Chair" },
    { id: "plant", label: "Plant" },
    { id: "dinner", label: "Dinner" },
    { id: "drink", label: "Drink" },
  ];

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
      alt: "Ambiente moderno do restaurante",
      category: "restaurant",
      size: "large", // ocupa mais espaço
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      alt: "Prato gourmet com vinho",
      category: "food",
      size: "medium",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",
      alt: "Espaço interno amplo",
      category: "restaurant",
      size: "medium",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      alt: "Salão elegante",
      category: "restaurant",
      size: "large",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800",
      alt: "Decoração com plantas",
      category: "plant",
      size: "tall",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      alt: "Mesa posta elegante",
      category: "dinner",
      size: "medium",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
      alt: "Área externa",
      category: "cafe",
      size: "small",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      alt: "Prato especial",
      category: "food",
      size: "medium",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800",
      alt: "Cadeiras e mesas",
      category: "chair",
      size: "small",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200",
      alt: "Pizza artesanal",
      category: "food",
      size: "large",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800",
      alt: "Drinks especiais",
      category: "drink",
      size: "tall",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800",
      alt: "Mesa de jantar",
      category: "table",
      size: "medium",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-1 md:col-span-2 row-span-2";
      case "tall":
        return "col-span-1 row-span-2";
      case "medium":
        return "col-span-1 row-span-1";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Restaurante</h1>

          {/* Categorias com scroll horizontal */}
          <div className="relative">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
              <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Galeria com Grid Assimétrico */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`${getSizeClasses(
                image.size
              )} relative overflow-hidden rounded-lg cursor-pointer group`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                </div>
              </div>

              {/* Ícone de expandir no canto */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Visualização */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} strokeWidth={2} />
          </button>

          <div className="max-w-6xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-6">
              <p className="text-white text-xl font-medium">
                {selectedImage.alt}
              </p>
              <p className="text-gray-400 text-sm mt-2 uppercase tracking-wider">
                {categories.find((c) => c.id === selectedImage.category)?.label}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
