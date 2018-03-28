import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnLabel,
}) => {
  return (
    <View style={[styles.btnContainer]}>
      {isDoneBtnShow != "" &&
      <TouchableOpacity style={styles.full}
        onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
      >
       <Text style={[styles.nextButtonText, { color: rightTextColor }]}>
          {isDoneBtnShow ? doneBtnLabel : doneBtnLabel} 
       </Text>
      </TouchableOpacity>}
    </View>
  )
}

export default DoneButton