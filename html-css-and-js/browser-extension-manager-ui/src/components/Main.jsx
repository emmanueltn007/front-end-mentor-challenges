import axios from "axios";
import { useState, useEffect } from "react";

function Main () {
    const [extensionList, setExtensionList] = useState([]);

    useEffect(() => {
        axios.get('../../data.json')
            .then((response) => {
                setExtensionList(response.data);
            })
    });
    
    return (
        <main>
            <div className="flex justify-between items-center">
                <h1>
                    Extensions List
                </h1>
                <div className="flex gap-4">
                    <span>All</span>
                    <span>Active</span>
                    <span>Inactive</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {extensionList.map((extension) => {
                        return (
                            <div className="bg-[hsl(200,60%,99%)] rounded-xl p-2" key={extension.name}>
                                <div className="flex">
                                    <div>
                                        <img src={extension.logo} alt="" />
                                    </div>
                                    <div>
                                        <span>
                                            {extension.name}
                                        </span>
                                        <p>
                                            {extension.description}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button className="px-4 py-2 border border-[hsl(226,11%,37%)] rounded-3xl">
                                        Remove
                                    </button>
                                    <div></div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </main>
    );
}

export default Main