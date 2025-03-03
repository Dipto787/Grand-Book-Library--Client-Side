 
const BookCard = ({books}) => {
    return (
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
                </div>
                )
            }
        </div>
    );
};

export default BookCard;