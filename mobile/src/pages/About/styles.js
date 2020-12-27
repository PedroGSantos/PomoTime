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

    cardContainer: {
        marginTop: hp('17%'),
        marginLeft: wp('2.4%')
    },

    cardInformation: {
        height: hp('62.1%'),
        width: wp('88.8%'),
        marginRight: wp('6.4%'),
        backgroundColor: '#F3663A',
        borderRadius: 20
    },

    headerCard: {
        backgroundColor: '#494747',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: hp('9.6%'),
    },

    titleCard: {
        color: '#FFF',
        marginTop: hp('4%'),
        marginLeft: wp('6.9%'),
        fontSize: hp('2.9%'),
        fontWeight: 'bold',
    },

    messageCard: {
        color: '#FFF',
        fontSize: hp('2.7%'),
        marginHorizontal: wp('5.3%'),
        marginTop: hp('2.4%')
    },

    humanoide1Position: {
        alignSelf: 'flex-end',
        marginRight: wp('9.6%'),
        marginTop: hp('4%')
    },

    humanoide2Position: {
        marginLeft: wp('5.3%'),
        marginTop: hp('4%')
    }
})