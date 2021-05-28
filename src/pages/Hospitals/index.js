import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { ILHospitalBG } from '../../assets'
import { fonts, colors } from '../../utils'
import { ListHospital } from '../../components'

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
              <ListHospital />
              <ListHospital />
              <ListHospital />
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    background: {
        height: 240,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.white,
        textAlign: 'center',
        marginTop: 6
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderRadius: 20,
        marginTop: -30,
        paddingTop: 14
    }
})