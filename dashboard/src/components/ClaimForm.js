const ClaimForm = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">File your Claim (Approx 5 Minutes)</h2>
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block mb-2">Contract Value</label>
          <input
            type="text"
            placeholder="10,00,00 USD"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Claim Value</label>
          <input
            type="text"
            placeholder="15,00,00 USD"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Place</label>
          <input
            type="text"
            placeholder="Select the place"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="block mb-2">Is the place mentioned in the agreement?</label>
        <div className="flex space-x-4">
          <label>
            <input type="radio" name="place" className="mr-2" /> Yes
          </label>
          <label>
            <input type="radio" name="place" className="mr-2" /> No
          </label>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
