export default function Card({ title, description}) {
    return(
        <>
            <div className="bg-white border rounded-x1 shadow-md p-6 hover:shadow-lg transition">
                <h2 className="text-x1 font-semibold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </>
    )
    
    
}