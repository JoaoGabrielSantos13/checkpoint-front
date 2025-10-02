export default function Card({ title, description}) {
    return(
        <>
            <div className="bg-white border rounded-x1 shadow-md p-6 hover:shadow-lg duration-300 rounded-2xl transition-shadow flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">{title}</h2>
                <p className="text-gray-600 lg:text-[18px]">{description}</p>
            </div>
        </>
    )
    
    
}