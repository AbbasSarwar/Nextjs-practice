const User = () => {
    return (
        <div className="flex flex-row justify-center items-center flex-wrap h-screen transition duration-300 odd:b">
            <div className="md:w-fit bg-green-100 h-96">
                box 1
            </div>
            <div className="flex-1 bg-yellow-200 h-96">
                box 2
            </div>
            <div className="flex-1 sm:w-8 bg-slate-100 h-96">
                box 3
            </div>
            <div className="flex-1 bg-gray-400 h-96">
                box 4
            </div>
        </div>
    )
}
export default User;