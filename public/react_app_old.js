const filesList = [
    { name: "gms_admin_commissioner_dashboard (1).html", size: "23.5 KB" }
];

function App() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-black mb-6 text-indigo-600">Admin Dashboard Files</h1>
            <p className="text-slate-600 mb-8 font-medium">This React component loads and displays the files from your Admin Dashboard folder.</p>
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-indigo-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">File Name</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">Size</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-100">
                        {filesList.map((file, index) => (
                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-800">
                                    <span className="mr-2">📄</span> {file.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-medium">
                                    {file.size}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 hover:text-indigo-800 font-bold">
                                    <a href={file.name} target="_blank" rel="noreferrer" className="bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors border border-indigo-100">Open File</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Embedded view of the admin dashboard */}
            <div className="mt-12 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-indigo-600 p-4">
                    <h2 className="text-white font-bold">Live Preview: Admin Dashboard</h2>
                </div>
                <iframe 
                    src="gms_admin_commissioner_dashboard (1).html" 
                    className="w-full h-[600px] border-none"
                    title="Admin Dashboard Preview"
                ></iframe>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
