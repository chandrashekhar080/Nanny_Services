import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ACHForm = () => {
  // 1. State for form data
  const [formData, setFormData] = useState({
    accountHolderName: '',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    accountType: 'Checking / Savings', // Initial selection
  });

  // 2. State for validation errors
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [ispaypal,setIsPayPal]=useState("bankAcc");

  // 3. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 4. Client-side validation logic
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Check Account Holder Name
    if (!formData.accountHolderName.trim()) {
      tempErrors.accountHolderName = 'Account Holder Name is required.';
      isValid = false;
    }

    // Check Bank Name
    if (!formData.bankName.trim()) {
      tempErrors.bankName = 'Bank Name is required.';
      isValid = false;
    }

    // Check Account Number (simple check for digits)
    if (!/^\d+$/.test(formData.accountNumber)) {
      tempErrors.accountNumber = 'Account Number must be digits only.';
      isValid = false;
    }

    // Check Routing Number (must be 9 digits)
    if (!/^\d{9}$/.test(formData.routingNumber)) {
      tempErrors.routingNumber = 'Routing Number must be exactly 9 digits.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // 5. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Validation passed! Process the data.
      console.log('Form data submitted successfully:', formData);
    //   alert('Payment Method Added! (Check console for data)');
      // You would typically send this data to a server here.
    } else {
      console.log('Validation failed:', errors);
      
    }
  };

  // Helper component for input field
  const InputField = ({ label, name, type = 'text', placeholder, error, ...props }) => (
    <div className="flex flex-col">
      <label htmlFor={name} className=" [font-family:'Poppins',Helvetica] text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`px-4 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-pink-500 focus:border-pink-500'
        }`}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="flex  [font-family:'Poppins',Helvetica] items-start justify-center bg-white min-h-full mb-16 mt-10">
      <div className="w-full max-w-7xl m-5 p-8 bg-white border border-gray-200 rounded-lg shadow-xl">
        {/* Header/Back Button */}
        <button className="flex items-center text-gray-600 font-semibold mb-6" onClick={() => navigate(-1)}>
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          <span className="text-sm ">Back</span>
        </button>

        <div className="flex">
          {/* Sidebar Menu */}
          <div className="w-1/4 pr-8">
            <div onClick={() => setIsPayPal("bankAcc")} className={`${ispaypal === "bankAcc" ? " border-l-4 border-[#FF999A] bg-[#fdebeb] text-[#FF999A]" : ""} py-2 px-3 font-medium rounded-r-md cursor-pointer`}>
              Bank Transfer (ACH/Direct Deposit)
            </div>
            <div onClick={() => setIsPayPal("paypal")} className={`${ispaypal === "paypal" ? " border-l-4 border-[#FF999A] bg-[#fdebeb] text-[#FF999A]" : ""} py-2 px-3 font-medium rounded-r-md cursor-pointer`}>
              PayPal
            </div>
            
          </div>

          {/* Main Form Content */}
          <form onSubmit={handleSubmit} className="w-3/4  [font-family:'Poppins',Helvetica] grid grid-cols-2 gap-x-8 gap-y-6">

            {/* Account Holder Name (Full Width) */}
            <div className="col-span-2">
              <InputField
                label="Account Holder Name"
                name="accountHolderName"
                placeholder="Enter Account Holder Name"
                value={formData.accountHolderName}
                onChange={handleChange}
                error={errors.accountHolderName}
              />
            </div>

            {/* Bank Name */}
            <div>
              <InputField
                label="Bank Name"
                name="bankName"
                placeholder="Enter bank name (e.g., Chase, Wells Fargo)"
                value={formData.bankName}
                onChange={handleChange}
                error={errors.bankName}
              />
            </div>

            {/* Account Number */}
            <div>
              <InputField
                label="Account Number"
                name="accountNumber"
                type="text" // Keep as text to handle potential non-digit inputs initially for validation
                placeholder="Enter account number"
                value={formData.accountNumber}
                onChange={handleChange}
                error={errors.accountNumber}
              />
            </div>

            {/* Routing Number */}
            <div>
              <InputField
                label="Routing Number"
                name="routingNumber"
                type="text"
                placeholder="Enter 9-digit routing number"
                maxLength="9"
                value={formData.routingNumber}
                onChange={handleChange}
                error={errors.routingNumber}
              />
            </div>

            {/* Account Type (Dropdown) */}
            <div className="flex flex-col  [font-family:'Poppins',Helvetica]">
              <label htmlFor="accountType" className="text-sm font-medium text-gray-700 mb-1">
                Account Type
              </label>
              <select
                id="accountType"
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition duration-150 ease-in-out cursor-pointer"
              >
                <option>Checking / Savings</option>
                <option value="checking">Checking</option>
                <option value="savings">Savings</option>
              </select>
            </div>

            {/* Buttons (Col Span 2 for alignment) */}
            <div className="col-span-2 flex justify-end space-x-4 mt-6  [font-family:'Poppins',Helvetica]">
              <button
                type="button"
                className="px-6 py-2 text-[#FF999A] border border-[#FF999A] rounded-[12px] hover:bg-gray-50 transition duration-150"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#FF999A] text-white rounded-[12px] hover:bg-[#FF999A] transition duration-150 shadow-md"
              >
                Add Payment Method
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ACHForm;