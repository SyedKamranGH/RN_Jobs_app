import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';

import Company from '../../components/jobdetails/company/Company';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refresh } = useFetch('job-details', {
    job_id: params?.id,
  });
  //   console.log('params -----> ', params?.id, data);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              //   handlePress={() => router.back()}
            />
          ),
          headerTitle: '',
        }}
      ></Stack.Screen>
    </SafeAreaView>
  );
};

export default JobDetails;
