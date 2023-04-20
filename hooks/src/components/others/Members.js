//import './Members.css';

function Members() {
    const membersList = [
    {
        "id": 1,
        "first_name": "Michaeline",
        "age": 58
        }, {
        "id": 2,
        "first_name": "Alvin",
        "age": 5
        }, {
        "id": 3,
        "first_name": "Binni",
        "age": 68
        }, {
        "id": 4,
        "first_name": "Raimondo",
        "age": 92
        }, {
        "id": 5,
        "first_name": "Cammy",
        "age": 3
        }, {
        "id": 6,
        "first_name": "Margi",
        "age": 57
        }, {
        "id": 7,
        "first_name": "Peadar",
        "age": 43
        }, {
        "id": 8,
        "first_name": "Angelika",
        "age": 32
        }, {
        "id": 9,
        "first_name": "Devland",
        "age": 97
        }, {
        "id": 10,
        "first_name": "Hillary",
        "age": 57
    }
    ];

    const filteredList = membersList.filter((member) => {
        return member.age < 50;
    });
    const list = filteredList.map((member) => {
      return  <li><strong>name: </strong> {member.first_name}, 
                  <strong> age: </strong> {member.age}
              </li>; 
      });


  return (
    <ul>
      {list}
    </ul>
  );
}

export default Members;
