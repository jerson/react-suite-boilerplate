import * as React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import Router from 'react-suite/build/components/router';
import Drawer from 'react-suite/build/components/ui/Drawer';
import DrawerContent from './components/drawer/DrawerContent';
import Main from './Main';
import MainScene from './scenes/MainScene';
import SampleScene from './scenes/SampleScene';

interface Props {
}

interface State {
}

export default class App extends React.Component<Props, State> {
    render() {
        return (
            <Router.Router>
                <Main>
                    <Drawer useTabledMode content={<DrawerContent/>}>
                        <Router.Switch>
                            <Router.Route path='/menu1' component={SampleScene}/>
                            <Router.Route component={MainScene}/>
                        </Router.Switch>
                    </Drawer>
                </Main>
            </Router.Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    } as ViewStyle
});
