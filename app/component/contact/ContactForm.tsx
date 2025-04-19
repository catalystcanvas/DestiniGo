"use client";

import { useState } from "react";


export default function ContactForm() {
  // const [countries, setCountries] = useState<string[]>([]);
  // const [ieltsCleared, setIeltsCleared] = useState<string>("");
  // const [boards, setBoards] = useState<string[]>([]); // For 10th & 12th boards
  // const [universities, setUniversities] = useState<string[]>([]);
  const [board10, setBoard10] = useState("");
  const [board12, setBoard12] = useState("");
  // const [selectedCountry, setSelectedCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // const [satCleared, setSatCleared] = useState<string>("");
  // const [satScore, setSatScore] = useState<string>("");
  // const [examType, setExamType] = useState<string>("");
  // const [examScore, setExamScore] = useState<string>("");
  // const [otherUniversity, setOtherUniversity] = useState<string>("");
  // const [selectedUniversity, setSelectedUniversity] = useState<string>("");

  
  const [formData, setFormData] = useState({
    name: "",
  guardianName: "",
  mobile: "",
  email: "",
  address: "",
  year10: "",
  board10: "",
  percentage10: "",
  year12: "",
  stream12: "",
  subject12: "",
  board12: "",
  percentage12: "",
  yearGrad: "",
  university: "",
  subjectGrad: "",
  courseGraduation: "",
  percentageGrad: "",
  course: "",
  preferredCountry: "",
  specificEuropeCountry: "",
  ieltsCleared: "",
  ieltsScore: "",
  satCleared: "",
  satScore: "",
  examType: "",
  examScore: "",
  });
  
  
  // Handle input changes with validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Allow only 4-digit numbers for year fields
    if (name.includes("year") && !/^\d{0,4}$/.test(value)) return;
    
    // Allow only values between 1-100 for percentage (max 4 characters including decimals)
    if (name.includes("percentage") && !/^(\d{1,3}(\.\d{0,1})?)?$/.test(value)) return;
    
    // If "State Board" or "Other" is selected, allow text input
    if (name === "board10" && (value === "State Board" || value === "Other")) {
      setBoard10(value);
    } else if (name === "board12" && (value === "State Board" || value === "Other")) {
      setBoard12(value);
    }
    
    setFormData({ ...formData, [name]: value });
  };
  
   // Function to reset form fields
  // const resetForm = () => {
  //   setFormData({
  //     name: "",
  //     guardianName: "",
  //     mobile: "",
  //     email: "",
  //     address: "",
  //     year10: "",
  //     board10: "",
  //     percentage10: "",
  //     year12: "",
  //     stream12: "",
  //     subject12: "",
  //     board12: "",
  //     percentage12: "",
  //     yearGrad: "",
  //     university: "",
  //     subjectGrad: "",
  //     courseGraduation: "",
  //     percentageGrad: "",
  //     course: "",
  //     preferredCountry: "",
  //     specificEuropeCountry: "",
  //     ieltsCleared: "",
  //     ieltsScore: "",
  //     satCleared: "",
  //     satScore: "",
  //     examType: "",
  //     examScore: "",
  //   });
  // };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);

    fetch('https://script.google.com/macros/s/AKfycbzmt-aNfzyR_unDre52q9e2RmaXmsC_6yYEvL5TxMoNfcYf93AQGbLDSii1SguKZrOL/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      mode: 'no-cors'
    })
    .catch((error) => console.error('Error:', error));

    setTimeout(() => {
      setSubmitted(false);
      window.location.reload();
    }, 5000);
  };
  
  // Fetch country data from an API (Optional)
//   useEffect(() => {

// // Fetching university data
// fetch("http://universities.hipolabs.com/search?country=India") // Replace 'India' dynamically if needed
// .then((res) => res.json())
// .then((data) => setUniversities(data.map((uni: any) => uni.name).sort()))
// .catch((error) => console.error("Error fetching universities:", error));
// }, []);

  ///////////////////////////////////////prefred country/////////////////////////////
  const europeCountries = [
    "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria",
      "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
      "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein",
      "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands",
      "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino",
      "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine",
      "United Kingdom", "Vatican City"

  ];

  const countryOptions = [
    "USA", "UK", "Canada", "Europe", "Australia", "New Zealand", "Singapore"
  ];

  return (
    <div className="flex justify-center items-center py-10 bg-white">
      <form onSubmit={handleSubmit} className="bg-blue-200 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-4"></h2>

        {/* Personal Details */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name" className="p-2 border rounded w-full " onChange={handleChange} required />
          <input type="text" name="guardianName" placeholder="Guardian's Name" className="p-2 border rounded w-full " onChange={handleChange} required />
          {/* <input type="text" name="motherName" placeholder="Mother's Name" className="p-2 border rounded w-full" onChange={handleChange} required /> */}
          <input type="tel" name="mobile" placeholder="Mobile No" className="p-2 border rounded w-full " pattern="[0-9]{10}" maxLength={10} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="p-2 border rounded w-full " onChange={handleChange} required />
        </div>

        {/* Address Field */}
        <textarea name="address" placeholder="Address" className="p-2 border rounded w-full mt-4 h-20" onChange={handleChange}></textarea>

        {/* Education Qualification Section */}
        <div className="mt-4">
      {/* 10th Qualification */}
      <h3 className="text-lg font-semibold mb-2">10th Qualification</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="year10"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
          maxLength={4}
          placeholder="Year"
        />

        {/* 10th Board Dropdown */}
        <select
          name="board10"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
        >
          <option value="">Select 10th Board</option>
          <option value="CBSE">CBSE</option>
          <option value="ICSE">ICSE</option>
          <option value="IB">IB</option>
          <option value="State Board">State Board</option>
          <option value="Other">Other</option>
        </select>

        {/* Textbox appears if "State Board" or "Other" is selected */}
        {(board10 === "State Board" || board10 === "Other") && (
          <input
            type="text"
            name="board10"
            className="p-2 border rounded w-full mt-2"
            placeholder="Enter Board Name"
            onChange={handleChange}
            
          />
        )}


        <input
          type="text"
          name="percentage10"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
          maxLength={4}
          placeholder="Percentage/CGPA"
        />
      </div>

      {/* 12th Qualification */}
      <h3 className="text-lg font-semibold mt-4 mb-2">12th Qualification</h3>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          name="year12"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
          maxLength={4}
          placeholder="Year"
        />
        <select name="stream12" className="p-2 border rounded w-full" onChange={handleChange} >
          <option value="">Select Stream</option>
          <option value="Science">Science</option>
          <option value="Commerce">Commerce</option>
          <option value="Arts">Arts</option>
        </select>
        <input
          type="text"
          name="subject12"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
          pattern="[A-Za-z\s]+"
          placeholder="Subject"
        />

        {/* 12th Board Dropdown */}
        <select
          name="board12"
          className="p-2 border rounded w-full mt-4"
          onChange={handleChange}
          
        >
          <option value="">Select 12th Board</option>
          <option value="CBSE">CBSE</option>
          <option value="ICSE">ICSE</option>
          <option value="IB">IB</option>
          <option value="State Board">State Board</option>
          <option value="Other">Other</option>
        </select>

        {/* Textbox appears if "State Board" or "Other" is selected */}
        {(board12 === "State Board" || board12 === "Other") && (
          <input
            type="text"
            name="board12"
            className="p-2 border rounded w-full mt-2"
            placeholder="Enter Board Name"
            onChange={handleChange}
            
          />
        )}

        <input
          type="text"
          name="percentage12"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
          maxLength={4}
          placeholder="Percentage/CGPA"
        />
      </div>

      {/* Graduation */}
      <h3 className="text-lg font-semibold mt-4 mb-2">Graduation</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="yearGrad"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
          maxLength={4}
          placeholder="Year"
        />
        <input
          type="text"
          name="university"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
          pattern="[A-Za-z\s]+"
          placeholder="university"
        />
        {/* <select name="university" className="p-2 border rounded w-full" onChange={(e) => setSelectedUniversity(e.target.value)} required>
          <option value="">Select University</option>
          {universities.map((uni, index) => <option key={index} value={uni}>{uni}</option>)}
          <option value="Other">Other</option>
        </select>
        {selectedUniversity === "Other" && (
          <input type="text" name="otherUniversity" placeholder="Enter University Name" className="p-2 border rounded w-full mt-2" onChange={(e) => setOtherUniversity(e.target.value)} required />
        )} */}
        <select name="subjectGrad" className="p-2 border rounded w-full" onChange={handleChange} >
          <option value="">Select Stream</option>
          <option value="Science">Science</option>
          <option value="Commerce">Commerce</option>
          <option value="Arts">Arts</option>
          <option value="Engineering">Engineering</option>
        </select>
        <input
          type="text"
          name="courseGraduation"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
          pattern="[A-Za-z\s]+"
          placeholder="Course"
        />
        <input
          type="text"
          name="percentageGrad"
          className="p-2 border rounded w-full"
          onChange={handleChange}
          
          maxLength={4}
          placeholder="Percentage/CGPA"
        />
      </div>
    </div>

        {/* Preferred Course */}
        <h3 className="text-lg font-semibold mt-4 mb-2">Preferred Course</h3>
        <input type="text" name="course" placeholder="Course Name" className="p-2 border rounded w-full" onChange={handleChange} required />

        {/* Preferred Country Dropdown */}
        <h3 className="text-lg font-semibold mt-4 mb-2">Preferred Country</h3>
      <select name="preferredCountry" className="p-2 border rounded w-full" onChange={handleChange} required>
        <option value="">Select Country</option>
        {countryOptions.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>

      {formData.preferredCountry === "Europe" && (
        <select name="specificEuropeCountry" className="p-2 border rounded w-full mt-2" onChange={handleChange} required>
          <option value="">Select a European Country</option>
          {europeCountries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      )}

      <h3 className="text-lg font-semibold mt-4">Did you clear IELTS?</h3>
      <div className="flex gap-4">
        <label><input type="radio" name="ieltsCleared" value="yes" onChange={handleChange} /> Yes</label>
        <label><input type="radio" name="ieltsCleared" value="no" onChange={handleChange} /> No</label>
      </div>
      {formData.ieltsCleared === "yes" && (
        <input type="text" name="ieltsScore" placeholder="IELTS Score" className="p-2 border rounded w-full mt-2" onChange={handleChange}  />
      )}

      <h3 className="text-lg font-semibold mt-4">Did you clear SAT?</h3>
      <div className="flex gap-4">
        <label><input type="radio" name="satCleared" value="yes" onChange={handleChange} /> Yes</label>
        <label><input type="radio" name="satCleared" value="no" onChange={handleChange} /> No</label>
      </div>
      {formData.satCleared === "yes" && (
        <input type="text" name="satScore" placeholder="SAT Score" className="p-2 border rounded w-full mt-2" onChange={handleChange}  />
      )}

      <h3 className="text-lg font-semibold mt-4">Did you clear GMAT or GRE?</h3>
      <select name="examType" className="p-2 border rounded w-full" onChange={handleChange}>
        <option value="">Select Exam</option>
        <option value="GMAT">GMAT</option>
        <option value="GRE">GRE</option>
        <option value="None">None</option>
      </select>
      {(formData.examType === "GMAT" || formData.examType === "GRE") && (
        <input type="text" name="examScore" placeholder={`${formData.examType} Score`} className="p-2 border rounded w-full mt-2" onChange={handleChange} />
      )}



        {/* Field of Study */}
        {/* <h3 className="text-lg font-semibold mt-4 mb-2">Field of Study</h3>
        <input type="text" name="fieldOfStudy" placeholder="Field of Study" className="p-2 border rounded w-full" onChange={handleChange} required /> */}

        {/* Submit Button */}
        <button type="submit" className="w-auto mt-4 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 transition">Submit
</button>
      </form>
      {submitted && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-xl font-bold text-green-600">Success!</h2>
            <p className="mt-2 text-gray-700">Thank you for reaching out! Your information has been successfully submitted. Our team will review your details and get back to you shortly.</p>
            <button onClick={() => { setSubmitted(false);  }} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
