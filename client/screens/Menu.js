import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import * as myConstClass from '../HttpLink';

export default function Menu({menuCard, ConfirmOrderButtonHandler}) {

    const [names, setNames] = useState([]);
    const [cart, setCart] = useState([]);
    const [viewMode, setViewMode] = useState("menu");
    const [tableNo, setTableNo] = useState();

    const menu_items = [...menuCard];

    return (
        <>
        {(viewMode!=='cart') ? (
            <View >

            {/* Navbar */}

            <View style={{ flex: 1, justifyContent: 'center', padding: 24, marginTop: 30, marginBottom: 20}}>
                    <View style={{ flexDirection: 'row', height: 55, backgroundColor: "#ECECEC", borderRadius: 8 }}>
                        
                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor: null, 
                                borderRadius: 6,
                            }}
                            onPress={ConfirmOrderButtonHandler}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center',marginRight: 20, justifyContent: 'center' }}>
                            <Image 
                                style={{
                                    width: 20, 
                                    height: 20, 
                                }}
                                tintColor= "#1D256E"
                                source={require('../assets/icons/back_arrow_icon.png')} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor:null, 
                                margin: 5,
                                borderRadius: 8,
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Menu</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor: null, 
                                margin: 5,
                                borderRadius: 8,
                            }}
                            onPress={() => {
                                if(cart.length>0) {
                                    setViewMode("cart");
                                }
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                               <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>View Cart</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            {menu_items.map(item => (
                <View key={item.name}
                    style={{
                        backgroundColor: "#ECECEC",
                        borderRadius: 8,
                        paddingVertical: 7,
                        paddingHorizontal: 7,
                        marginHorizontal: 24,
                        marginVertical: 10
                }}> 
                        
                    <View style={{backgroundColor: "#F5F6FC", borderRadius: 8, flexDirection: "row"}}>
                        <Image source={{uri: "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_z1bkmcrb/def_height/1500/def_width/1500/version/100011/type/1"}}
                            style={{ 
                                width: 150, 
                                height: 150, 
                                resizeMode: "stretch",
                                borderRadius: 25,
                            }}
                        />
                        <View> 
                            <Text style={{
                                fontFamily: 'GothamLight', 
                                marginLeft: 10,
                                marginRight: 150,
                                lineHeight: 15,
                                marginTop: 10,
                            }}>{item.name}</Text>
                                
                            <View style={{padding: 1, marginVertical: 10, marginRight: 160, marginLeft: 10 , backgroundColor: "#E4E6F3"}} />
                            
                            <Text style={{
                                fontSize: 12,
                                fontFamily: 'GothamMedium', 
                                marginLeft: 10,
                                marginRight: 150,
                            }}>Price: {item.price}</Text>

                            <View style={{flexDirection: "row"}}>
                                <TouchableOpacity  
                                    style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                                    onPress={() => {
                                        if(!names.includes(item.name)) {
                                            setNames([...names, item.name]);
                                            let obj = {
                                                name: item.name,
                                                price: item.price,
                                                quantity: item.quantity,
                                                restaurantId: item.restaurantId
                                            }
                                            cart.push(obj);
                                        }
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "white",
                                        borderWidth: 1,
                                        borderColor: "green",
                                        padding: 12,
                                        borderRadius: 6,
                                    }}>
                                        <Text style={{color: names.includes(item.name) ? "blue" : "green" , textAlign: "center", fontFamily: 'GothamMedium'}}>
                                            {names.includes(item.name) ? "Added ✔️" : "Add to cart +" }
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity  
                                    disabled={names.includes(item.name) ? false : true }
                                    style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                                    onPress={() => {
                                        if(names.includes(item.name)) {
                                            let newNames = names.filter(nm => (nm === item.name) ? false:true);
                                            setNames(newNames);

                                            let newCart = cart.filter(ob => (ob.name === item.name) ? false: true);
                                        
                                            setCart([...newCart]);
                                        }
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: "white",
                                        borderWidth: 1,
                                        borderColor: "green",
                                        padding: 12,
                                        borderRadius: 6,
                                    }}>
                                        <Text style={{color: names.includes(item.name) ? "blue" : "green" , textAlign: "center", fontFamily: 'GothamMedium'}}>
                                            {names.includes(item.name) ? "Remove" : "" }
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
        ):(
            <View>


            {/* Navbar */}
            {/************************************ */}
            <View style={{ flex: 1, justifyContent: 'center', padding: 24, marginTop: 30, marginBottom: 20}}>
                    <View style={{ flexDirection: 'row', height: 55, backgroundColor: "#ECECEC", borderRadius: 8 }}>
                        
                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor: null, 
                                borderRadius: 6,
                            }}
                            onPress={() => {
                                setViewMode("menu")
                            }}
                        >
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center',marginRight: 20, justifyContent: 'center' }}>
                            <Image 
                                style={{
                                    width: 20, 
                                    height: 20, 
                                }}
                                tintColor= "#1D256E"
                                source={require('../assets/icons/back_arrow_icon.png')} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor:null, 
                                margin: 5,
                                borderRadius: 8,
                            }}
                            // onPress={() => NavbarButtonHandler("chart")}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ marginLeft: 0, fontSize: 16, fontFamily: 'GothamMedium', lineHeight: 22, color: "black" }}>Your Cart</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ 
                                flex: 1,
                                backgroundColor: null, 
                                margin: 5,
                                borderRadius: 8,
                            }}
                            // onPress={() => NavbarButtonHandler("add")}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                               
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {cart.map(item => {
                return(
                    <View key={item.name}
                        style={{
                            backgroundColor: "#ECECEC",
                            borderRadius: 8,
                            paddingVertical: 7,
                            paddingHorizontal: 7,
                            marginHorizontal: 24,
                            marginVertical: 10
                        }}> 
                    <View style={{backgroundColor: "#F5F6FC", borderRadius: 8, flexDirection: "row"}}>
                        <Image source={{uri: "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_z1bkmcrb/def_height/1500/def_width/1500/version/100011/type/1"}}
                            style={{ 
                                width: 150, 
                                height: 150, 
                                resizeMode: "stretch",
                                borderRadius: 25,
                            }}
                        />
                        <View> 
                            <Text style={{
                                fontFamily: 'GothamLight', 
                                marginLeft: 10,
                                marginRight: 150,
                                lineHeight: 15,
                                marginTop: 10,
                            }}>{item.name}</Text>
                            <View style={{padding: 1, marginVertical: 10, marginRight: 160, marginLeft: 10 , backgroundColor: "#E4E6F3"}} />
                            <Text style={{
                                fontSize: 12,
                                fontFamily: 'GothamMedium', 
                                marginLeft: 10,
                                marginRight: 150,
                            }}>Price: {item.price}</Text>

                            <View style={{flexDirection: "row"}}>
                            <TouchableOpacity 
                                style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                                onPress={() => {
                                    
                                    const newCart = [];
                                    for(let i=0 ; i<cart.length ; i++) {
                                        if(cart[i]===item) {
                                            const obj = {
                                                name: cart[i].name,
                                                price: cart[i].price,
                                                quantity: cart[i].quantity+1,
                                                restaurantId: cart[i].restaurantId
                                            }
                                            newCart.push(obj);
                                        } else {
                                            const obj = cart[i];
                                            newCart.push(obj);
                                        }
                                    }
                                    
                                    setCart([...newCart]);
                                }}
                            >
                                <View style={{
                                    backgroundColor: "green",
                                    padding: 12,
                                    paddingHorizontal: 14,
                                    borderRadius: 6,
                                }}>
                                    <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>+</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                                onPress={() => {
                                    
                                    const newCart = [];
                                    for(let i=0 ; i<cart.length ; i++) {
                                        if(cart[i]===item && cart[i].quantity>0) {
                                            const obj = {
                                                name: cart[i].name,
                                                price: cart[i].price,
                                                quantity: cart[i].quantity-1,
                                                restaurantId: cart[i].restaurantId
                                            }
                                            newCart.push(obj);
                                        } else {
                                            const obj = cart[i];
                                            newCart.push(obj);
                                        }
                                    }
                                    
                                    setCart([...newCart]);
                                }}
                            >
                                <View style={{
                                    backgroundColor: "tomato",
                                    padding: 12,
                                    paddingHorizontal: 14,
                                    borderRadius: 6,
                                }}>
                                    <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>-</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={{paddingTop: 10,marginTop: 10, marginBottom: 20, marginRight: 10}}
                                
                            >
                                <View style={{
                                    backgroundColor: "transparent",
                                    padding: 12,
                                    borderRadius: 6,
                                }}>
                                    <Text style={{color: "black", textAlign: "center",fontSize:12, fontFamily: 'GothamMedium'}}>Total: {item.quantity}</Text>
                                </View>
                            </TouchableOpacity>
                            
                            </View>
                        </View>
                    </View>
                </View>
                )
            })}
            {/* Idhar Total Print karne ka hai !!!*/}
            <TextInput 
                style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "#D1D1D1",
                    borderRadius: 5,
                    padding: 10,
                    marginTop: 28,
                    fontFamily: 'GothamLight', 
                    fontSize: 14,
                    marginHorizontal: 10
                }}
                placeholder="694.20" 
                value={tableNo}
                onChangeText={text => setTableNo(text)}
            />
            <TouchableOpacity 
                style={{paddingTop: 10,marginTop: 10, marginBottom: 20, margin: 10}}
                onPress={() => {
                    console.log("Confirm Order button is pressed!!", ...cart);

                    fetch(`${myConstClass.HTTP_LINK}/placeOrder`,{
                        method:"post",
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            cart: cart,
                            tableNo: parseInt(tableNo)
                        })
                    })
                    .then(data=>{
                        console.log('Successfully done!!');
                        Alert.alert("Your Order is placed Successfully!");
                        ConfirmOrderButtonHandler();
                    })
                    .catch(err=>{
                        Alert.alert('Some Error Occured..., please Retry');
                        console.log(err);
                    })
                }}        
            >
                    <View style={{
                        backgroundColor: "#222222",
                        padding: 12,
                        borderRadius: 6,
                    }}>
                        <Text style={{color: "white", textAlign: "center", fontFamily: 'GothamMedium'}}>Confirm Order</Text>
                    </View>
                </TouchableOpacity>
        </View>
        )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
