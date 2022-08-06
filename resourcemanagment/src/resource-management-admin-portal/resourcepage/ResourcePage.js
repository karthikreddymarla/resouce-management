import React, { useState, useEffect, useMemo } from "react";

import styles from "./ResourcePage.module.css";

import { useTable } from "react-table";
import { useParams, useNavigate, Link } from "react-router-dom";

const ResourcePage = () => {
  const [resourceItems, setResourceItems] = useState([]);
  const [search, setSearch] = useState("");
  const [away, setAway] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  console.log("id receieved", id);

  var resourceDataResponse;
  let rawdata = [
    {
      createdAt: "2022-08-01T08:24:14.476Z",
      title: "Architect",
      description:
        "Aut eum id id. Eos recusandae iure impedit dolores a magni at. Et aut consequatur rerum amet quisquam aliquam.",
      link: "http://impish-code.info",
      id: "1",
    },
    {
      createdAt: "2022-08-01T23:00:27.554Z",
      title: "Strategist",
      description:
        "Officiis placeat dignissimos fuga autem. Sed veniam ratione consequatur rerum necessitatibus reiciendis cumque facere et. Aut et accusantium ea ullam ut aut dolorem.",
      link: "http://pushy-oatmeal.biz",
      id: "2",
    },
    {
      createdAt: "2022-08-01T07:32:00.803Z",
      title: "Liaison",
      description:
        "Officia et aut. Quasi voluptatibus fugit eaque nihil id et rem. Dolorem totam pariatur ut aperiam sit.",
      link: "http://deep-billboard.org",
      id: "3",
    },
    {
      createdAt: "2022-08-01T18:58:06.080Z",
      title: "Associate",
      description:
        "Dolorem quis voluptas. Incidunt corrupti vitae ullam cum quod atque labore nulla. Quis quaerat qui eius. Dolorem sunt perferendis consequatur. Accusantium consectetur deserunt vel quod doloribus quia. Veritatis occaecati est aut ex iste perferendis aperiam aut.",
      link: "https://offensive-cruise.name",
      id: "4",
    },
    {
      createdAt: "2022-08-01T16:46:30.756Z",
      title: "Liaison",
      description:
        "A possimus beatae quod. Blanditiis in ullam vitae est dolores. Tenetur dolores provident est ratione. Nihil autem nam possimus.",
      link: "https://upright-best-seller.net",
      id: "5",
    },
    {
      createdAt: "2022-08-02T01:40:24.407Z",
      title: "Analyst",
      description:
        "Consequatur aperiam veritatis beatae. Doloribus occaecati molestias iusto. Sapiente voluptas nihil inventore unde quisquam harum omnis dignissimos sunt.",
      link: "http://loose-hello.biz",
      id: "6",
    },
    {
      createdAt: "2022-08-01T13:50:35.567Z",
      title: "Designer",
      description:
        "Minima dicta reiciendis. Voluptatem repellendus sapiente a. Corrupti tenetur repellendus earum corporis. Eius dolor velit et voluptatibus. Dolores quo dolorem vitae. Esse ipsa sequi et distinctio voluptates voluptate inventore vel.",
      link: "https://authorized-span.info",
      id: "7",
    },
    {
      createdAt: "2022-08-02T03:03:52.195Z",
      title: "Assistant",
      description:
        "Unde in doloremque unde quo officia est nemo. Autem dolorem itaque velit accusamus delectus. Temporibus ut ut labore sit excepturi dicta vero vel fugiat. Magnam amet optio. Illo sapiente ut velit saepe.",
      link: "http://cuddly-pilgrimage.net",
      id: "8",
    },
    {
      createdAt: "2022-08-01T23:07:58.417Z",
      title: "Orchestrator",
      description:
        "Asperiores doloribus et rerum voluptatem. Et praesentium rerum qui minus. Accusantium velit sit illo. Rerum molestias et modi nisi fugit esse sequi. Molestias voluptate harum ut sunt quis reiciendis adipisci ut est. Ducimus reiciendis magnam qui dolorem at aut rerum.",
      link: "http://insecure-win.com",
      id: "9",
    },
    {
      createdAt: "2022-08-01T06:44:08.926Z",
      title: "Assistant",
      description:
        "Nihil eveniet sed earum quia officia modi non. Et excepturi doloremque doloribus ad unde. Sint accusamus dolor aliquid omnis dolorem. Harum quo alias modi ut est qui. Fugiat itaque eveniet.",
      link: "http://striped-fawn.org",
      id: "10",
    },
    {
      createdAt: "2022-08-02T02:13:03.824Z",
      title: "Manager",
      description:
        "Perferendis voluptatem quia recusandae qui iure iure rerum. Quis dolore porro recusandae ipsum quas hic placeat. Voluptas non laudantium eum in velit ut dolorum neque. Corrupti recusandae voluptas expedita minus cupiditate voluptatem temporibus qui commodi. Mollitia ut qui ea consequatur sit voluptates quibusdam enim qui.",
      link: "https://quirky-skull.com",
      id: "11",
    },
    {
      createdAt: "2022-08-01T09:14:36.357Z",
      title: "Developer",
      description:
        "Quae quidem et voluptas saepe est officia. Nam voluptatem ut qui dolores aut id expedita quidem. Omnis dolor quia et autem et. Vero non non aut ab omnis officiis. Deleniti consequatur nemo non quasi et suscipit tempore ut id.",
      link: "https://humble-hearth.name",
      id: "12",
    },
    {
      createdAt: "2022-08-02T00:00:50.344Z",
      title: "Designer",
      description:
        "Incidunt cumque expedita. Eveniet mollitia aut pariatur atque iste eos voluptate quod omnis. Necessitatibus aspernatur aut sunt. Nulla culpa ea et non tempora consequatur.",
      link: "http://outlandish-honor.net",
      id: "13",
    },
    {
      createdAt: "2022-08-01T06:46:29.529Z",
      title: "Coordinator",
      description:
        "Et qui impedit est itaque quam. Officia quos ea dolorum qui qui ab repellat est porro. Id dolores rerum explicabo. Perspiciatis doloribus officiis praesentium.",
      link: "https://black-contrary.biz",
      id: "14",
    },
    {
      createdAt: "2022-08-01T10:38:07.101Z",
      title: "Liaison",
      description:
        "Et sunt deserunt sit beatae occaecati eum quis. Dolorem alias aliquid sed eum provident quam aut ut. Magnam et cupiditate aut nemo quibusdam quasi earum ab. Nam dignissimos qui dolor eos.",
      link: "https://favorite-landing.biz",
      id: "15",
    },
    {
      createdAt: "2022-08-01T08:37:20.306Z",
      title: "Producer",
      description:
        "Consequatur est consequatur. Ea itaque et similique ipsum voluptatem quia et quisquam. Non consectetur et dolor pariatur voluptatem nihil officiis. Repudiandae voluptate voluptatibus ut sit ad iure vel saepe qui. Quidem consequatur fuga similique. Eius occaecati tempore eaque fugit repudiandae omnis in in.",
      link: "https://squiggly-discourse.name",
      id: "16",
    },
    {
      createdAt: "2022-08-01T19:44:33.906Z",
      title: "Architect",
      description:
        "Facere et eligendi placeat quis. Distinctio itaque sint velit debitis. Qui tenetur et quidem autem quaerat. Ut cupiditate autem aperiam illo aut enim. Numquam harum cumque unde dolorem nam.",
      link: "http://trained-meal.biz",
      id: "17",
    },
    {
      createdAt: "2022-08-01T09:17:28.756Z",
      title: "Representative",
      description:
        "Id distinctio non eos laborum expedita commodi sunt. Officia labore error qui id labore aut quasi. Est maiores architecto mollitia omnis unde vitae ut. Qui et nihil vel neque neque reiciendis atque natus dicta.",
      link: "http://frightening-honesty.org",
      id: "18",
    },
    {
      createdAt: "2022-08-01T14:53:56.729Z",
      title: "Producer",
      description:
        "Rerum earum quo. Eius optio autem provident illum ut aut. Assumenda qui nihil. Quidem quaerat rerum autem praesentium consequatur quis consequatur in sequi. Natus quas impedit iste enim id iusto nihil voluptates. Natus optio dolorem repellendus corrupti quo.",
      link: "http://flustered-loneliness.info",
      id: "19",
    },
    {
      createdAt: "2022-08-01T19:21:11.282Z",
      title: "Manager",
      description:
        "Perferendis doloremque ab ut error dolorem. Consectetur qui recusandae porro maxime. Qui omnis ab iste rerum ut quas dignissimos. Iusto laudantium minus consequatur quia quis qui dolores distinctio voluptatem. Laudantium inventore tempore dignissimos et est aliquid et commodi qui.",
      link: "http://another-countryside.com",
      id: "20",
    },
    {
      createdAt: "2022-08-02T02:35:06.488Z",
      title: "Executive",
      description:
        "Omnis deleniti qui voluptas vel soluta consequatur. Qui rem nostrum dolorem maxime facilis voluptas itaque nihil et. Ea aliquid provident aut dolore quo perspiciatis. Asperiores nesciunt aut numquam aut. Error optio eos hic fuga repellat quo nihil et dolores.",
      link: "https://surprised-civilisation.info",
      id: "21",
    },
    {
      createdAt: "2022-08-01T06:05:53.212Z",
      title: "Analyst",
      description:
        "Consequatur autem qui dolor sit sit ut rerum labore molestiae. Sequi culpa recusandae magnam ratione rerum corrupti dicta. Eius non id. Et cumque itaque sit laudantium fugit rerum consequatur dolor vel.",
      link: "https://little-seep.com",
      id: "22",
    },
    {
      createdAt: "2022-08-01T20:07:25.308Z",
      title: "Associate",
      description:
        "Voluptatum omnis molestiae cumque explicabo possimus atque magni nihil. Est soluta fuga qui consequuntur. Qui nostrum temporibus. Nihil eveniet reiciendis dolore optio necessitatibus ut repudiandae itaque. Amet a quod provident sunt iste est est.",
      link: "https://far-shower.info",
      id: "23",
    },
    {
      createdAt: "2022-08-01T21:12:17.205Z",
      title: "Officer",
      description:
        "Et et numquam nisi velit repellendus magnam. Saepe asperiores id sunt veritatis cum quis sint. Unde a eius ut consequatur aut ad. Maxime veritatis ex qui iusto omnis ab qui nemo. Ut magni ipsam sit. Eligendi omnis veniam veritatis rem sunt commodi.",
      link: "http://wiry-choir.name",
      id: "24",
    },
    {
      createdAt: "2022-08-01T20:26:52.048Z",
      title: "Executive",
      description:
        "Rerum voluptatem error quaerat esse adipisci omnis. Provident inventore nostrum delectus cumque facilis et ut non. Inventore aut officia. Corrupti nesciunt velit asperiores hic id culpa quasi. Libero tempore et repudiandae optio excepturi cumque. Et adipisci molestias dolor eaque vitae asperiores officia.",
      link: "http://white-wake.com",
      id: "25",
    },
    {
      createdAt: "2022-08-02T02:09:33.937Z",
      title: "Planner",
      description:
        "Architecto et provident ab ut dolor nesciunt fugit temporibus. Et incidunt odit iusto iure illo. Molestiae enim quisquam aut quo voluptas repellat. Velit magnam sed. Cupiditate exercitationem sed unde corporis qui.",
      link: "http://doting-thistle.net",
      id: "26",
    },
    {
      createdAt: "2022-08-01T16:07:04.427Z",
      title: "Developer",
      description:
        "Consequatur aut sit doloribus nobis nihil fugit enim minus neque. Doloremque quia dolor ut nihil et ea voluptatem omnis. Provident cum sit doloribus distinctio hic id modi consequatur in. Excepturi est alias et quas ut non consequatur. Est magni in totam reiciendis occaecati sit. Laborum est reiciendis inventore rem deleniti quis sed.",
      link: "https://flashy-noodles.org",
      id: "27",
    },
    {
      createdAt: "2022-08-01T10:13:42.940Z",
      title: "Coordinator",
      description:
        "Modi et odio modi non distinctio illo sit facere. Iste aut praesentium vel vitae pariatur ratione adipisci. Aliquam quidem reiciendis quo voluptatibus rerum est cum ut. Nemo et cum quasi. Odio possimus aspernatur quisquam nostrum voluptatibus expedita.",
      link: "https://phony-transparency.com",
      id: "28",
    },
    {
      createdAt: "2022-08-02T04:48:48.935Z",
      title: "Liaison",
      description:
        "Aspernatur error libero ipsam hic. Accusantium a sapiente fugit eum sed hic enim quo. Quae aut sed at molestiae consequuntur esse. Voluptatem nesciunt qui numquam cumque culpa et. Et odit consequatur cumque distinctio quod magni accusantium labore.",
      link: "http://bare-jaw.com",
      id: "29",
    },
    {
      createdAt: "2022-08-01T11:46:12.728Z",
      title: "Orchestrator",
      description:
        "Minus sed vero tempore nisi qui. Non qui quod voluptatem soluta sed in facere voluptate quos. Nemo tempora inventore deserunt alias iste omnis ea. Velit beatae ut inventore rerum sit quidem deserunt et.",
      link: "http://tan-stranger.name",
      id: "30",
    },
    {
      createdAt: "2022-08-02T01:19:33.435Z",
      title: "Supervisor",
      description:
        "Hic autem officia ex quo et eum corporis. Voluptatem accusamus autem earum recusandae eum vero rerum ex est. Quidem et quia laboriosam est ducimus natus. Nesciunt dolore aliquam error beatae aliquid ut quae rerum. Eum blanditiis sapiente tempora magni a et et consequatur molestiae. Exercitationem possimus sapiente veritatis quibusdam inventore ipsam qui aut.",
      link: "https://poised-knickers.name",
      id: "31",
    },
  ];

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
    //console.log(
    // "resourceDataResponsesssss",
    //  resourceItems && resourceItems.resource_items
    //);
    //let ab = resourceItems;
    //return ab;
    console.log(
      "resourceDataResponsesssss",
      resourceItems && resourceItems.resource_items
    );
    return rawdata;
  });

  useEffect(() => {
    if (!search) {
      fetchData();
    }
  }, []);

  // const data = useMemo(() => {
  //   console.log("resourceItems", resourceItems);
  //   return resourceItems?.resource_items;
  // });

  useEffect(() => {
    console.log("resourceItems", resourceItems);
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
  console.log("table", tableInstance);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    flatRows,
    page,
    rows,
    getPageOptions,
    previousPage,
    nextPage,
    prepareRow,
  } = tableInstance;

  return (
    <div className={styles.resource_container}>
      <div className={styles.anchor_container}>
        <Link to="/">Resources</Link>
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
            <a href="#">{resourceItems.link}</a>
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
            <p>SORT</p>
          </div>
        </div>
      </div>
      <div className="table_container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {flatRows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
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
      <div>
        {/*<button className={styles.button} onClick={() => previousPage()}>
          Previous
        </button>
        <button className={styles.button} onClick={() => nextPage()}>
          Next
          </button>*/}
      </div>
      <div className={styles.button_container}>
        <button
          className={styles.button}
          onClick={() => {
            navigate("/add-item-resource-page");
          }}
        >
          ADD ITEM
        </button>
        <button className={styles.button}>DELETE ITEM</button>
      </div>
    </div>
  );
};

export default ResourcePage;
