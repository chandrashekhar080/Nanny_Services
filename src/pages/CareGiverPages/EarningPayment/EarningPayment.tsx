import React, { useState } from 'react';
import { 
  Wallet, 
  Clock, 
  BadgeDollarSign, 
  MoreVertical, 
  Download, 
  Settings, 
  Plus, 
  X,
  Search,
  DockIcon,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MoneyBagIcon from '../../../components/ui/moneyIcon';
import { GrDocumentText } from "react-icons/gr";
import Pagination from '../CareGiverDashboard/Pagination';


// --- MOCK DATA ---
const STATS_DATA = [
  { label: 'Total Earnings (This Month)', value: '$1,240', trend: '-2%', trendUp: false, icon: MoneyBagIcon, color: 'bg-red-50 text-red-500' },
  { label: 'Pending Payments', value: '$320', trend: '-0.20%', trendUp: false, icon: Clock, color: 'bg-purple-50 text-purple-500' },
  { label: 'Average Hourly Rate', value: '$21.50/hr', trend: '+8.5%', trendUp: true, icon: BadgeDollarSign, color: 'bg-blue-50 text-blue-500' },
];

const PAYMENT_METHODS = [
  { id: 1, type: 'PayPal', email: 'sara*******@example.com', status: 'Verified', isDefault: true },
  { id: 2, type: 'PayPal', email: 'sara*******@example.com', status: 'Pending', isDefault: false },
];

const INVOICES = [
  { id: '1243', family: 'Johnson Family', amount: '$450', status: 'Paid' },
  { id: '1244', family: 'Johnson Family', amount: '$450', status: 'Paid' },
];

const TRANSACTIONS = [
  { id: 1, date: 'Sept 12, 2025', family: 'Johnson Family', job: 'After-School Babysitter', hours: '15 hrs', amount: '$450', status: 'Paid' },
  { id: 2, date: 'Sept 10, 2025', family: 'Smith Family', job: 'Weekend Nanny', hours: '10 hrs', amount: '$320', status: 'Pending' },
  { id: 3, date: 'Sept 08, 2025', family: 'Johnson Family', job: 'Date Night', hours: '5 hrs', amount: '$150', status: 'Paid' },
  { id: 4, date: 'Sept 05, 2025', family: 'Williams Family', job: 'Tutoring', hours: '2 hrs', amount: '$80', status: 'Paid' },
  { id: 5, date: 'Sept 12, 2025', family: 'Johnson Family', job: 'After-School Babysitter', hours: '15 hrs', amount: '$450', status: 'Paid' },
  { id: 6, date: 'Sept 10, 2025', family: 'Smith Family', job: 'Weekend Nanny', hours: '10 hrs', amount: '$320', status: 'Pending' },
  { id: 7, date: 'Sept 08, 2025', family: 'Johnson Family', job: 'Date Night', hours: '5 hrs', amount: '$150', status: 'Paid' },
  { id: 8, date: 'Sept 05, 2025', family: 'Williams Family', job: 'Tutoring', hours: '2 hrs', amount: '$80', status: 'Paid' },
  { id: 9, date: 'Sept 12, 2025', family: 'Johnson Family', job: 'After-School Babysitter', hours: '15 hrs', amount: '$450', status: 'Paid' },
  { id: 10, date: 'Sept 10, 2025', family: 'Smith Family', job: 'Weekend Nanny', hours: '10 hrs', amount: '$320', status: 'Pending' },
  { id: 11, date: 'Sept 08, 2025', family: 'Johnson Family', job: 'Date Night', hours: '5 hrs', amount: '$150', status: 'Paid' },
  { id: 12, date: 'Sept 05, 2025', family: 'Williams Family', job: 'Tutoring', hours: '2 hrs', amount: '$80', status: 'Paid' },
  { id: 13, date: 'Sept 01, 2025', family: 'Johnson Family', job: 'After-School Babysitter', hours: '15 hrs', amount: '$450', status: 'Paid' },
];

// --- REUSABLE COMPONENTS ---

// 1. Badge Component
const Badge = ({ status, className = "" }) => {
  const styles = {
    Paid: 'bg-green-100 text-green-600',
    Verified: 'text-green-500 font-medium',
    Pending: 'bg-orange-100 text-orange-600', // Text style for table, diff for payment
    PendingText: 'text-red-500 font-medium', // Specific for payment method text
    Default: 'bg-gray-100 text-gray-600'
  };

  // Handle specific case for Payment Method text status vs Table badge
  if (status === 'Verified' || (status === 'Pending' && className.includes('text-only'))) {
     return <span className={`text-xs ${status === 'Verified' ? styles.Verified : styles.PendingText} ${className}`}>{status}</span>;
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status] || styles.Default} ${className}`}>
      {status}
    </span>
  );
};

// 2. Stat Card Component
const StatCard = ({ label, value, trend, trendUp, icon: Icon, color }) => (
  <div className="bg-white  [font-family:'Poppins',Helvetica] p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
    <div>
      <p className="text-gray-500 text-xs mb-1">{label}</p>
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{value}</h3>
      <p className={`text-xs mt-5 font-medium ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
        {trend} <span className="text-gray-400 font-normal">Since last week</span>
      </p>
    </div>
    <div className={`p-3 rounded-lg ${color}`}>
      <Icon size={32} />
    </div>
  </div>
);

// 3. Modal Component (Detail View)
const TransactionModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed  [font-family:'Poppins',Helvetica] inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl transform transition-all">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h3 className="text-xl font-bold text-gray-800">Transaction Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Status</span>
            <Badge status={data.status} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Family Name</span>
            <span className="font-medium text-gray-800">{data.family}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Job Title</span>
            <span className="font-medium text-gray-800">{data.job}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Date</span>
            <span className="font-medium text-gray-800">{data.date}</span>
          </div>
           <div className="flex justify-between items-center">
            <span className="text-gray-500">Hours Worked</span>
            <span className="font-medium text-gray-800">{data.hours}</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t mt-4">
            <span className="text-lg font-bold text-gray-600">Total Amount</span>
            <span className="text-2xl font-bold text-gray-900">{data.amount}</span>
          </div>
        </div>
        
        <div className="mt-8 flex gap-3">
           <button onClick={onClose} className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition">Close</button>
           <button
             onClick={() => handleDownloadInvoice(data)}
             className="flex-1 bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition flex justify-center items-center gap-2"
           >
             <Download size={16} /> Invoice
           </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE LAYOUT ---

export default function EarningPayment() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 10;

  // Filter logic for the table
  const filteredTransactions = TRANSACTIONS.filter(item =>
    item.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle settings redirect
  const handleSettingsClick = () => {
    navigate('/care-giver/account-settings');
  };

  // Handle invoice download
  const handleDownloadInvoice = (invoice) => {
    // Create demo invoice content
    const invoiceContent = `
Nanny Services Invoice
======================

Invoice ID: ${invoice.id}
Family: ${invoice.family}
Amount: ${invoice.amount}
Status: ${invoice.status}
Date: ${new Date().toLocaleDateString()}

[Company Logo Placeholder]

Thank you for using Nanny Services!
    `.trim();

    // Create blob and download
    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice-${invoice.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen  [font-family:'Poppins',Helvetica] bg-white">
      <div className="max-w-7xl mx-auto space-y-8 p-4 md:p-8">
        
        {/* 1. Notification Banner */}
        <div className="bg-white p-4 rounded-[12px] border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-3">
             <div className="p-2 bg-green-50 text-green-100 rounded-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M20 20H4V4" stroke="#308242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 16.5L12 9L15 12L19.5 7.5" stroke="#308242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
             </div>
             <span className="font-semibold text-gray-700  [font-family:'Poppins',Helvetica]">Complete Your Profile To Get Higher-Paying Jobs</span>
           </div>
           <Link to="/care-giver/account-settings" className=" [font-family:'Poppins',Helvetica] text-red-400 font-medium hover:text-red-500 transition-colors">
             Complete Profile
           </Link>
        </div>

        {/* 2. Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* 3. Middle Section: Payment Methods & Invoices */}
        <div className="grid  [font-family:'Poppins',Helvetica] grid-cols-1 lg:grid-cols-2 gap-6 border rounded-[12px] p-4">
          
          {/* Payment Methods */}
          <div className="space-y-4 ">
             <div className="flex justify-between items-center">
               <h2 className="text-lg font-bold text-gray-800">Payment Methods</h2>
               <button onClick={() => navigate("/care-giver/add-payment-methods") } className="bg-[#FF999A] text-white px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-1 hover:bg-red-500 transition">
                 <Plus size={14} /> Add Payment Method
               </button>
             </div>

             <div className="space-y-3">
                {PAYMENT_METHODS.map((method) => (
                  <div key={method.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div className="flex items-center gap-4">
                       {/* Simple PayPal Icon Placeholder */}
                       <div className="text-blue-700 font-bold text-xl italic">PayPal</div>
                       <div>
                         <p className="text-sm font-bold text-gray-800">{method.email}</p>
                         <div className="flex items-center gap-2 mt-1">
                           <Badge status={method.status} className="text-only" />
                         </div>
                       </div>
                    </div>
                    <div className="flex items-center gap-3">
                       {method.isDefault && (
                         <span className="px-2 py-1 bg-red-50 text-red-400 text-[10px] font-medium rounded-full border border-red-200">Default</span>
                       )}
                       <button
                         onClick={handleSettingsClick}
                         className="p-2 text-gray-800 bg-gray-100 hover:bg-gray-50 rounded-[12px]"
                       >
                         <Settings size={18} />
                       </button>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Invoices */}
          <div className="space-y-4  [font-family:'Poppins',Helvetica]">
             <h2 className="text-lg font-bold text-gray-800">Invoices</h2>
             <div className="space-y-3">
               {INVOICES.map((invoice) => (
                 <div key={invoice.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg text-gray-500">
                        <GrDocumentText size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">Invoice #{invoice.id}</p>
                        <p className="text-xs text-gray-500">{invoice.family}</p>
                        <p className="text-xs font-bold text-gray-900 mt-1">{invoice.amount}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                       <Badge status={invoice.status} />
                       <button
                         onClick={() => handleDownloadInvoice(invoice)}
                         className="p-2 text-gray-800 bg-gray-100 rounded-[12px] hover:text-gray-600"
                       >
                         <Download size={18} />
                       </button>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* 4. Recent Payments Table */}
        <div className="bg-white rounded-[12px]  [font-family:'Poppins',Helvetica] border border-gray-100 shadow-sm overflow-hidden">
          {/* Table Header & Filter */}
          <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
             <h2 className="text-lg font-bold text-gray-800">Recent Payments</h2>
             <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search job or family..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 w-full md:w-64"
                />
             </div>
          </div>

          <div className="overflow-x-auto m-5 mt-0 border rounded-[12px]">
            <table className="w-full  [font-family:'Poppins',Helvetica] text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Family Name</th>
                  <th className="px-6 py-4">Job Title</th>
                  <th className="px-6 py-4">Hours Worked</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  {/* <th className="px-6 py-4 text-center">Action</th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paginatedTransactions.map((row, index) => (
                  <tr 
                    key={row.id} 
                    onClick={() => setSelectedTransaction(row)}
                    className={`border-b hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  }`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-600">{row.date}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{row.family}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.job}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.hours}</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-800">{row.amount}</td>
                    <td className="px-6 py-4">
                      <Badge status={row.status} />
                      <MoreVertical size={16} className="inline text-gray-800 group-hover:text-gray-600" />
                    </td>
                    {/* <td className="px-6 py-4 text-center">
                       <MoreVertical size={16} className="inline text-gray-300 group-hover:text-gray-600" />
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Empty State */}
            {paginatedTransactions.length === 0 && (
              <div className="p-8 text-center text-gray-400 text-sm">
                No transactions found.
              </div>
            )}

            {/* Pagination */}
          </div>
          <div className='px-5 mb-2'>

            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onChange={handlePageChange}
              totalResults={filteredTransactions.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>

      </div>

      {/* Dynamic Modal */}
      <TransactionModal 
        isOpen={!!selectedTransaction} 
        onClose={() => setSelectedTransaction(null)} 
        data={selectedTransaction} 
      />
    </div>
  );
}