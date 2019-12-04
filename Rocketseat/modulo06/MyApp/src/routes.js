import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      // Posiciona elementos do header no centro
      // Por padrão, no Android, este alinhamento é pela esquerda
      headerLayoutPreset: 'center',
      // Desabilita o nome da página anterior, deixando somente o ícone de voltar
      headerBackTitleVisible: false,
      // Opções default do header
      defaultNavigationOptions: {
        // Css do header
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        // Cor de todos os elementos do header como texto
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
