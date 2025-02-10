import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const dummyImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2YDRyiv2-xSlBBMkU-EBSr2C5VBliRwxsQ&s";

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: !item?.employer_logo ? dummyImageUrl : item?.employer_logo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item?.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
