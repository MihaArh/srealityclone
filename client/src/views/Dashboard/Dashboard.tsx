import React, { useEffect, useState } from "react";
import { IEstate, IEstatesApi } from "../../types";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import styles from "./Dashboard.module.css";
import Header from "../../components/Header";
function Dashboard() {
  const [estates, setEstates] = useState<IEstate[]>();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    async function fetchEstates() {
      const response = await fetch(
        `http://localhost:3000/estates/?page=1&pageSize=5`
      );
      console.log(response.status === 200);
      const { totalPages, currentPage, estates }: IEstatesApi =
        await response.json();
      setEstates(estates);
      setTotalPages(totalPages);
      setCurrentPage(currentPage);
    }
    fetchEstates();
  }, []);
  const onPageChange = (page: number) => {
    console.log(page);

    setCurrentPage(page);
  };
  return (
    <div className={styles.container}>
      <div>
        <Header />
      </div>
      <div className={styles.cards}>
        {estates?.map((estate) => (
          <Card key={estate.id} {...estate} />
        ))}
      </div>
      <div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default Dashboard;
