import SectionTitle from "../Shared/SectionTitle";
import service1 from '../../assets/Service/Library 1.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
const Service = () => {
    let [bookCategory, setBookCategory] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setBookCategory(data))
    }, [])
    return (
        <div className="">
            <div className="flex flex-col mt-4  md:flex-row px-4 md:px-12 ">
                <div className="md:w-[50%]">
                    <img className="rounded-lg h-[88%]" src={service1} alt="" />
                </div>
                <div className="md:h-[80%]   md:w-[50%]  ">
                    <h1 className="text-4xl text-left font-semibold my-4">Our Services</h1>
                    <h3 className="text-xl font-bold text-left">📚 Online Library Service 📚</h3>
                    <p>
                        Our online library provides access to a vast collection of books available for purchase. Browse various genres, explore new releases, and conveniently buy books online anytime, anywher
                    </p>
                    <Tabs className='mt-4'>
                        <TabList>
                            <Tab>Books Categories</Tab>
                            <Tab>Library Services</Tab> 
                        </TabList>

                        <TabPanel>
                            <div className="grid  gap-2 md:grid-cols-2">
                                {
                                    bookCategory.map(book => <div key={book._id} className="card bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <h2 className="card-title">{book.name}</h2>
                                            <p>{book.description}</p>

                                        </div>
                                    </div>)
                                }
                            </div>

                        </TabPanel>
                        <TabPanel >
                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="border-2 border-orange-700 p-4 space-y-2">
                                    <h3 className="text-xl font-bold">Basic Services:</h3>
                                    <p>Book Lending & Borrowing </p>
                                    <p>Reading Rooms</p>
                                    <p>Reference Services </p>
                                    <p>Catalog & Search System</p>
                                </div>
                                <div className="border-2 border-orange-700 p-4 space-y-2">
                                    <h3 className="text-xl font-bold">Digital & Online Services:
                                    </h3>
                                    <p>E-Book & Audiobook Access </p>
                                    <p>Online Book Reservation</p>
                                    <p>Free Wi-Fi & Internet Access </p>
                                    <p>Digital Archives</p>
                                </div>

                                <div className="border-2 border-orange-700 p-4 space-y-2">
                                    <h3 className="text-xl font-bold">Educational & Community Services:
                                    </h3>
                                    <p>Workshops & Training</p>
                                    <p>Storytelling Sessions</p>
                                    <p>Book Clubs </p>
                                    <p>Author Events & Book Signings </p>
                                </div>

                                <div className="border-2 border-orange-700 p-4 space-y-2">
                                    <h3 className="text-xl font-bold">Additional Services:
                                    </h3>
                                    <p>Printing & Photocopying</p>
                                    <p>Study & Discussion Rooms</p>
                                    <p>Career Guidance & Counseling</p>
                                    <p>Language Learning Programs</p>
                                </div>

                            </div>

                        </TabPanel>

                    </Tabs>

                </div>
            </div>
        </div>
    );
};

export default Service;