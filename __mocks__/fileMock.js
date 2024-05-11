jest.mock('react-native-gesture-handler', () => {
  // Mock the necessary exports
  return {
    Swipeable: jest.fn().mockImplementation(() => null),
    DrawerLayout: jest.fn().mockImplementation(() => null),
    State: {},
    ScrollView: jest.fn().mockImplementation(() => null),
    Slider: jest.fn().mockImplementation(() => null),
    Switch: jest.fn().mockImplementation(() => null),
    TextInput: jest.fn().mockImplementation(() => null),
    ToolbarAndroid: jest.fn().mockImplementation(() => null),
    ViewPagerAndroid: jest.fn().mockImplementation(() => null),
    DrawerLayoutAndroid: jest.fn().mockImplementation(() => null),
    WebView: jest.fn().mockImplementation(() => null),
    NativeViewGestureHandler: jest.fn().mockImplementation(() => null),
    TapGestureHandler: jest.fn().mockImplementation(() => null),
    FlingGestureHandler: jest.fn().mockImplementation(() => null),
    ForceTouchGestureHandler: jest.fn().mockImplementation(() => null),
    LongPressGestureHandler: jest.fn().mockImplementation(() => null),
    PanGestureHandler: jest.fn().mockImplementation(() => null),
    PinchGestureHandler: jest.fn().mockImplementation(() => null),
    RotationGestureHandler: jest.fn().mockImplementation(() => null),
  };
});
