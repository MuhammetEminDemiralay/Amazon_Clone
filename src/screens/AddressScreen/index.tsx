import React, { useState } from 'react'
import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Picker } from "@react-native-picker/picker"
import styles from "./styles"
import countryList from "country-list"
import Button from "../../components/Button"

const countries = countryList.getData();
const AddressScreen = () => {

    const [country, setCountry] = useState(countries[0].code)
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [addressError, setAddressError] = useState("");

    const onCheckout = () => {
        if (!!addressError) {
            Alert.alert("Fix all field errors before sumbiting")
        }
        if (!fullName) {
            Alert.alert("PLease fill in the fullname field")
            return
        }

        if (!phone) {
            console.warn("Please fill in the number field")
        }

        console.warn("Success checkout")
    }

    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError("Address is too short")
        }
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView style={styles.root}>
                <View style={styles.row}>
                    <Picker
                        onValueChange={setCountry}
                        selectedValue={country}
                    >
                        {
                            countries.map((item: any, index: any) => (
                                <Picker.Item key={index} label={item.name} value={item.code} />
                            ))
                        }
                    </Picker>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Full name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Full name'
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='phone-pad'
                        placeholder='Phone number'
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Address'
                        value={address}
                        onEndEditing={validateAddress}
                        onChangeText={text => {
                            setAddress(text);
                            setAddressError("");
                        }}
                    />
                    {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='City'
                        value={city}
                        onChangeText={setCity}
                    />
                </View>

                <Button text='checkout' onPress={onCheckout}></Button>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


export default AddressScreen
