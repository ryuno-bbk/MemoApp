import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

import Icon from './icon'

const MemoListItem = () => {
    return (
    <Link href='/memo/detail' asChild>
        <TouchableOpacity style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
            </View>
            <TouchableOpacity>
                <Icon name='delete' size={32} color='#B0B0B0' ></Icon>
            </TouchableOpacity>
        </TouchableOpacity>
    </Link>
    )
}

const styles = StyleSheet.create({
        memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',              // flexBoxを横に。初期では縦
        justifyContent: 'space-between',   // 二つの要素の間にスペース
        paddingVertical: 16,               // 上下の余白padding
        paddingHorizontal: 19,             // 左右の余白padding
        alignItems:'center',               // Xを真ん中に
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)'
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }
})

export default MemoListItem
