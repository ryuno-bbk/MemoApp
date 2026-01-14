import { View, Text, StyleSheet } from 'react-native'

const MemoListItem = () => {
    return (
        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
            </View>
            <View>
                <Text>X</Text>
            </View>
        </View>
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
