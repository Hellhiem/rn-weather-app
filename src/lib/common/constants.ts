import { Dimensions } from 'react-native';

export const constants = {
  baseUrl: 'https://us-central1-mobile-assignment-server.cloudfunctions.net/',
  deviceDimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};
