import React from 'react'

import ReactPaginate from 'react-paginate';
import styles from './pagination.module.css'

 const Pagination = ({setCurrentPage}) => {
  return (
     
          <ReactPaginate
              className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event=>setCurrentPage(event.selected +1)}
        pageRangeDisplayed={5}
        pageCount={9}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    
  )
}

export default Pagination;