import { Platform } from 'react-native'

export default Platform.select({
    ios: require('./_ionicons_svg_ios-checkbox.png'),
    android: require('./_ionicons_svg_md-checkbox.png'),
})
