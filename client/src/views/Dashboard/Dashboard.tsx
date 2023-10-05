import React, { useEffect, useState } from "react";
import { IEstate, IEstatesApi } from "../../types";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import styles from "./Dashboard.module.css";
import Header from "../../components/Header";
function Dashboard() {
  const [estates, setEstates] = useState<IEstate[]>();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPageState, setCurrentPageState] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  useEffect(() => {
    async function fetchEstates() {
      const response = await fetch(
        `http://localhost:3000/estates/?page=${currentPageState}&pageSize=${itemsPerPage}`
      );
      console.log(response.status === 200);
      const { totalPages, estates }: IEstatesApi = await response.json();
      setEstates(estates);
      setTotalPages(totalPages);
    }
    fetchEstates();
  }, [currentPageState, itemsPerPage]);
  const onPageChange = (page: number) => {
    console.log(page);

    setCurrentPageState(page);
  };
  const onPerPageChange = (count: number) => {
    setItemsPerPage(count);
  };
  return (
    <div className={styles.container}>
      <div>
        <Header onPerPageChange={onPerPageChange} itemsPerPage={itemsPerPage} />
      </div>
      <div className={styles.cards}>
        {estates?.map((estate) => (
          <Card key={estate.id} {...estate} />
        ))}
      </div>
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPageState}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default Dashboard;
