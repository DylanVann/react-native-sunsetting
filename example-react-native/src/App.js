import React from 'react'
import { Image } from 'react-native'
import First from './First'
import Second from './Second'
import InfoIcon from './images/InformationCircle'
import InfoIconOutline from './images/InfomationCircleOutline'
import Checkbox from './images/Checkbox'
import CheckboxOutline from './images/CheckboxOutline'
import { createBottomTabNavigator } from 'react-navigation'

const ICONS = {
    First: {
        icon: InfoIconOutline,
        iconSelected: InfoIcon,
    },
    Second: {
        icon: CheckboxOutline,
        iconSelected: Checkbox,
    },
}

export default createBottomTabNavigator(
    {
        First,
        Second,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                const icons = ICONS[routeName]
                const icon = icons[focused ? 'iconSelected' : 'icon']
                return (
                    <Image
                        source={icon}
                        style={{ width: 22, height: 22, tintColor }}
                    />
                )
            },
        }),
        tabBarOptions: {
            shifting: true,
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    },
)
