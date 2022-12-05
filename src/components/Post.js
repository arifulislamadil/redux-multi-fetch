import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../redux/postSlice';

const Post = () => {
    const { posts } = useSelector(state => state.post);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPost())
    }, [])

    const [users, setUsers] = useState(posts.slice(0, 100));
    console.log(users)
    const [pageNumber, setPageNumber] = useState(0)

    const usersPerPage = 10
    const pagesVisited = pageNumber * usersPerPage;

    const pageCount= Math.ceil(users.length/usersPerPage)
    const changePage = ({selected})=>{
        setPageNumber(selected)
    }

    return (
        <div>
           <div>
           {
                users.slice(pagesVisited, pagesVisited + usersPerPage).map(user =>
                    <div className='single-grid'>
                        <h3>{user.title}</h3>
                    </div>
                )
            }
           </div>


            <ReactPaginate>
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount ={pageCount}
                breakLabel={"........."}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName = {"previousBttn"}
                nextLinkClassName = {"nextBttn"}
                disabledClassName = {"paginationDisabled"}
                activeClassName = {"PaginationActive"}
            </ReactPaginate>
        </div>


    );
};

export default Post;