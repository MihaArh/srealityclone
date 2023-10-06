import { ChangeEvent } from "react";

import styles from "./Header.module.css";
const PER_PAGE = [5, 10, 20, 50, 100];
interface HeaderProps {
  itemsPerPage: number;
  onPerPageChange: (value: number) => void;
}
function Header({ onPerPageChange, itemsPerPage }: HeaderProps) {
  const handleItemsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedItemsPerPage = parseInt(e.target.value, 10);
    onPerPageChange(selectedItemsPerPage);
  };

  return (
    <div className={styles.container}>
      <div>SReality</div>
      <div>
        <label htmlFor="numbers">Items shown per page: </label>
        <select
          id="numbers"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          {PER_PAGE.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
