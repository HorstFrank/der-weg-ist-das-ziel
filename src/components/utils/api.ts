export type Int = number & { __int__: void };

// export type APICharacter = {
//     id: number;
//     name: string;
//     status: "Alive" | "Dead" | "unknown";
//     species: string;
//     type: string;
//     gender: "Female" | "Male" | "Genderless" | "unknown";
//     origin: {
//       name: string;
//       url: string;
//     };
//     location: {
//       name: string;
//       url: string;
//     };
//     image: string;
//     episode: string[];
//     url: string;
//     created: string;
//   };

// function convertToCharacter(apiCharacter: APICharacter): Character {
//     // console.log(new Character());
//     // return Object.assign(Character, apiCharacter);
//     return {
//       imgSrc: apiCharacter.image,
//       name: apiCharacter.name,
//       status: apiCharacter.status,
//       species: apiCharacter.status,
//       origin: {
//         name: apiCharacter.origin.name,
//       },
//     };
//   }

// api.php?action=query&list=random&rnnamespace=0&rnlimit=1

export async function getRandomWpPage() {
  const response = await fetch(
    `https://de.wikipedia.org/w/api.php?origin=*&action=query&list=random&rnnamespace=0&format=json&rnlimit=1`
  );
  const result = (await response.json()).query.random[0].title;
  //   console.log(result);
  return result;
  // const firstkey = Object.keys(result)[0];
  // const links = result[firstkey].links.map((item) => item.title);

  // return links;
  //   return "TEST";
}

export async function getWpLinks(name?: string) {
  //https://de.wikipedia.org/w/api.php?origin=*&action=query&prop=links&titles=Weg
  // https://www.mediawiki.org/wiki/API:Links
  let title = name ? name : await getRandomWpPage();

  const response = await fetch(
    // `https://rickandmortyapi.com/api/character${name ? `?name=${name}` : ""}`
    `https://de.wikipedia.org/w/api.php?origin=*&action=query&pllimit=500&format=json&prop=links&titles=${title}`
  );
  const result = (await response.json()).query.pages;
  const firstkey = Object.keys(result)[0];
  const links = result[firstkey].links.map((item) => item.title);

  return { links: links, title: title };
  //   return "TEST";
}
