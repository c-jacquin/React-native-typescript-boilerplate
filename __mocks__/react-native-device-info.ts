import deviceInfoMock from 'react-native-device-info-mock'

export default {
    ...jest.genMockFromModule('react-native-device-info'),
    ...deviceInfoMock,
}
