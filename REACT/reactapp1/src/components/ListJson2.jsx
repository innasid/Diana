const ListJson2 = () => {
    const data = [
{
    id: "001",
    name: "Jill",
    city: "chennai"
},
{
    id: "002",
    name: "Ben",
    city: "Delhi"
},
{
    id: "003",
    name: "Jen",
    city: "Kerala"
},
{
    id: "004",
    name: "Sherin",
    city: "Bombay"
},
    ]

    let list = () => {
        let n = data
          .filter((y) => y.city === "chennai")
          .map((x) => (
            <li className="list-group-item list-group-item-action list-group-item-info">
              <div className="p-2">
                <b>ID: </b>
                {x.id}
              </div>
              <div>
                <b>Name: </b>
                {x.name}
              </div>
              <div>
                <b>City: </b>
                {x.city}
              </div>
            </li>
          ));
        return <ul className="list-group">{n}</ul>;
      };
      return <div>{list()}</div>;
    };
    export default ListJson2;