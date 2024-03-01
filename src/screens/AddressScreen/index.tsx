import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Picker } from "@react-native-picker/picker"
import styles from "./styles"
import countryList from "country-list"

const countries = countryList.getData();
const AddressScreen = () => {

    const [country, setCountry] = useState(countries[0].code)
    const [fullName, setFullName] = useState("");

    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Picker
                onValueChange={setCountry}
                selectedValue={country}
                >
                    {
                        countries.map((item : any, index : any) => (
                            <Picker.Item key={index} label={item.name} value={item.code} />
                        ))
                    }
                </Picker>
            </View>
            <View style={styles.row}>
                    <Text style={styles.label}>Full name (First and Last name)</Text>
                    <TextInput 
                        style={styles.input}
                        inputMode='text'
                        placeholder='Full name'
                        onChangeText={() => setFullName}
                    />
            </View>
        </View>
    )
}


export default AddressScreen
