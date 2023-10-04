import React, { useEffect, useRef, useState } from "react";
import { IEstate, IEstatesApi } from "../../types";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import styles from "./Dashboard.module.css";
function Dashboard() {
  const [estates, setEstates] = useState<IEstate[]>();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  useEffect(() => {
    async function fetchEstates() {
      const response = await fetch(`http://localhost:3000/estates/`);
      console.log(response.status === 200);
      const { totalPages, currentPage, estates }: IEstatesApi =
        await response.json();
      setEstates(estates);
      setTotalPages(totalPages);
      setCurrentPage(currentPage);
    }
    fetchEstates();
  }, []);
  return (
    <div className={styles.container}>
      <div></div>
      <div>
        {estates?.map((estate) => (
          <Card {...estate} />
        ))}
      </div>
      <div>
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
}

export default Dashboard;
