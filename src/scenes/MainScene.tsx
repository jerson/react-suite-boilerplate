import * as React from 'react';
import { _, Header } from 'react-suite';
import SceneContainer from '../ui/SceneContainer';
import Container from 'react-suite/build/components/ui/Container';
import Title from 'react-suite/build/components/ui/Title';
import Text from 'react-suite/build/components/ui/Text';

const PropTypes = require('prop-types');

interface Props {}

interface State {}

export default class MainScene extends React.Component<Props, State> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    drawer: PropTypes.object.isRequired
  };

  render() {
    return (
      <SceneContainer>
        <Header title={_('React Suite Boilerplate')} />
        <Container>
          <Title center size='large'>{_('Welcome')}</Title>

          <Text>{_('code now')}</Text>
        </Container>
      </SceneContainer>
    );
  }
}
