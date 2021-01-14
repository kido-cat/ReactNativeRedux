import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import RenderItem from './src/components/renderItem';
import {getDataProduct} from './src/redux/action/index';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function App(props) {
  const btAddProduct = () =>{
    alert('ok chúng tôi sẽ thêm')
  }

  useEffect(() => {
    props.getDataProduct();

    return () => {
      //component willunmount
    };
  },[]);
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <Text style={styles.textTitle}>List Products</Text>
      </View>
      <View style={styles.showProducts}>
        {props.products === [] && <ActivityIndicator size="large" color="#00ff00" />}
        {props.products.map((item) => (<RenderItem name={item.name} image={item.image} price={item.price} mota={item.mota} key={item.id} btAddProduct={btAddProduct}/> ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  tabBar:{
    flex: 1,
    backgroundColor: 'blue'
  },
  showProducts:{
    flex: 4,
    marginTop: 5/100 * windowHeight,
  },
  textTitle:{
    fontSize: 8/100 * windowHeight,
    fontWeight: 'bold',
    textAlign:'left',
    marginLeft: 5/100 * windowWidth,
  }
});


const mapDispatchToProps = {
    getDataProduct
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);

