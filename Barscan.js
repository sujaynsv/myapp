 
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

const App = () => {
    const [data, setData] = useState('Scan Barcode');
    

    const handleOnRead = ({ data }) => {
        setData(data);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{data}</Text>
            </View>
            <QRCodeScanner
                onRead={handleOnRead}
                reactivate={true}
                showMarker={true}
                reactivateTimeout={500}
                topViewStyle={styles.scannerContainer}
                bottomContent={
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>QR Code Scanner</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 10,
        marginTop: 50,
        borderRadius: 10,
    },
    headerText: {
        color: 'black',
        fontSize: 20,
    },
    scannerContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    footerText: {
        color: 'white',
        fontSize: 18,
    },
});

export default App;






/*
Api Code (not working)

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import axios from 'axios'; // Import axios for making HTTP requests

const App = () => {
    const [productDetails, setProductDetails] = useState(null);

    const handleOnRead = ({ data }) => {
        // Make API request to fetch product details
        axios.get(`https://getfoodless.app/`)
            .then(response => {
                // Update state with product details
                setProductDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {productDetails ? (
                    <View>
                        <Text style={styles.headerText}>{productDetails.name}</Text>
                        <Text>{productDetails.description}</Text>
                        <Text>{productDetails.price}</Text>
                        {/* Add more product details here }
                    </View>
                ) : (
                    <Text style={styles.headerText}>Scan Barcode</Text>
                )}
            </View>
            <QRCodeScanner
                onRead={handleOnRead}
                reactivate={true}
                showMarker={true}
                reactivateTimeout={500}
                topViewStyle={styles.scannerContainer}
                bottomContent={
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>QR Code Scanner</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 10,
        marginTop: 50,
        borderRadius: 10,
    },
    headerText: {
        color: 'black',
        fontSize: 20,
    },
    scannerContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    footerText: {
        color: 'white',
        fontSize: 18,
    },
});

export default App;

*/
/*
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import DatePicker from "react-native-datepicker";
import PropTypes from "prop-types";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { useNavigation } from '@react-navigation/native';

const Barscan = () => {
    const [data, setData] = useState('Scan Barcode');
    const [expiryDate, setExpiryDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const navigation = useNavigation();

    const handleOnRead = ({ data }) => {
        setData(data);
    };

    useEffect(() => {
        // componentDidUpdate logic here
    }, [expiryDate]);

    const handleDateSelection = (date) => {
        setExpiryDate(date);
        setShowDatePicker(false);
        navigation.navigate('NextScreen'); // Replace 'NextScreen' with the name of your next screen
    };

    const toggleDatePicker = () => {
        setShowDatePicker(!showDatePicker);
    };

    const renderDatePicker = () => {
        if (showDatePicker) {
            return (
                <View style={[styles.datePickerContainer, StyleSheet.absoluteFill]}>
                    <View style={styles.datePickerContent}>
                        <DatePicker
                            style={styles.datePicker}
                            date={expiryDate}
                            mode="date"
                            placeholder="Select Expiry Date"
                            format="YYYY-MM-DD"
                            minDate="2020-01-01"
                            maxDate="2025-12-31"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={handleDateSelection}
                        />
                        <TouchableOpacity onPress={toggleDatePicker}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{data}</Text>
            </View>
            {renderDatePicker()}
            <QRCodeScanner
                onRead={handleOnRead}
                reactivate={true}
                showMarker={true}
                reactivateTimeout={500}
                topViewStyle={styles.scannerContainer}
                bottomContent={
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={toggleDatePicker} style={styles.button}>
                            <Text style={styles.buttonText}>Select Expiry Date</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleOnRead} style={styles.button}>
                            <Text style={styles.buttonText}>Scan Barcode</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    );
};

Barscan.propTypes = {
    navigation: ViewPropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 10,
        marginTop: 50,
        borderRadius: 10,
    },
    headerText: {
        color: 'black',
        fontSize: 20,
    },
    scannerContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    datePickerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    datePickerContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    datePicker: {
        width: 200,
    },
});

export default Barscan;
*/