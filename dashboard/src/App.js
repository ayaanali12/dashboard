import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import ClaimForm from "./components/ClaimForm";
import UploadField from "./components/UploadField";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <ProgressBar />
        <ClaimForm />

        {/* Upload Section */}
        <div className="grid grid-cols-3 gap-6 p-6">
          <UploadField label="Agreement under Disputes" />
          <UploadField label="Additional Documentation" />
        </div>
      </div>
    </div>
  );
};

export default App;
