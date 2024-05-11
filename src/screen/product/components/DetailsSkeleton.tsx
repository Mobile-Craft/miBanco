import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const DetailsSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="column" top={20}>
        <SkeletonPlaceholder.Item
          width="40%"
          height={20}
          borderRadius={4}
          marginBottom={6}
        />
        <SkeletonPlaceholder.Item
          width="50%"
          height={20}
          borderRadius={4}
          marginBottom={6}
        />
        <SkeletonPlaceholder.Item
          width="100%"
          height={20}
          marginTop={40}
          borderRadius={4}
          marginBottom={6}
        />
        <SkeletonPlaceholder.Item
          width="80%"
          height={20}
          marginTop={10}
          borderRadius={4}
          marginBottom={6}
        />
        <SkeletonPlaceholder.Item
          width="90%"
          height={200}
          marginTop={20}
          borderRadius={4}
          marginBottom={6}
        />
        <SkeletonPlaceholder.Item
          width="100%"
          height={20}
          marginTop={20}
          borderRadius={4}
          marginBottom={6}
        />
        <SkeletonPlaceholder.Item
          width="80%"
          height={20}
          borderRadius={4}
          marginBottom={6}
        />
        <SkeletonPlaceholder.Item
          width="0%"
          height={40}
          borderRadius={4}
          marginBottom={6}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
