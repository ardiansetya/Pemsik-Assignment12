import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RenderData from "../pages/DataMahasiswa";
import Form from "../components/Form";

const AdminLayout = ({ children }) => {
  return (
    <div className=" min-h-screen  border-red-200">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ">
          <Header />
          <div className="p-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
