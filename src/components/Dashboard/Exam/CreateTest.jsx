// import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const CreateTest = ({ onTestCreate }) => {
//     const [testName, setTestName] = useState("");
//     const [classLevel, setClassLevel] = useState("");
//     const [startDate, setStartDate] = useState(new Date());
//     const [testTime, setTestTime] = useState("10:00");
//     const [showUpdate, setShowUpdate] = useState(false);

//     useEffect(() => {
//         const testFromLocal = localStorage.getItem("test");
//         if (testFromLocal) {
//             const test = JSON.parse(testFromLocal);
//             setTestName(test.testName || "");
//             setClassLevel(test.classLevel || "");
//             setStartDate(new Date(test.testDate || Date.now()));
//             setTestTime(test.testTime || "10:00");
//             setShowUpdate(true);
//         }
//     }, []);

//     const handleSave = () => {
//         if (testName.trim() && classLevel.trim()) {
//             const newTest = {
//                 id: Date.now(), // Unique ID for the test
//                 testName,
//                 classLevel,
//                 testDate: startDate.toISOString().split('T')[0],
//                 testTime,
//             };

//             // Notify parent component
//             onTestCreate(newTest);

//             alert(`${showUpdate ? "Test updated" : "Test created"} successfully!`);
//         } else {
//             alert("Please fill in all fields.");
//         }
//     };


//     return (
//         <div className="w-full ">
//             <div className="flex flex-col justify-start gap-7 text-white">
//                 <h1 className="text-3xl font-bold text-start">
//                     {showUpdate ? "Edit Test" : "Create Test"}
//                 </h1>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {/* Test Name */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
//                             <div className="rounded-xl bg-[hsl(269,77%,19%,90%)]">
//                                 <input
//                                     type="text"
//                                     required
//                                     placeholder="Enter Test Name"
//                                     value={testName}
//                                     onChange={(e) => setTestName(e.target.value)}
//                                     className="w-full bg-transparent outline-none text-white p-3 placeholder:text-white/85"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Class Level */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
//                             <div className="rounded-xl bg-[hsl(269,77%,19%,90%)]">
//                                 <select
//                                     className="w-full bg-transparent outline-none text-white p-3 -mx-3"
//                                     value={classLevel}
//                                     onChange={(e) => setClassLevel(e.target.value)}
//                                 >
//                                     <option value="" className="bg-[#C407B9] text-white/85">
//                                         Select Class Level
//                                     </option>
//                                     {Array.from({ length: 6 }, (_, i) => `${i * 2 + 1}-${i * 2 + 2}`).map(
//                                         (level, idx) => (
//                                             <option
//                                                 key={idx}
//                                                 value={level}
//                                                 className="bg-[#C407B9] text-white/85"
//                                             >
//                                                 {level}
//                                             </option>
//                                         )
//                                     )}
//                                 </select>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Test Date */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
//                             <div className="rounded-xl bg-[hsl(269,77%,19%,90%)]">
//                                 <DatePicker
//                                     className="w-full bg-transparent outline-none text-white p-3"
//                                     selected={startDate}
//                                     onChange={(date) => setStartDate(date ?? new Date())} // Ensure default value
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Test Time */}
//                     <div className="flex flex-col items-center text-white">
//                         <div className="w-full bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] rounded-xl">
//                             <div className="rounded-xl bg-[hsl(269,77%,19%,90%)]">
//                                 <input
//                                     type="time"
//                                     value={testTime}
//                                     onChange={(e) => setTestTime(e.target.value)}
//                                     className="w-full bg-transparent outline-none text-white p-3"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <button
//                     type="submit"
//                     onClick={handleSave}
//                     className="self-end px-10 py-3 bg-[#C407B9] rounded-xl hover:bg-[#F407B9]"
//                 >
//                     {showUpdate ? "Update Test" : "Create Test"}
//                 </button>

//             </div>
//         </div>
//     );
// };

// export default CreateTest;
