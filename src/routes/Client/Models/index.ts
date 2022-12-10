import { StackNavigationProp } from "@react-navigation/stack"

export type propsNavigationStackHome = {
    Home: undefined,
    EventType: {
        name: string
    }
}

export type propsStackHome = StackNavigationProp<propsNavigationStackHome>