import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + hp('2.9%'),
    },

    header: {
        marginLeft: wp('6.4%'),
    },

    headerLogo: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    heightLogo: hp('3.9%'),
    widthLogo: wp('8.5%'),

    headerText: {
        fontSize: hp('2.2%')
    },

    content: {
        marginTop: hp('6%'),
        height: hp('87%'),
        borderTopLeftRadius: 45,
        backgroundColor: '#F3663A',
        paddingTop: hp('11.2%'),
        paddingHorizontal: wp('6.4%')
    },

    viewTopic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('4.1%')
    },

    topic: {
        color: '#FFF',
        fontSize: hp('2.7%')
    },

    buttonTime: {
        width: wp('39.4%'),
        height: hp('5.5%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    textDuration: {
        color: '#B9BFC5'
    },

    slider: {
        width: wp('31.7%')
    },

    textVolume: {
        fontSize: hp('1.7%'),
        color: '#FFF',
    },
    button: {
        alignSelf: 'center',
        width: wp('87.2%'),
        height: hp('6.1%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('27%'),
        backgroundColor: '#FFF',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

})