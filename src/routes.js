import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import main from './pages/Main'

const Routes = createAppContainer(
    createSwitchNavigator({
        main
    })
);

export default Routes;