import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

renderItem.propTypes ={
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  mota: PropTypes.string,
  price: PropTypes.number.isRequired,
  btAddProduct: PropTypes.func,
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function renderItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.imageProduct}
          resizeMode='contain'
          source={{
            uri: props.image,
          }}
        />
      </View>
      <View style={styles.right}>
        <Text style={styles.nameProduct}>{props.name}</Text>
        <Text style={styles.priceProduct}>Giá: {props.price} VND</Text>
        <Text style={styles.motaProduct}>Mô tả: {props.mota}...</Text>
        <TouchableOpacity style={styles.btAddProduct} onPress={props.btAddProduct}>
          <Text style={styles.addProduct}>Thêm sản phẩm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: (3 / 100) * windowHeight,
    flexDirection: 'row',
  },
  left:{flex:1},
  nameProduct: {
    fontSize: (4 / 100) * windowHeight,
    fontWeight: 'bold',
  },
  imageProduct: {
    height: (4/10) * windowWidth,
    width: (4/10) * windowWidth,
    margin: 5,
  },
  right:{
    flex: 1,
    marginTop: 10,
  },
  btAddProduct:{
    height: 7/100 * windowHeight,
    width: 4/10 * windowWidth,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#fb5b5a',
  },
  addProduct:{
    color: '#ffffff'
  }
});

export default renderItem;
