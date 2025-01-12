"use client";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaFileAlt, FaEdit, FaClipboardList } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const mockData = [
    { id: 1, date: "2024-01-01", time: "10:00 AM", classLevel: "9-10", testName: "Math Test" },
    { id: 2, date: "2024-01-02", time: "11:00 AM", classLevel: "11-12", testName: "Physics Test" },
    { id: 3, date: "2024-01-03", time: "12:00 PM", classLevel: "7-8", testName: "English Test" },
];

const ExamManagement = () => {
    const [tableData, setTableData] = useState(mockData);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [newTest, setNewTest] = useState({ date: "", time: "", classLevel: "", testName: "" });
    const [showForm, setShowForm] = useState(false);
    const [editTest, setEditTest] = useState(null);
    const classLevels = ["1-2", "3-4", "5-6", "7-8", "9-10", "11-12"];

    const indexOfLastTest = currentPage * rowsPerPage;
    const indexOfFirstTest = indexOfLastTest - rowsPerPage;
    const currentTests = tableData.slice(indexOfFirstTest, indexOfLastTest);
    const totalPages = Math.ceil(tableData.length / rowsPerPage);

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleEdit = (id) => {
        const testToEdit = tableData.find((test) => test.id === id);
        setEditTest(testToEdit);
    };

    const handleDelete = (id) => {
        const testToDelete = tableData.find((test) => test.id === id);
        if (window.confirm(`Are you sure you want to delete the test: "${testToDelete.testName}"?`)) {
            const updatedData = tableData.filter((test) => test.id !== id);
            setTableData(updatedData);
        }
    };

    const handleEditChange = (event) => {
        const { name, value } = event.target;
        setEditTest({ ...editTest, [name]: value });
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        setTableData(tableData.map((test) => (test.id === editTest.id ? editTest : test)));
        setEditTest(null);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewTest({ ...newTest, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (newTest.testName && newTest.classLevel && newTest.date && newTest.time) {
            setTableData([...tableData, { ...newTest, id: Date.now() }]);
            setNewTest({ date: "", time: "", classLevel: "", testName: "" });
            setShowForm(false);
        } else {
            alert("Please fill in all fields!");
        }
    };

    return (
        <div className="min-h-screen py-6 w-full">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-gray-800">
                        AI-Powered Outcome Based Examination System
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-4 bg-gradient-to-br from-[#79A3FF] to-[#A8D8F0] text-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold">Manage your Exam with ease!</h2>
                    <button
                        className="flex items-center gap-2 bg-[#0066CC] px-5 py-2 text-nowrap rounded-lg shadow hover:bg-blue-700 transition"
                        onClick={() => setShowForm(!showForm)}
                    >
                        <BiPlus className="text-2xl" />
                        {showForm ? "Close Form" : "Create New Exam"}
                    </button>
                </div>

                {showForm && (
                    <form
                        onSubmit={handleFormSubmit}
                        className="bg-white border-2 border-[#79A3FF] p-4 rounded-lg shadow-lg space-y-4"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">Create New Test</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="testName"
                                placeholder="Test Name"
                                value={newTest.testName}
                                onChange={handleInputChange}
                                className="border px-3 py-2 rounded"
                                required
                            />
                            <select
                                name="classLevel"
                                value={newTest.classLevel}
                                onChange={handleInputChange}
                                className="border px-3 py-2 rounded"
                                required
                            >
                                <option value="">Select Class Level</option>
                                {classLevels.map((level) => (
                                    <option key={level} value={level}>
                                        {level}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="date"
                                name="date"
                                value={newTest.date}
                                onChange={handleInputChange}
                                className="border px-3 py-2 rounded"
                                required
                            />
                            <input
                                type="time"
                                name="time"
                                value={newTest.time}
                                onChange={handleInputChange}
                                className="border px-3 py-2 rounded"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#0066CC] text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Add Test
                        </button>
                    </form>
                )}

                <div className="bg-white border-2 border-[#79A3FF] p-4 rounded-lg shadow-lg overflow-x-auto">
                    {tableData.length === 0 ? (
                        <div className="text-center space-y-4">
                            <FaFileAlt className="text-5xl text-gray-400 mx-auto" />
                            <p className="text-lg text-gray-600">
                                No tests have been created yet. Start by adding a new test!
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <span>Show </span>
                                    <select
                                        className="border rounded px-2 py-1"
                                        value={rowsPerPage}
                                        onChange={handleRowsPerPageChange}
                                    >
                                        {[5, 10, 15].map((count) => (
                                            <option key={count} value={count}>
                                                {count}
                                            </option>
                                        ))}
                                    </select>
                                    <span> entries</span>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full table-auto border-collapse">
                                    <thead>
                                        <tr className="bg-gradient-to-br from-[#79A3FF] to-[#A8D8F0] text-white">
                                            <th className="p-3 border">ID</th>
                                            <th className="p-3 border">Test Name</th>
                                            <th className="p-3 border">Class Level</th>
                                            <th className="p-3 border">Date</th>
                                            <th className="p-3 border">Time</th>
                                            <th className="p-3 border">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentTests.map((test, index) => (
                                            <tr
                                                key={test.id}
                                                className={`text-center border ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                                    } hover:bg-blue-100`}
                                            >
                                                <td className="p-3 border">{indexOfFirstTest + index + 1}</td>
                                                <td className="p-3 border text-nowrap">{test.testName}</td>
                                                <td className="p-3 border text-nowrap">{test.classLevel}</td>
                                                <td className="p-3 border text-nowrap">{test.date}</td>
                                                <td className="p-3 border text-nowrap">{test.time}</td>
                                                <td className="p-3 flex justify-center space-x-3">
                                                    <FaClipboardList
                                                        className="text-green-600 cursor-pointer hover:text-blue-800"
                                                        onClick={() =>
                                                            alert(`Viewing questions for: ${test.testName}`)
                                                        }
                                                    />
                                                    <FaEdit
                                                        className="text-blue-600 cursor-pointer hover:text-green-800"
                                                        onClick={() => handleEdit(test.id)}
                                                    />
                                                    <MdDelete
                                                        className="text-red-600 cursor-pointer hover:text-red-800"
                                                        onClick={() => handleDelete(test.id)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <button
                                    className="px-4 py-2 bg-[#0066CC] text-white rounded-lg shadow transition"
                                    disabled={currentPage === 1}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    Prev
                                </button>
                                <span>
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    className="px-4 py-2 bg-[#0066CC] text-white rounded-lg shadow transition"
                                    disabled={currentPage === totalPages}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {editTest && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">Edit Test</h3>
                            <form onSubmit={handleEditSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="testName"
                                    value={editTest.testName}
                                    onChange={handleEditChange}
                                    className="border px-3 py-2 rounded w-full"
                                    placeholder="Test Name"
                                    required
                                />
                                <select
                                    name="classLevel"
                                    value={editTest.classLevel}
                                    onChange={handleEditChange}
                                    className="border px-3 py-2 rounded w-full"
                                    required
                                >
                                    <option value="">Select Class Level</option>
                                    {classLevels.map((level) => (
                                        <option key={level} value={level}>
                                            {level}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="date"
                                    name="date"
                                    value={editTest.date}
                                    onChange={handleEditChange}
                                    className="border px-3 py-2 rounded w-full"
                                    required
                                />
                                <input
                                    type="time"
                                    name="time"
                                    value={editTest.time}
                                    onChange={handleEditChange}
                                    className="border px-3 py-2 rounded w-full"
                                    required
                                />
                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setEditTest(null)}
                                        className="bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExamManagement;
