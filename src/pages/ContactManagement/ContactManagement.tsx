import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  category: string;
}

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);

const ContactManagement: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    category: "Personal",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.notes.trim()) {
      errors.notes = "Notes are required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      console.log("Validation errors:", errors);
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <div className="lg:p-6 w-full flex flex-col overflow-y-auto">
      <header className="text-gray-700 mb-4">
        <h2 className="text-2xl font-semibold">Contact Management</h2>
        <p className="text-lg">
          Manage and configure your contact details here.
        </p>
      </header>
      <main className="flex flex-col gap-5 ">
        <section className="bg-white rounded-lg shadow-md p-2 lg:p-6">
          <h3 className="text-xl font-semibold border-b-2 border-teal-600 pb-2">
            Contact List
          </h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-4 text-lg">
              <strong>John Doe</strong> - johndoe@example.com
            </li>
            <li className="mb-4 text-lg">
              <strong>Jane Smith</strong> - janesmith@example.com
            </li>
            <li className="mb-4 text-lg">
              <strong>Robert Johnson</strong> - robertjohnson@example.com
            </li>
          </ul>
        </section>

        <section className="w-full bg-white border border-gray-300 rounded-lg shadow-md p-2.5 lg:p-6">
          <h3 className="text-2xl text-blue-600 mb-6 text-center">
            Add New Contact
          </h3>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="flex flex-col w-full  ">
              <label htmlFor="firstName" className="text-gray-700 mb-1">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastName" className="text-gray-700 mb-1">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phone" className="text-gray-700 mb-1">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone}</p>
              )}
            </div>

            <div className="flex flex-col col-span-2">
              <label htmlFor="address" className="text-gray-700 mb-1">
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded resize-vertical min-h-[100px]"
              />
              {errors.address && (
                <p className="text-red-600 text-sm">{errors.address}</p>
              )}
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="notes" className="text-gray-700 mb-1">
                Notes:
              </label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Enter additional notes"
                value={formData.notes}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded resize-vertical min-h-[100px]"
              />
              {errors.notes && (
                <p className="text-red-600 text-sm">{errors.notes}</p>
              )}
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="category" className="text-gray-700 mb-1">
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded col-span-2 hover:bg-blue-700"
            >
              Add Contact
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactManagement;
