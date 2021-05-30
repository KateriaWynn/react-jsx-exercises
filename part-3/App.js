const App = () => (
  <div>
    <Person
      name="Alessandro"
      age="28"
      hobbies={[
        {
          id: 1,
          hobby: 'Dancing',
        },
        {
          id: 2,
          hobby: 'Writing',
        },
      ]}
    />
    <Person
      name="Roger"
      age="27"
      hobbies={[
        {
          id: 1,
          hobby: 'Gardening',
        },
        {
          id: 2,
          hobby: 'Playing football',
        },
      ]}
    />
    <Person
      name="Ketler"
      age="17"
      hobbies={[
        {
          id: 1,
          hobby: 'Playing video games',
        },
        {
          id: 2,
          hobby: 'Playing basketball',
        },
      ]}
    />
  </div>
);
