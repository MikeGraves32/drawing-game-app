// components/Card.js
export default function Card({ title, description }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-indigo-700 p-6">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 hover:bg-indigo-600">#nextjs</span>
                <span className="inline-block bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2 hover:bg-indigo-600">#tailwindcss</span>
            </div>
        </div>
    );
}