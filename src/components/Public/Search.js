import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SearchBar} from 'react-native-elements';
import style from './styles';

const Search = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <>
      <View>
        <SearchBar
          placeholder="What are you looking for?"
          onChangeText={updateSearch}
          value={search}
          containerStyle={style.searchBarContainer}
          inputContainerStyle={style.searchBarInputContainer}
          inputStyle={style.searchBarInput}
          searchIcon={style.searchIcon}
          clearIcon={false}
        />
      </View>
    </>
  );
};

export default Search;
