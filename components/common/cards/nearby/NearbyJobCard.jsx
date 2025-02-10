import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './nearbyjobcard.style';

const NearbyJobCard = ({ job, handleNavigate }) => {
  const dummyImageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2YDRyiv2-xSlBBMkU-EBSr2C5VBliRwxsQ&s';

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: !job?.employer_logo ? dummyImageUrl : job?.employer_logo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
