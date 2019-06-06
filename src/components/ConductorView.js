import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import ListadoColas from './ListadoColas';
import BotonColasSolicitadas from './BotonColasSolicitadas';
import { Container, Icon } from 'native-base';
//import MenuConductor from '../components/MenuConductor';

class ConductorView extends React.Component {

  static navigationOptions = {
    header: null,
    drawerLabel: 'Conductor',
    drawerIcon: ({ tintColor }) => (
      <Icon name="car" />
    )
  }


  render() {

    const ConductorId = this.props.navigation.getParam('ConductorId', 'No-Id');
    const ConductorEmail = this.props.navigation.getParam('ConductorEmail', 'No-Email');

    return (
      <Container style={{ backgroundColor: 'rgb(20,20,20)' }}>

        <BotonColasSolicitadas />
        <Image
          source={{ uri: 'https://png.pngtree.com/svg/20170502/91a8305b9c.png' }}
          style={styles.img}
        />

        <ListadoColas {...this.props} />

      </Container>
    );
  }
}

export default ConductorView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#82826C',
    padding: 10,
    marginTop: 30
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#82826C',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#E6880F',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardText: {
    color: 'black',
    padding: 10,
    fontSize: 15
  },
  button: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#82826C",
    alignItems: "center",
    color: "white",
    alignSelf: "center",
    margin: 0,
    borderRadius: 0,
    width: 300
  }
})