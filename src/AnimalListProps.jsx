function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  if (!props.animals) {
    return <div>Loading ...</div>;
  }
  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("l") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

function AnimalListProps() {
  const animals = ["dog", "cat", "chicken", "duck", "lion", "lizard"];
  // const animals = [];
  return (
    <div>
      <h6>Animal: </h6>
      <List animals={animals} />
      {/* <List /> */}
    </div>
  );
}

export default AnimalListProps;
