import LoginBtn from "./loginbtn";

function Nav1() {
    return (
        <>
            <div className="flex p-4 bg-[#ffffff] fixed top-0 left-0 right-0 z-50">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Logo"></img>
                <input type="text" className="border ml-5 block w-1/2 p-2.5 rounded-[1vh] bg-[#f0f5ff]" placeholder="Search for Products, Brands and More"></input>
                <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="h-[4vh] mt-2 ml-7" alt="Search Icon"></img>
                <LoginBtn className="mt-3 ml-2"/>
                <img src="https://svgsilh.com/svg/294547.svg" className="h-[3vh] mt-3 ml-7" alt="Cart Icon"></img>
                <h3 className="mt-3 ml-2">Cart</h3>
                <img src="https://www.svgrepo.com/show/116417/store.svg" className="h-[3vh] mt-3 ml-7" alt="Seller Icon"></img>
                <h3 className="mt-3 ml-2">Become a Seller</h3>
                <h3 className="mt-3 ml-[10vh]">:</h3>
            </div>
        </>
    );
}

export default Nav1;