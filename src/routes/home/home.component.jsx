import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [

    {
      id: 1,
      title: 'beauty',
      imageUrl:'https://images.selfridges.com/is/image/selfridges/230406_BEAUTY_CLP_HERO_BEAUTYDISCOVERIES.png?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    },
    {
      id: 2,
      title: 'kids',
      imageUrl: 'https://images.selfridges.com/is/image/selfridges/230321_KIDS_MARC_JACOBS_HERO_SLIDER?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    },
    {
      id: 3,
      title: 'life',
      imageUrl:'https://images.selfridges.com/is/image/selfridges/230320_SPRING_ENTERTAINING_HOME_HERO_SLIDER?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    },
    {
      id: 4,
      title: 'women',
      imageUrl: 'https://images.selfridges.com/is/image/selfridges/230313_SS23-WW_HERO_SLIDER?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    },
    {
      id: 5,
      title: 'men',
      imageUrl: 'https://images.selfridges.com/is/image/selfridges/230313_SS23-MW_HERO_SLIDER?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    },
    
  ];

  return <Directory categories={categories} />;
};

export default Home;