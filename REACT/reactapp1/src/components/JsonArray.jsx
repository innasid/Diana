const JsonArray = () => {
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
        let n = data.map((x) => (
            <li 
            key={x.id}
            className="list-group-item list-group-item-action list-group-item-info">
                <div>
                    <b>Name: </b>
                    {x.name}
                </div>
                </li>
        ))
        return <ul className ="list-group">{n}</ul>
        }
        return <div>{list()}</div>
    }
export default JsonArray