import { useRouteMatch } from "react-router-dom";

const Pagination = ({paginate, totalNumberOfPosts, postsPerPage}) => {
    const pageNumbers = [];
    let match = useRouteMatch("/:pageNumber");
    let pageNumber = match.params.pageNumber;

    for(let i=1; i<totalNumberOfPosts / postsPerPage; i++)
        pageNumbers.push(i);

    return (
        <ul className="pagination">
            {pageNumbers.map(number => 
                <li key={number} className="pageNumberButton" onClick={() => paginate(number)}>
                    <a href="#" className={(pageNumber==number) ? "active" : ""}>
                        {number}
                    </a>
                </li>)}
        </ul>
    )
}

export default Pagination;