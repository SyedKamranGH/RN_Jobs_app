import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageURL } from '../../../utils/index';
import { dummyImageUrl } from '../../../constants/dummyUrl';

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
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
      <View>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
    </View>
  );
};

export default Company;
