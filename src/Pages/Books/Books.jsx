import { useEffect, useState } from "react";
import banner from '../../assets/Service/Library 1.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from "./bookCard";
import UseAxiosSecure from "../../Components/Hooks/UseAxiosSecure";
const Books = () => {
    let axiosSecure = UseAxiosSecure();
    let [books, setBooks] = useState([]);
    let [cards, setCards] = useState([]);
    let categories = ['Freelancing'];
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        if (!categories.includes(book.category)) {
            categories.push(book.category);
        };
    };

    let [currentPage, setCurrentPage] = useState(0);
    let [count, setCount] = useState(0);
    let [perPage, setPerPage] = useState(10);


    axiosSecure.get('/bookCount')
        .then(res => setCount(res.data.counted));


    useEffect(() => {
        axiosSecure.get(`/books?page=${currentPage}&size=${perPage}`)
            .then(res => setBooks(res.data))
    }, [currentPage, perPage])



    // axiosSecure.get(`/books`)
    //     .then(res => setBooks(res.data))



    let pages = [...Array(Math.ceil(count / perPage)).keys()];
    console.log(pages)

    let handleBooks = (e) => {
        setCurrentPage(0);
        let datas = books.filter(cate => e === cate.category);
        return setCards(datas);

    }



    return (
        <div>

            <div>
                <div
                    className="hero  min-h-screen"
                    style={{
                        backgroundImage: `url(${banner})`,
                    }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Our Books</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tabs */}
            <div className="mt-4">
                <Tabs>
                    <TabList>
                        <Tab>
                            All Books
                        </Tab>
                        {
                            categories.map(category => <Tab key={category} onClick={() => handleBooks(category)}>{category}</Tab>)
                        }
                    </TabList>

                    <TabPanel >
                        <BookCard books={books}></BookCard>
                    </TabPanel>
                    <TabPanel>
                        <BookCard books={cards}></BookCard>
                    </TabPanel>
                    <TabPanel>
                        <BookCard books={cards}></BookCard>
                    </TabPanel>
                    <TabPanel>
                        <BookCard books={cards}></BookCard>
                    </TabPanel>
                    <TabPanel>
                        <BookCard books={cards}></BookCard>
                    </TabPanel>
                    <TabPanel>
                        <BookCard books={cards}></BookCard>
                    </TabPanel>
                    <TabPanel>
                        <BookCard books={cards}></BookCard>
                    </TabPanel>
                    <TabPanel>
                        <BookCard books={cards}></BookCard>
                    </TabPanel>

                </Tabs>
                <div className="text-center my-6">
                    {
                        pages.map(page => (<button onClick={() => setCurrentPage(page)}

                            className={`btn mr-4 border-2  ${page === currentPage ? 'bg-blue-500 text-white' : ''} px-8 text-center`}>{page}</button>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Books;