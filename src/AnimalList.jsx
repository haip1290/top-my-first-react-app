function AnimalList() {
  let animals = ["lion", "cow", "lizard", "snake"];
  return (
    <div>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}

export default AnimalList;
