import { Platform } from 'react-native'

export default Platform.select({
    ios: require('./_ionicons_svg_ios-information-circle.png'),
    android: require('./_ionicons_svg_md-information-circle.png'),
})
