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
  {
    /*we are using it for routing purpose*/
  }

  const fetchData = async () => {
    const data = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    );
    const resourceDataResponse = await data.json();
    setResourcesData(resourceDataResponse);
  };

  const handleTabClick = (input) => {
    setSearch("");

    if (input === "resource") {
      setTabs({ resource: input, request: "", user: "" });
    } else if (input === "request") {
      setTabs({ resource: "", request: input, user: "" });
    } else {
      setTabs({ resource: "", request: "", user: input });
    }
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
    const filterData = resourcesData.filter((value) => {
      return value.title.toLowerCase().includes(e.target.value);
    });
    setResourcesData(filterData);
  };

  const handleClickCard = (selectedID) => {
    navigate(`/resource-page/${selectedID}`);
  };

  useEffect(() => {
    if (!search) fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.tab_container}>
        <IndividualTab
          handle_event={handleTabClick}
          tab_name="Resources"
          argument="resource"
        />
        <IndividualTab
          handle_event={handleTabClick}
          tab_name="Requests"
          argument="request"
        />
        <IndividualTab
          handle_event={handleTabClick}
          tab_name="Users"
          argument="user"
        />
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
