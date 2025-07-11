export default function signup(props) {
    return(
        <div className="flex flex-col md:flex-row h-screen m-auto   ">
            <div className="flex flex-col md:w-2/5 justify-center md:bg-gradient-to-br from-[#0A80ED] to-[#000000]">
                <div className="md:relative flex flex-row md:flex-col items-center justify-center ">
                    <img style={{ objectPosition: "0px 8px" }} className="md:relative object-cover invert-100 w-28 md:w-4/5 " src="logo.svg" alt="logo"/>
                    <div className="md:absolute md:w-full flex bottom-0 flex-col gap-2">
                        <h2 className=" text-center  font-sans text-6xl">NEXURA</h2>
                        <p className="hidden md:block text-center ">YOUR ROAD TO NEXT LEVEL AURA</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-3/5 h-4/5 md:h-auto justify-around content-center items-center ">
                <div className=" w-4/5 pt-3 pb-3 text-center  bg-gradient-to-br from-[#0A80ED] to-[#000000]  ">Create Your Nexura Account</div>
                <div className=" pt-3 pb-3 w-4/5 justify-center  flex items-center gap-6 bg-gray-800 "><span><img height="30px" width="30px" src="google.svg" alt=""/></span>Continue with Google</div>
                <div className=" pt-3 pb-3 w-4/5 justify-center  flex items-center gap-8 bg-gray-800 "><span><img height="30px" width="30px" src="apple.svg" alt=""/></span>Continue with Apple</div>
                <div><p>Or</p></div>
                
                <div className=" w-4/5  flex items-center  bg-gray-800 "><input type="name" id="name" className="pt-3 pb-3 pr-8 w-full pl-8 outline-none" autoComplete="name" placeholder="Enter your Name"/></div>
                <div className="   w-4/5 flex items-center  bg-gray-800 "><input type="email" id="email" className="pt-3 pb-3 w-full pr-8 pl-8 outline-none" autoComplete="name" placeholder="Email"/></div>
                <div className=" w-4/5  flex items-center bg-gray-800 "><input type="password" id="password" className="pt-3 pb-3 pr-8 w-full pl-8 outline-none" autoComplete="name" placeholder="Password"/></div>
                 <div className=" w-4/5 pt-3 pb-3 text-center  bg-gradient-to-br from-[#0A80ED] to-[#000000]  ">Join In</div>
            </div>
        </div>
        
    )
}