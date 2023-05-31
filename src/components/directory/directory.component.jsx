import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'beauty',
    imageUrl:'https://images.selfridges.com/is/image/selfridges/230406_BEAUTY_CLP_HERO_BEAUTYDISCOVERIES.png?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    route:'shop/beauty',
  },
  {
    id: 2,
    title: 'kids',
    imageUrl: 'https://images.selfridges.com/is/image/selfridges/230321_KIDS_MARC_JACOBS_HERO_SLIDER?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    route:'shop/kids',
  },
  {
    id: 3,
    title: 'life',
    imageUrl:'https://images.selfridges.com/is/image/selfridges/230320_SPRING_ENTERTAINING_HOME_HERO_SLIDER?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    route:'shop/life',
  },
  {
    id: 4,
    title: 'women',
    imageUrl: 'https://images.selfridges.com/is/image/selfridges/230313_SS23-WW_HERO_SLIDER?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    route:'shop/women',
  },
  {
    id: 5,
    title: 'men',
    imageUrl: 'https://images.selfridges.com/is/image/selfridges/230313_SS23-MW_HERO_SLIDER?wid=1367&fmt=jpg&fit=constrain&qlt=95,1',
    route:'shop/men',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
