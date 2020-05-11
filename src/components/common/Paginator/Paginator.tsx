import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames";
import leftArrowIcon from "./../../../assets/images/leftArrowIcon.svg"
import rightArrowIcon from "./../../../assets/images/rightArrowIcon.svg"

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({
                                          totalItemsCount, pageSize,
                                          currentPage,
                                          onPageChanged,
                                          portionSize = 5
                                      }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <span className={cn(styles.paginator)}>
        <div className={styles.paginatorElements}>
            {<img src={leftArrowIcon} alt=""

                  className={portionNumber > 1 ? styles.button :  styles.buttonHidden }
                  onClick={() => {
                      setPortionNumber(portionNumber - 1)
                  }}/>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <div className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                key={p}
                                onClick={(e) => {
                                    onPageChanged(p);
                                }}>{p}</div>
                })}
            {portionCount > portionNumber &&

            <span>
                      <img src={rightArrowIcon} alt=""
                           className={styles.button}
                           onClick={() => {
                               setPortionNumber(portionNumber + 1)
                           }}/>
                    </span>
            }
        </div>
    </span>
}


export default Paginator;