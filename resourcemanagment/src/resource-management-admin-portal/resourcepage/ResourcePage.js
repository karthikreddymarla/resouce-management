import React, { useState, useEffect, useMemo } from "react";

import styles from "./ResourcePage.module.css";

import { useTable } from "react-table";
import { useParams, useNavigate, Link } from "react-router-dom";

const ResourcePage = () => {
  const [resourceItems, setResourceItems] = useState([]);
  const [search, setSearch] = useState("");
  const [away, setAway] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  let options = ["Ascending", "Descending", "Recently Added"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const { id } = useParams();
  const navigate = useNavigate();

  var resourceDataResponse;

  const fetchData = async () => {
    const apiData = await fetch(
      `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`,
      {}
    );

    resourceDataResponse = await apiData.json();

    setResourceItems(resourceDataResponse);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
    const filterData = resourceItems.filter((value) => {
      return value.title.toLowerCase().includes(e.target.value);
    });
    setResourceItems(filterData);
  };

  const data = useMemo(() => {
    let tempPage = Math.max(0, page);
    tempPage = Math.min(page, 90 / 6);
    return resourceItems?.resource_items
      ? resourceItems.resource_items
          .sort((a, b) => {
            if (selectedOption === "Ascending")
              return a.title > b.title ? 1 : -1;
            else if (selectedOption === "Descending")
              return a.title < b.title ? 1 : -1;
            else return a.createdAt > b.createdAt ? 1 : -1;
          })
          .slice((tempPage - 1) * 6, tempPage * 6)
      : [];
  });

  useEffect(() => {
    if (!search) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    setAway(resourceItems?.resource_items);
  }, [resourceItems]);

  const columns = useMemo(
    () => [
      {
        Header: "TITLE",
        accessor: "title",
      },
      {
        Header: "DESCRIPTION",
        accessor: "description",
      },
      {
        Header: "LINK",
        accessor: "link",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className={styles.resource_container}>
      <div className={styles.anchor_container}>
        <Link to="/">{"< "}Resources</Link>
      </div>
      <div className={styles.resource_details_container}>
        <div className={styles.icon_title_container}>
          <div className={styles.icon}>
            <img
              className={styles.image}
              src={resourceItems.icon_url}
              alt="image"
            />
          </div>
          <div className={styles.title_category_container}>
            <h4 className="title">{resourceItems.title}</h4>
            <p className="category">{resourceItems.category}</p>
            <a href={resourceItems.link} target={"_blank"}>
              {resourceItems.link}
            </a>
          </div>
        </div>

        <div className={styles.description_container}>
          <p href="#">{resourceItems.description}</p>
        </div>
      </div>
      <div className={styles.update_button_container}>
        <a href="#">Update</a>
      </div>
      <div className={styles.items_container}>
        <p>Items</p>
        <div className={styles.search_sort_container}>
          <div className={styles.search_bar_container}>
            <input
              type="text"
              placeholder="Search"
              onChange={onInputChange}
              value={search}
              className={styles.inputSearchBar}
            />
          </div>
          <div className="sortby_container">
            <select onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
              <option value="Recently Added">Recently Added</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table_container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th></th>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  <input
                    type={"checkbox"}
                    onClick={() => {
                      let temp = checked;
                      if (temp.indexOf(row.id) !== -1)
                        temp.splice(temp.indexOf(row.id), 1);
                      else temp.push(row.id);
                      setIsChecked(temp.length !== 0);
                      setChecked(temp);
                    }}
                  />
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.table_button_container}>
        {/*{pages}*/}
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {"<"}
        </button>
        <button>{page - 1}</button>
        <button>{page}</button>
        <button>{page + 1}</button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {">"}
        </button>
      </div>
      <div className={styles.button_container}>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/add-item-resource-page");
          }}
          disabled={isChecked}
        >
          ADD ITEM
        </button>
        <button className={styles.button} disabled={!isChecked}>
          DELETE ITEM
        </button>
      </div>
    </div>
  );
};

export default ResourcePage;
