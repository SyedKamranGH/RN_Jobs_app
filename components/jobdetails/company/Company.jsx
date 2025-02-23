import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageURL } from '../../../utils/index';

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  const dummyImageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2YDRyiv2-xSlBBMkU-EBSr2C5VBliRwxsQ&s';

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo) ? companyLogo : dummyImageUrl,
          }}
          style={styles.logoImage}
        />
      </View>
    </View>
  );
};

export default Company;
