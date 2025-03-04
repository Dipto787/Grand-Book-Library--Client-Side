import { useEffect, useState } from "react";
import banner from '../../assets/Service/Library 1.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from "./bookCard";
const Books = () => {
    let [books, setBooks] = useState([]);
    let [cards, setCards] = useState([]);
    let categories = ['Freelancing'];
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        if (!categories.includes(book.category)) {
            categories.push(book.category);
        };
    };
    useEffect(() => {
        fetch('orginaldata.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    let handleBooks = (e) => {
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
                        <div className='grid px-2 py-8 grid-cols-1 gap-4 md:grid-cols-3  mt-8' >
                            {
                                books.map(book => <div key={book.bookId} className="card p-8 border-2 bg-base-100 w-96 shadow-sm">
                                    <figure>
                                        <img className="h-[300px] bg-transparent"
                                            height={200}
                                            src={book.image} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{book.name}</h2>
                                        <p>{book.details.slice(0, 100)}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
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
            </div>

        </div>
    );
};

export default Books;