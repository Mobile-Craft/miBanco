import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const HomeSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
        {Array.from({length: 5}).map((_, index) => (
          <SkeletonPlaceholder.Item
            key={index}
            marginTop={10}
            width="90%"
            height={60}
            borderRadius={10}>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
              <SkeletonPlaceholder.Item
                width="100%"
                height={20}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              marginTop={5}
              width="30%"
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
