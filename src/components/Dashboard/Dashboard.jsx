import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import ExamManagement from "./Exam/ExamManagement";
import CreateQuestions from "./Exam/CreateQuestions";


const Dashboard = () => {
    return (
        <div className="flex h-full ">
            <div className="w-64  bg-gradient-to-br from-[#79A3FF] to-[#A8D8F0]  text-white flex flex-col shadow-lg px-2 py-6  ">
                <Sidebar /> {/* Sidebar with links */}
            </div>
            <div className="flex-1 p-8 ">
                <Routes>
                    <Route index element={<Welcome />} />
                    <Route path="exam-management" element={<ExamManagement />} />
                    <Route path="create-questions" element={<CreateQuestions />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
