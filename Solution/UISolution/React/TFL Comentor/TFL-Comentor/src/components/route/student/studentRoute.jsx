import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Sidebar from '../../layout/student/StudentSidebar';

const StudentRoute = () =>{
     return (
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Outlet/>
        </div>
      </div>
  );
};

export default StudentRoute;