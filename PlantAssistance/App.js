import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View } from 'react-native';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://perenual.com/api/species-list?key=sk-pGbB669b0ce475c696287`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        fetchData();
    }, []);

    return (
        <View>
            <Text>API Data</Text>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </View>
    );
}

export default App;