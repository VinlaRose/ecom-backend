import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

// export const categories = [
//   {
//     _id: uuid(),
//     categoryName: "fiction",
//     description:
//       "literature in the form of prose, especially novels, that describes imaginary events and people",
//   },
//   {
//     _id: uuid(),
//     categoryName: "non-fiction",
//     description:
//       "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
//   },
//   {
//     _id: uuid(),
//     categoryName: "horror",
//     description:
//       "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
//   },
// ];
export const categories = [
  {
    id: uuid(),
    categoryName: "Outdoor",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
      image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"},
  {
    id: uuid(),
    categoryName: "Bedroom",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      image: "https://images.unsplash.com/photo-1606855637183-ea2a00b6f15f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZGRpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
  {
    id: uuid(),
    categoryName: "Carpets",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image: "https://images.unsplash.com/photo-1603913996638-c01100417b4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
      {
        id: uuid(),
        categoryName: "Kitchen",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
          image: "https://images.unsplash.com/photo-1522790979484-0ca297a0b0f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGN1cGJvYXJkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
          {
            id: uuid(),
            categoryName: "Tables",
            description:
              "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
              image: "https://images.unsplash.com/photo-1523658783928-e8287dea21cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
              {
                id: uuid(),
                categoryName: "Chairs",
                description:
                  "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
                  image: "https://images.unsplash.com/photo-1558403058-1ef771a16b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
];