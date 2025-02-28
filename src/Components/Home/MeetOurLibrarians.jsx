import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";

const MeetOurLibrarians = () => {
    let [librarians, setLibrarians] = useState([]);
    useEffect(() => {
        fetch('meetLibrarians.json')
            .then(res => res.json())
            .then(data => setLibrarians(data))
    }, [])
    return (
        <div className="mt-8">
            <SectionTitle title={'Meet Our Librarians'}></SectionTitle>
            <div className="flex gap-4 my-5 px-2  items-center flex-col md:flex-row ">
                {librarians.map(librarian => <div key={librarian._id}>
                    <div className=" rounded-xl border-2 border-black p-4  ">
                        <figure >
                            <img className="rounded-xl"
                                width={600} 
                                src={librarian.image}
                                alt="Shoes" />
                        </figure>
                        <div className="p-4  space-y-3">
                            <h2 title={librarian.designation} className="card-title">{librarian.name}</h2> 
                            <p>{librarian.description}</p>
                            <div className="flex"><CiLocationOn size={28}></CiLocationOn> <p>{librarian.location}</p></div>
                            <div className="flex"><FaDollarSign size={28}></FaDollarSign> <p>{librarian.salary}</p></div>
                                <button className="w-full font-bold btn bg-[#F7A582] text-white hover:bg-transparent hover:border-2 hover:border-[#F7A582] hover:text-black">View Profile</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MeetOurLibrarians;