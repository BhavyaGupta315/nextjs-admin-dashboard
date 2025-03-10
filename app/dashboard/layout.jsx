const { default: Navbar } = require("../_ui/dashboard/navbar/navbar")
const { default: Sidebar } = require("../_ui/dashboard/sidebar/sidebar")

const layout = ({children})=>{
    return <div className="flex">
        <div className="flex-1 bg-[#182237] p-5">
            <Sidebar/>
        </div>
        <div className="flex-4 p-5">
            <Navbar/>
            {children}
        </div>
    </div>
}

export default layout;