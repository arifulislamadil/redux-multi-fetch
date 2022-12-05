import React from 'react';
import { Pagination } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const Paginate = () => {
    const persons = [33, 44,]
    const handlePageClick = (data) => {
        console.log(data.selected);
    }

    return (
        <div>
            <ReactPaginate
                previousLabel={"Previous Page"}

                nextLabel={"Next Page"}
                breakLabel={"........."}
                pageCount={10}
                marginPagesDisplayed={3}
                pageRangeDisplayed={6}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}

            />



            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
};

export default Paginate;