import { useLocation, useNavigate } from "react-router";

const ProductDeatils = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          {product.title}
        </h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <button className="mt-6 btn btn-link" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDeatils;
