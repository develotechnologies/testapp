import React, { Component, Fragment } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import Bg from '../testapp/Assets/Bg.png';
import { width, height, totalSize } from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar } from "react-native-elements";
export default class SampleMockup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: '1',
                    image: 'https://i.insider.com/5de5784979d757159d0b6838?width=1100&format=jpeg&auto=webp',
                    color: '#2EB4E0'
                },
                {
                    key: '2',
                    image: 'https://www.itl.cat/pngfile/big/107-1079213_black-and-white-model-wallpaper-black-and-white.jpg',
                    color: '#E7055D'
                },
                {
                    key: '3',
                    image: 'https://executivespeakers.com//images/speakers/Ben%20Nemtin/2019177120918Ben-Nemtin-DECA-Orlando-02.jpg',
                    color: '#FEDE0E'
                },
                {
                    key: '4',
                    image: 'https://images.unsplash.com/flagged/photo-1572129063552-570d721b9d5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    color: '#2A8435'
                },
            ]
        };
    }
    _trendslist = ({ item }) => {
        return (
            <Avatar
                size={totalSize(13)}
                rounded
                source={{ uri: item.image }}
                containerStyle={{ borderColor: item.color, borderWidth: 3 }}
            />
        );
    };
    render() {
        return (
            <Fragment>
                <SafeAreaView
                    style={(styles.container, { backgroundColor: '#000000' })}
                />
                <SafeAreaView style={styles.container}>
                    <ImageBackground style={styles.BgContainer} source={Bg}>
                        <View style={styles.header}>
                            <View style={styles.headerContainer}>
                                <View style={styles.LogoContainer}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.goBack()}>
                                        <Image
                                            source={require('../testapp/Assets/LogoIM.png')}
                                            style={styles.LogoImage}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={styles.LeftTitleContainer}>
                                    <Text
                                        style={styles.LeftTitle}>
                                        INICIO
                                    </Text>
                                </View>
                                <View
                                    style={styles.CenterTitleContainer}>
                                    <Text
                                        style={styles.CenterTitle}>
                                        PERFIL
                                    </Text>
                                </View>
                                <View
                                    style={styles.RightTitleContainer}>
                                    <Text
                                        style={styles.RightTitle}>
                                        AJUSTES
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.MainContent}>
                            <Text style={styles.MainTitle}>BECOME A</Text>
                            <Text style={styles.MainSubTitle}>INFLUENCER</Text>
                        </View>
                        <View style={styles.MainButton}>
                            <LinearGradient
                                colors={['#5B70D7', '#765FDF']}
                                style={styles.MainButtonGradient}
                            >
                                <TouchableOpacity style={styles.MainButtonTouchable}>
                                    <Image source={require('../testapp/Assets/plus.png')} style={styles.MainButtonImage} />
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </ImageBackground>
                    <LinearGradient
                        colors={['#101010', '#181818', '#202020']}
                    >
                        <View style={styles.FlatlistContainer}>
                            <Text style={styles.FlatlistTitle}>Historias</Text>
                            <FlatList
                                data={this.state.data}
                                renderItem={this._trendslist}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                contentContainerStyle={styles.FlatlistContent}
                                ItemSeparatorComponent={() => <View style={styles.FlatlistItem} />}
                            />
                        </View>
                    </LinearGradient>
                    <View style={styles.BottomTabContainer}>
                        <View
                            style={styles.TabItem1}>
                            <Text
                                style={styles.TabItem}>
                                Inicio
                            </Text>
                        </View>
                        <View
                            style={styles.TabItem2}>
                            <Text
                                style={styles.TabItem}>
                                Busqueda
                            </Text>
                        </View>
                        <View
                            style={styles.TabItem3}>
                            <Text
                                style={styles.TabItem}>
                                Categorias
                            </Text>
                        </View>
                        <View
                            style={styles.TabItem4}>
                            <Text
                                style={styles.TabItem}>
                                Mas
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        height: height(7),
        width: width(100),
        alignItems: 'center',
        flexDirection: 'row',
    },
    BgContainer: {
        height: height(65),
    },
    headerContainer: {
        flexDirection: 'row',
    },
    LogoContainer: {
        width: width(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    LogoImage: {
        width: 35,
        height: 35,
    },
    LeftTitleContainer: {
        width: width(25),
        alignItems: 'center',
        justifyContent: 'center',
    },
    LeftTitle: {
        color: '#FFFFFF',
        fontSize: totalSize(2),
    },
    CenterTitleContainer: {
        width: width(25),
        alignItems: 'center',
        justifyContent: 'center',
    },
    CenterTitle: {
        color: '#FFFFFF',
        fontSize: totalSize(2),
    },
    RightTitleContainer: {
        width: width(25),
        alignItems: 'center',
        justifyContent: 'center',
    },
    RightTitle: {
        color: '#FFFFFF',
        fontSize: totalSize(2),
    },
    MainContent: {
        width: width(90),
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: height(30)
    },
    MainTitle: {
        color: '#FFFFFF',
        fontSize: Platform.OS === 'ios' ? totalSize(5.2) : totalSize(5.7),
        letterSpacing: 14.1,
        fontWeight: 'bold'
    },
    MainSubTitle: {
        color: '#FFFFFF',
        fontSize: Platform.OS === 'ios' ? totalSize(4.5) : totalSize(4.25),
        letterSpacing: 13.5,
        fontWeight: '100',
    },
    MainButton: {
        width: width(90),
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: height(3)
    },
    MainButtonGradient: {
        height: 60,
        width: 60,
        borderRadius: 60
    },
    MainButtonTouchable: {
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    MainButtonImage: {
        width: 30,
        height: 30
    },
    FlatlistContainer: {
        alignSelf: 'center',
        height: height(21.5)
    },
    FlatlistTitle: {
        color: '#FFFFFF',
        fontSize: totalSize(2.5),
        marginLeft: width(4),
        marginBottom: height(1),
        marginTop: height(1)
    },
    FlatlistContent: {
        paddingLeft: width(4),
        paddingRight: width(4)
    },
    FlatlistItem: {
        margin: 10,
    },
    BottomTabContainer: {
        height: height(12.5),
        backgroundColor: '#000000',
        flexDirection: 'row'
    },
    TabItem: {
        color: '#FFFFFF',
        fontSize: totalSize(2),
    },
    TabItem1: {
        width: width(25),
        marginTop: height(2),
        alignItems: 'center',
    },
    TabItem2: {
        width: width(22),
        marginTop: height(2),
        alignItems: 'center',
    },
    TabItem3: {
        width: width(33),
        marginTop: height(2),
        alignItems: 'center',
    },
    TabItem4: {
        width: width(15),
        marginTop: height(2),
        alignItems: 'center',
    },
});