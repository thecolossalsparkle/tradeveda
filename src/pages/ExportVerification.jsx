import { useState } from 'react';
import './ExportDetails.css';

const ExportDetails = () => {
  const [formData, setFormData] = useState({
    exportCountry: '',
    productCategory: '',
    hsCode: '',
    firstTimeExport: ''
  });
  const [searchResult, setSearchResult] = useState(null);

  const productCategories = [
    "Live Animals",
    "Meat and Edible Meat Offal",
    "Fish and Crustaceans",
    "Dairy Produce",
    "Products of Animal Origin",
    "Live Trees and Other Plants",
    "Edible Vegetables",
    "Edible Fruits and Nuts",
    "Coffee, Tea, Mate and Spices",
    "Cereals",
    "Products of the Milling Industry",
    "Oil Seeds and Oleaginous Fruits",
    "Lac, Gums, Resins",
    "Vegetable Plaiting Materials",
    "Fertilizers",
    "Textiles",
    "Electronics",
    "Machinery",
    "Chemicals",
    "Others"
  ];

  const hsCodes = [
    { code: "010121", description: "Live Animals" },
    { code: "020230", description: "Meat and Edible Meat Offal" },
    { code: "040690", description: "Dairy Products" },
    { code: "070310", description: "Vegetables" },
    { code: "090240", description: "Coffee, Tea, Mate, and Spices" },
    { code: "252329", description: "Mineral Products (Cement, Lime, and Stone)" },
    { code: "280429", description: "Inorganic Chemicals" },
    { code: "290230", description: "Organic Chemicals" },
    { code: "310210", description: "Fertilizers" },
    { code: "340211", description: "Soap, Waxes, and Cleaning Products" },
    { code: "392321", description: "Plastics and Plastic Articles" },
    { code: "401110", description: "Rubber and Rubber Articles" },
    { code: "440710", description: "Wood and Wood Products" },
    { code: "480256", description: "Paper and Paperboard" },
    { code: "520100", description: "Cotton" },
    { code: "610910", description: "Knitted or Crocheted Apparel" },
    { code: "620342", description: "Woven Apparel and Clothing Accessories" },
    { code: "640399", description: "Footwear and Parts" },
    { code: "680210", description: "Articles of Stone, Plaster, and Cement" },
    { code: "701090", description: "Glass and Glassware" },
    { code: "730890", description: "Iron and Steel Articles" },
    { code: "820730", description: "Tools, Cutlery, and Hardware" },
    { code: "850110", description: "Electrical Machinery and Equipment" },
    { code: "860719", description: "Railway and Tramway Locomotives and Equipment" },
    { code: "870323", description: "Motor Vehicles and Parts" },
    { code: "900110", description: "Optical, Photographic, Cinematographic Equipment" },
    { code: "901890", description: "Medical and Surgical Instruments" },
    { code: "920710", description: "Musical Instruments" },
    { code: "940360", description: "Furniture and Bedding" },
    { code: "950691", description: "Toys, Games, and Sports Equipment" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = () => {
    // Mock search result - replace with actual API call or data lookup
    const result = {
      requirements: [
        "Import license required",
        "Certificate of Origin needed",
        "Quality certification mandatory",
      ],
      estimatedTime: "2-3 weeks",
      additionalInfo: "Special regulations apply for first-time exporters"
    };
    setSearchResult(result);
  };

  return (
    <div className="page-container">
      <h1>Export Verification Details</h1>
      <div className="content">
        <div className="export-form-container">
          <div className="form-group">
            <label htmlFor="exportCountry">Export Country</label>
            <input
              type="text"
              id="exportCountry"
              name="exportCountry"
              className="form-control"
              placeholder="Enter export destination country"
              value={formData.exportCountry}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="productCategory">Product Category</label>
            <select 
              id="productCategory" 
              name="productCategory"
              className="form-control"
              value={formData.productCategory}
              onChange={handleInputChange}
            >
              <option value="">Select a category</option>
              {productCategories.map((category, index) => (
                <option key={index} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="hsCode">HS Code</label>
            <select 
              id="hsCode" 
              name="hsCode"
              className="form-control"
              value={formData.hsCode}
              onChange={handleInputChange}
            >
              <option value="">Select HS Code</option>
              {hsCodes.map((item, index) => (
                <option key={index} value={item.code}>
                  {item.code} - {item.description}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>First Time Exporting?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="firstTimeExport"
                  value="yes"
                  checked={formData.firstTimeExport === 'yes'}
                  onChange={handleInputChange}
                /> Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="firstTimeExport"
                  value="no"
                  checked={formData.firstTimeExport === 'no'}
                  onChange={handleInputChange}
                /> No
              </label>
            </div>
          </div>

          <button 
            className="search-button" 
            onClick={handleSearch}
            disabled={!formData.exportCountry || !formData.productCategory || !formData.hsCode || !formData.firstTimeExport}
          >
            Verify Export Requirements
          </button>

          {searchResult && (
            <div className="search-results">
              <h3>Export Requirements Summary</h3>
              <ul>
                {searchResult.requirements.map((req, index) => (
                  <li key={index}>
                    <span className="requirement-bullet">•</span> {req}
                  </li>
                ))}
              </ul>
              <p><strong>Estimated Processing Time:</strong> {searchResult.estimatedTime}</p>
              <p><strong>Additional Information:</strong> {searchResult.additionalInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExportDetails; 