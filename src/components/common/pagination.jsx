import React from 'react'

export default function Pagination(props) {
    const { itemCount, pageSize,onPageChange } = props;
    const pagesCount = itemCount / pageSize;
    const pages=[];
    for (let step = 1; step < pagesCount + 1; step++)
     {
        pages.push(step)
    }



    return (
    
        <nav aria-label="Page navigation example">
            
            <ul className="pagination">
                {pages.map(page =>
                    <li key={page} className="page-item"><a onClick={()=>onPageChange(page)} className="page-link" >{page}</a></li>
                
                )}
                </ul>
            
            </nav>
    )
}
