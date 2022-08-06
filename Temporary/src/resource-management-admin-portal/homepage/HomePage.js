import React, { useState, useEffect } from "react";
import Card from "./CardComponent/Card";
import IndividualTab from "./IndividualTabComponent/IndividualTab";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [tabs, setTabs] = useState({
    resource: "resource",
    request: "",
    user: "",
  });
  const [resourcesData, setResourcesData] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    );
    console.log("data aat", data);
    const resourceDataResponse = await data.json();
    setResourcesData(resourceDataResponse);
  };

  const handleTabClick = (input) => {
    setSearch("");
    console.log(input);
    if (input === "resource") {
      setTabs({ resource: input, request: "", user: "" });
    } else if (input === "request") {
      setTabs({ resource: "", request: input, user: "" });
    } else {
      console.log("in", input);
      setTabs({ resource: "", request: "", user: input });
    }
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
    const filterData = resourcesData.filter((value) => {
      return value.title.toLowerCase().includes(e.target.value);
    });
    console.log("filterData", filterData);
    setResourcesData(filterData);
  };

  const handleClickCard = (selectedID) => {
    console.log("clicked", navigate);
    navigate(`/resource-page/${selectedID}`);
  };

  useEffect(() => {
    if (!search) fetchData();
  }, []);

  return (
    <div className="main">
      <div className={styles.tab_container}>
        {/*<div
          className={styles.tabs}
          onClick={() => {
            handleTabClick("resource");
          }}
        >
          Resources
        </div>
        <div
          className={styles.tabs}
          onClick={() => {
            handleTabClick("request");
          }}
        >
          Requests
        </div>
        <div
          className={styles.tabs}
          onClick={() => {
            handleTabClick("user");
          }}
        >
          Users
        </div>*/}
        <IndividualTab
          func={handleTabClick}
          name="Resources"
          fname="resource"
        />
        <IndividualTab func={handleTabClick} name="Requests" fname="request" />
        <IndividualTab func={handleTabClick} name="Users" fname="user" />
      </div>
      <div className={styles.search_bar_container}>
        <input
          type="text"
          placeholder="Search"
          onChange={onInputChange}
          value={search}
          className={styles.input_element}
        />
      </div>
      <div className={styles.card_container}>
        {resourcesData && tabs.resource === "resource"
          ? resourcesData.map((data) => {
              return (
                <Card
                  key={data.id}
                  id={data.id}
                  icon_url={data.icon_url}
                  title={data.title}
                  category={data.category}
                  link={data.link}
                  description={data.description}
                  tag={data.tag}
                  handleClickCard={() => {
                    handleClickCard(data.id);
                  }}
                />
              );
            })
          : tabs.request === "request"
          ? resourcesData
              .filter((data) => data.tag === tabs.request)
              .map((data) => {
                return (
                  <Card
                    key={data.id}
                    id={data.id}
                    icon_url={data.icon_url}
                    title={data.title}
                    category={data.category}
                    link={data.link}
                    description={data.description}
                    tag={data.tag}
                    handleClickCard={() => {
                      handleClickCard(data.id);
                    }}
                  />
                );
              })
          : tabs.user === "user"
          ? resourcesData
              .filter((data) => data.tag === tabs.user)
              .map((data) => {
                return (
                  <Card
                    key={data.id}
                    id={data.id}
                    icon_url={data.icon_url}
                    title={data.title}
                    category={data.category}
                    link={data.link}
                    description={data.description}
                    tag={data.tag}
                    handleClickCard={() => {
                      handleClickCard(data.id);
                    }}
                  />
                );
              })
          : null}
      </div>
    </div>
  );
};

export default HomePage;
