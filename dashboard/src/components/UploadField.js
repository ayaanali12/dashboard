const UploadField = ({ label }) => {
  return (
    <div className="border rounded p-4 text-center">
      <p className="mb-2">{label}</p>
      <label className="block bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
        Upload
        <input type="file" className="hidden" />
      </label>
    </div>
  );
};

export default UploadField;
