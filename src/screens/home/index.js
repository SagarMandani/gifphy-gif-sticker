import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ActivityIndicator, TouchableOpacity, FlatList, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Button, TextInput } from '@component';
import { Icons, Colors, Constants, CommonStyles, Utils } from '@common';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchGif } from '@actions';

const Dashboard = ({ navigation }) => {
    const [gifData, setGifData] = useState([]);
    const [, setState] = useState({});
    const dispatch = useDispatch();
    const gif = useSelector(state => state.gif);
    const { gifCurrentPage, gifMaxPage, gifMoreLoading, gifLoading, gifList } = gif;
    const [search, setSearch] = useState('');
    const [selectType, setSelectType] = useState('gif');

    useEffect(() => {
        setGifData(gifList);
    }, [gifList])

    useEffect(() => {
        getSearchGif(dispatch, search?.length > 0 ? 'search' : 'trading', selectType, search, 1);
    }, [selectType])

    const fetchMore = () => {
        if (gifCurrentPage && !gifLoading && !gifMoreLoading && gifCurrentPage < gifMaxPage) {
            getSearchGif(dispatch, search?.length > 0 ? 'search' : 'trading', selectType, search, gifCurrentPage + 1);
        }
    }

    const renderItem = (item, index) => {
        return (
            <View key={index} style={[styles.listItem, { marginRight: index % 2 == 0 ? 10 : 0 }]}>
                <Image
                    resizeMode={'cover'}
                    style={styles.imageStyle}
                    source={{ uri: item.images.preview_gif.url }}
                />
            </View>
        );
    };

    const searchFilterFunction = (text) => {
        setSearch(text);
        if (text) {
            setTimeout(() => {
                getSearchGif(dispatch, text?.length > 0 ? 'search' : 'trading', selectType, text, 1);
            }, 150);
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={CommonStyles.backgroundPrimary} />
            <Text style={styles.title}>GifPhy</Text>
            <View style={styles.subContainer}>
                <View style={styles.card}>
                    <TouchableOpacity style={[styles.cardButton, { marginRight: 10 }, selectType == 'gif' ? styles.selectedButton : {}]} onPress={() => setSelectType('gif')}>
                        <Text style={styles.cardButtonText}>Gif</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.cardButton, selectType == 'sticker' ? styles.selectedButton : {}]} onPress={() => setSelectType('sticker')}>
                        <Text style={styles.cardButtonText}>Sticker</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    label={`Search ${selectType == 'gif' ? 'Gifs' : 'Stickers'} from Giphy`}
                    returnKeyType="done"
                    value={search}
                    onChangeText={(text) => searchFilterFunction(text)}
                    autoCapitalize="none"
                />
                {gifLoading ?
                    <ActivityIndicator color={Colors.Black} />
                    :
                    gifData?.length > 0 ?
                        <FlatList
                            data={gifData}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            bounces={false}
                            renderItem={({ item, index }) => renderItem(item, index)}
                            numColumns={2}
                            onEndReached={fetchMore}
                            onEndReachedThreshold={0.5}
                            initialNumToRender={4}
                            keyboardShouldPersistTaps={'always'}
                            ListFooterComponent={() =>
                                (gifMoreLoading && !gifLoading) ?
                                    (
                                        <View style={{ alignSelf: 'center', marginBottom: 15, marginTop: 15 }}>
                                            <ActivityIndicator size="large" color={Colors.Black} />
                                        </View>
                                    )
                                    :
                                    <View />
                            }
                        />
                        :
                        <View style={styles.emptyView}>
                            <Text>{selectType == 'gif' ? 'Gif list not found' : 'Sticker list not found'}</Text>
                        </View>
                }
            </View>
        </View>
    )
}
export default Dashboard;