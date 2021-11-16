import { Movie } from '@interfaces/movies.interface';

const movieModel: Movie[] = [
  {
    id: 1,
    title: 'Bell Bottom',
    description: 'Anti-Hijack operation by R&AW against ISI backed terrorists out of Indian soil in 1980s',
    imdbRating: 9,
    cast: ['Akshay Kumar', 'Vaani Kapoor'],
  },
  { id: 2, title: 'Kesari', description: 'Incidents of Anglo-Afghan War by 36 Sikh Regiment', imdbRating: 9, cast: ['Akshay Kumar'] },
  {
    id: 3,
    title: 'Shershaah',
    description:
      'Based on real life incidents of the battle of Kargil in 1999 paying a tribute to the legendary Captain Vikram Batra of the J&K Rifles of the Indian Army',
    imdbRating: 9,
    cast: ['Siddharth Malhotra', 'Kiara Advani'],
  },
  ,
  {
    id: 4,
    title: 'Seal Team Six: The Raid on Osama Bin Laden',
    description: 'The Osama Bin Laden hunt down operation by the US forces in Abottabad, Pakistan',
    imdbRating: 8,
    cast: ['Cam Gigandet', 'Kathleen Robertson'],
  },
];

export default movieModel;
