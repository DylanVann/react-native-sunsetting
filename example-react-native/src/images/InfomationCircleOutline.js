import { Platform } from 'react-native'

export default Platform.select({
    ios: require('./_ionicons_svg_ios-information-circle-outline.png'),
    android: require('./_ionicons_svg_md-information-circle-outline.png'),
})
