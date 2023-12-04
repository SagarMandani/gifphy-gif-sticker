import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Theme } from '@common';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    appLogo: {
        height: 50,
        width: 150,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    listItem: {
        marginBottom: 20,
        borderRadius: 5,
    },
    imageStyle: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: (width - 55) / 2,
        height: 150,
        overflow: 'hidden'
    },
    btnView: {
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    emptyView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flexDirection: 'row'
    },
    cardButton: {
        width: (width - 55) / 2,
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backgroundColor: Colors.White,
        borderRadius: 5
    },
    selectedButton: {
       borderWidth: 1,
       borderColor: Theme.colors.primary
    },
    cardButtonText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    },
})

export default styles;