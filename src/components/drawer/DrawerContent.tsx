import * as React from 'react';
import { ScrollViewStyle, StyleSheet, ViewStyle } from 'react-native';
import { _, ScrollView } from 'react-suite';
import View from 'react-suite/build/components/ui/View';
import DrawerHeader from 'react-suite/build/components/ui/DrawerHeader';
import DrawerFooter from 'react-suite/build/components/ui/DrawerFooter';
import DrawerItem, { DrawerItemProps } from 'react-suite/build/components/ui/DrawerItem';
import StatusBarView from 'react-suite/build/components/ui/StatusBarView';

const PropTypes = require('prop-types');

interface Props {}

interface State {}

export default class DrawerContent extends React.Component<Props, State> {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    drawer: PropTypes.object.isRequired
  };

  getItems(): DrawerItemProps[] {
    return [
      {
        icon: 'home',
        name: _('Home'),
        onPress: this.goTo.bind(this, '/')
      },
      {
        isHeader: true,
        name: _('Categories')
      },
      {
        icon: 'face',
        name: _('Menu 1'),
        onPress: this.goTo.bind(this, '/menu1')
      }
    ];
  }

  goTo(path: string) {
    this.context.router.history.push(path);
    this.context.drawer && this.context.drawer.close();
  }

  render() {
    let items = this.getItems();

    let logo = {
      uri: 'https://image.ibb.co/k8c9Nk/logo.png'
    };

    return (
      <View style={styles.container}>
        <StatusBarView />
        <DrawerHeader style={styles.header} logo={logo} />
        <ScrollView style={styles.content}>
          {items.map((item: DrawerItemProps) => {
            return <DrawerItem key={item.name} {...item} />;
          })}
        </ScrollView>
        <DrawerFooter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingTop: 10
  } as ViewStyle,
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  } as ViewStyle,
  container: {
    flex: 1,
    backgroundColor: '#fff'
  } as ViewStyle,
  content: {
    flex: 1
  } as ScrollViewStyle
});
