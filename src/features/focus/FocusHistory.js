import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { fontSizes } from '../../utils/size';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.suject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        <Text style={{ fontSize: fontSizes.lg, color: 'white' }}>
          Things we've focused on
        </Text>
        {!!focusHistory.length && (
          <FlatList
            style={{ width: '100%', height: '100%', paddingTop: 16 }}
            contentContainerStyle={{ alignItems: 'center' }}
            data={focusHistory}
            renderItem={HistoryItem}
          />
        )}
        {!focusHistory.length && (
          <Text style={{ color: 'white' }}>Nothing yet</Text>
        )}
        <View style={styles.clearContainer}>
          <TouchableOpacity
            style={[styles.radius]}
            onPress={() => {
              clearHistory();
            }}>
            <Text style={[styles.text]}>Clear</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),
  radius: {
    borderRadius: 100 / 2,
    width: 100,
    height: 100,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    marginTop: 50
  },
  text: { color: '#fff', marginTop: 22, fontSize: 70 / 3 },
});
