import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.restaurant.price_range === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none'
        }}
      >
        <ScrollView>
          <ResultsList
            results={filterResultsByPrice(2)}
            title='Cost Effective'
          />
          <ResultsList results={filterResultsByPrice(3)} title='Bit Pricier' />
          <ResultsList results={filterResultsByPrice(4)} title='Big Spender' />
        </ScrollView>
      </View>
    </>
  );
};

export default SearchScreen;
