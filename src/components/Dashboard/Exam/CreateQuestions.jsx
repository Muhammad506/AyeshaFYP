import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { FaFileAlt, FaFileUpload, FaFileInvoice } from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";

export default function CreateQuestions() {
    const [questionType, setQuestionType] = useState("");
    const [questions, setQuestions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [showAnswers, setShowAnswers] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Handle adding a new question
    const handleAddQuestion = () => {
        if (!currentQuestion.questionText) return;

        const data = {
            questionText: currentQuestion.questionText,
            questionType: questionType === "Multiple Choice" ? "objective" : "subjective",
            options: questionType === "Multiple Choice" ? currentQuestion.options : undefined,
            correctAnswer: questionType === "Multiple Choice" ? currentQuestion.correctAnswer : undefined,
        };

        try {
            setLoading(true);
            const newQuestion = {
                id: Date.now().toString(), // Fake ID for new question
                ...data,
            };

            setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
            setShowModal(false);
            setCurrentQuestion({});
            setQuestionType("");
            setError("");
        } catch (err) {
            setError("Error creating or updating question. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Handle deleting a question
    const handleDelete = (index) => {
        setQuestions(questions.filter((_, i) => i !== index)); // Remove from local state
    };

    // Handle editing a question
    const handleEdit = (index) => {
        setCurrentQuestion(questions[index]);
        setShowModal(true);
        setQuestionType(questions[index].questionType);
    };

    // Filter questions based on selected type
    const filteredQuestions = questionType
        ? questions.filter(
            (q) =>
                (questionType === "All Questions") ||
                (questionType === "Paragraph" && q.questionType === "subjective") ||
                (questionType === "Multiple Choice" && q.questionType === "objective")
        )
        : questions;

    return (
        <div className="min-h-screen py-6 w-full font-inter flex flex-col items-center bg-gradient-to-br from-[#79A3FF] to-[#A8D8F0]">
            <div className="flex w-[90%] justify-start items-center text-left">
                <h1 className="text-white text-3xl font-bold mb-4">IAS Exam System</h1>
            </div>

            {/* Toolbar */}
            <div className="bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] text-white w-[90%] rounded-lg flex justify-between items-center">
                <div className="flex flex-col md:flex-row justify-center md:justify-between p-4 md:gap-10 gap-4 w-full rounded-lg bg-[hsl(269,77%,19%,90%)]">
                    <h1 className="text-lg flex items-center justify-center text-center md:text-left">IAS Exam System</h1>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="bg-gradient-to-r from-[#2E98FC] to-[#C407B9] p-[1.5px] text-white rounded-lg flex justify-between items-center">
                            <select
                                className="bg-[hsl(269,77%,19%)] outline-none text-white px-4 py-2 rounded-lg"
                                value={questionType}
                                onChange={(e) => setQuestionType(e.target.value)}
                            >
                                <option value="All Questions">All Questions</option>
                                <option value="Paragraph">Paragraph</option>
                                <option value="Multiple Choice">Multiple Choice</option>
                            </select>
                        </div>
                        <button
                            disabled={!questionType}
                            onClick={() => setShowModal(true)}
                            className={`${questionType ? "bg-[#C407B9] hover:bg-[#F407B9]" : "bg-gray-500 cursor-not-allowed"
                                } text-white px-4 py-2 rounded-lg`}
                        >
                            Add Question
                        </button>
                    </div>
                </div>
            </div>

            {/* Question List */}
            <div className="bg-gradient-to-r mt-4 from-[#2E98FC] to-[#C407B9] p-[1.5px] text-white w-[90%] rounded-lg flex justify-between items-center">
                <div className="flex flex-col justify-center p-4 gap-4 w-full rounded-lg bg-[hsl(269,77%,19%,90%)]">
                    {loading ? (
                        <div className="text-center text-white">Loading...</div>
                    ) : error ? (
                        <div className="text-center text-red-500">{error}</div>
                    ) : filteredQuestions.length === 0 ? (
                        <div className="flex flex-col w-full justify-center items-center p-10 gap-4">
                            <FaFileAlt className="size-24 text-[#8A68AF]" />
                            <div className="flex gap-5 text-[#B69ED1]">
                                <RiFileEditFill className="size-9" />
                                <FaFileUpload className="size-9" />
                                <FaFileInvoice className="size-9" />
                            </div>
                            <div className="flex flex-col text-center justify-center">
                                <h3 className="font-bold text-lg">No Questions Created yet</h3>
                                <p className="text-sm w-full md:w-2/3 self-center">
                                    All your questions are stored in the question bank. If you
                                    edit a question somewhere, it will be updated everywhere.
                                </p>
                            </div>
                        </div>
                    ) : (
                        filteredQuestions.map((question, index) => (
                            <div key={index} className="rounded-lg text-white flex justify-between items-center">
                                <div className="flex-1">
                                    <h3 className="font-bold">{index + 1}. {question.questionText}</h3>

                                    {question.options && (
                                        <ul className="list-disc ml-6 mt-2">
                                            {question.options.map((option, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        disabled
                                                        name={`question-${index}`}
                                                        value={idx}
                                                        checked={question.correctAnswer === idx}
                                                        className="form-radio h-4 w-4 text-green-400"
                                                    />
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <button
                                        className="text-blue-400 mt-2"
                                        onClick={() => setShowAnswers((prev) => ({ ...prev, [index]: !prev[index] }))}
                                    >
                                        {showAnswers[index] ? "Hide Answer" : "Show Answer"}
                                    </button>
                                    {showAnswers[index] && (
                                        <p className="text-green-400 mt-2">
                                            {question.type === "Paragraph" ? "" : question.options?.[question.correctAnswer || 0]}
                                        </p>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEdit(index)}>
                                        <FiEdit className="text-blue-500 text-xl" />
                                    </button>
                                    <button onClick={() => handleDelete(index)}>
                                        <FiTrash className="text-red-500 text-xl" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
                    <div className="p-[1.5px] w-full max-w-3xl rounded-lg">
                        <div className="bg-[hsl(269,77%,19%,98%)] text-white p-6 relative">
                            {/* Title */}
                            <div
                                className="w-full bg-transparent border-2 rounded-full outline-none text-white py-1 z-50"
                                style={{
                                    borderImage: "linear-gradient(to right, #007BFF, rgba(196,7,185,1)) 1",
                                    borderImageSlice: 1,
                                }}
                            >
                                <h1 className="p-4 text-3xl font-bold text-center">IAS Exam System</h1>
                            </div>
                            <h2 className="text-xl font-bold my-4 mt-8">Question</h2>
                            <input
                                type="text"
                                className="w-full bg-[hsl(269,77%,19%)] text-white p-2 outline-none rounded-lg"
                                placeholder="Enter Your Question"
                                value={currentQuestion.questionText || ""}
                                onChange={(e) =>
                                    setCurrentQuestion({
                                        ...currentQuestion,
                                        questionText: e.target.value,
                                    })
                                }
                            />
                            <div className="my-2">
                                <hr
                                    style={{
                                        height: "2px",
                                        background: "linear-gradient(to right, #007BFF, rgba(196,7,185,1))",
                                        border: "none",
                                    }}
                                />
                            </div>

                            {questionType === "Multiple Choice" && (
                                <>
                                    {["Option A", "Option B", "Option C", "Option D"].map((option, idx) => (
                                        <input
                                            key={idx}
                                            type="text"
                                            className="w-full bg-[hsl(269,77%,19%)] text-white p-2 outline-none rounded-lg mb-2"
                                            placeholder={option}
                                            value={currentQuestion.options ? currentQuestion.options[idx] : ""}
                                            onChange={(e) =>
                                                setCurrentQuestion({
                                                    ...currentQuestion,
                                                    options: currentQuestion.options
                                                        ? currentQuestion.options.map((opt, i) =>
                                                            i === idx ? e.target.value : opt
                                                        )
                                                        : [],
                                                })
                                            }
                                        />
                                    ))}
                                    <div className="mt-2 flex gap-4">
                                        <div className="flex gap-2">
                                            <label className="text-white">Correct Answer:</label>
                                            <select
                                                className="bg-[hsl(269,77%,19%)] text-white px-4 py-2 rounded-lg"
                                                value={currentQuestion.correctAnswer || ""}
                                                onChange={(e) =>
                                                    setCurrentQuestion({
                                                        ...currentQuestion,
                                                        correctAnswer: e.target.value,
                                                    })
                                                }
                                            >
                                                <option value="">Select</option>
                                                {currentQuestion.options?.map((option, idx) => (
                                                    <option key={idx} value={idx}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="my-4 flex justify-end gap-4">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddQuestion}
                                    className="bg-[#C407B9] text-white px-4 py-2 rounded-lg"
                                >
                                    {currentQuestion?.id ? "Update" : "Add"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
