const movie = {
  id: "tt0084787",
  title: "The Thing",
  rating: "R",
  year: 1982,
  director: "John Carpenter",
  cast: ["Kurt Russell", "Keith David", "Wilford Brimley"],
  musicBy: "Ennio Morricone",
  extras: [
    "Bob Smith",
    { chef: "John Jones", waitress: "Mary Roberts" },
    "Jon Doe"
  ],
  details: function() {
    console.log(
      `${this.title} was released in ${this.year} and is rated ${this.rating}`
    );
  },
  arrow: () => {
    console.log(
      `${movie.title} was released in ${movie.year} and is rated ${movie.rating}`
    );
  }
};

const key = "year";

console.log(movie.title);
console.log(movie.director);
console.log(movie.cast[1]);
console.log(movie[key]);
console.log(movie["musicBy"]);
console.log(movie.extras[1].waitress);

movie.details();
movie.arrow();

for (let detail in movie) {
  console.log(`${detail} for ${movie.title} equals ${movie[detail]}`);
}
