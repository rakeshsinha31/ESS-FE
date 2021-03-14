// import React, { useState } from "react";
// import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
// import * as MediaLibrary from "expo-media-library";
// import * as FileSystem from "expo-file-system";
// import * as Permissions from "expo-permissions";

// import { Picker } from "react-native-picker-dropdown";

// import MaterialButtonDark from "../components/MaterialButtonDark";

// function SalaryScreen({ navigation }) {
//   //   const downloadFile1 = () => {
//   //     console.log(1111);
//   //     alert(10);
//   //   };

//   //   const downloadFile = () => {
//   //     alert(1);
//   //     console.log(7777);
//   //     const uri = "http://techslides.com/demos/sample-videos/small.mp4";
//   //     let fileUri = FileSystem.documentDirectory + "small.mp4";
//   //     FileSystem.downloadAsync(uri, fileUri)
//   //       .then(({ uri }) => {
//   //         saveFile(uri);
//   //       })
//   //       .catch((error) => {
//   //         console.error(error);
//   //       });
//   //   };

//   // const saveFile = async (fileUri) => {
//   //   console.log(55545);
//   //   const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
//   //   // const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//   //   if (status === "granted") {
//   //     const asset = await MediaLibrary.createAssetAsync(fileUri);
//   //     await MediaLibrary.createAlbumAsync("Download", asset, false);
//   //   }
//   // };

//   const [state, setState] = useState({ month: "0" });
//   const [yearState, setYearState] = useState({ year: "0" });

//   const handleValueChange = (month) => {
//     setState({ month });
//   };
//   const onValueChange = handleValueChange.bind();

//   const handleValueChangeYear = (year) => {
//     setYearState({ year });
//   };
//   const onYearChange = handleValueChangeYear.bind();

//   const handelRequest = () => {
//     if (state.month === "0") {
//       alert("Please select a valid month");
//       return false;
//     }
//     if (yearState.year === "0") {
//       alert("Please select a valid year");
//       return false;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.section}>
//         <Text style={([styles.request], { margin: 10, marginBottom: 20 })}>
//           Request Salary Slip
//         </Text>
//         <View style={styles.requestRow}>
//           <Picker
//             selectedValue={state.month}
//             onValueChange={onValueChange}
//             mode="dropdown"
//             style={[styles.dropdown]}
//           >
//             <Picker.Item label="Select Month" value="0" />
//             <Picker.Item label="January" value="1" />
//             <Picker.Item label="Fabruary" value="2" />
//             <Picker.Item label="March" value="3" />
//             <Picker.Item label="Apil" value="4" />
//             <Picker.Item label="May" value="5" />
//             <Picker.Item label="June" value="6" />
//             <Picker.Item label="July" value="7" />
//             <Picker.Item label="August" value="8" />
//             <Picker.Item label="Sepetember" value="9" />
//             <Picker.Item label="October" value="10" />
//             <Picker.Item label="November" value="11" />
//             <Picker.Item label="December" value="12" />
//           </Picker>

//           <Picker
//             selectedValue={yearState.year}
//             onValueChange={onYearChange}
//             mode="dropdown"
//             style={[styles.dropdown]}
//           >
//             <Picker.Item label="Select Year" value="0" />
//             <Picker.Item label="2015" value="1" />
//             <Picker.Item label="2016" value="2" />
//             <Picker.Item label="2017" value="3" />
//             <Picker.Item label="2018" value="4" />
//             <Picker.Item label="2019" value="5" />
//             <Picker.Item label="2020" value="6" />
//             <Picker.Item label="2021" value="7" />
//           </Picker>
//         </View>

//         <TouchableOpacity>
//           <MaterialButtonDark
//             onPress={() => handelRequest()}
//             style={styles.applyLeaveButton}
//             title={"REQUEST"}
//           ></MaterialButtonDark>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// export default SalaryScreen;

// const styles = StyleSheet.create({
//   customDatesStyles: {
//     backgroundColor: "blue",
//   },
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#F5F5F5",
//   },
//   section: {
//     width: "97%",
//     backgroundColor: "#FFFFFF",
//     margin: "1%",
//     borderColor: "#e0dede",
//     borderWidth: 1,
//     borderRadius: 10,
//   },
//   dropdown: {
//     width: "45%",
//     marginBottom: 20,
//   },
//   requestRow: {
//     flexDirection: "row",
//     marginBottom: 5,
//     justifyContent: "space-evenly",
//   },
//   request: {
//     color: "black",
//     fontSize: 12,
//     fontWeight: "bold",
//     flexDirection: "row",
//   },
//   applyLeaveButton: {
//     width: "97%",
//     justifyContent: "center",
//     height: 60,
//     marginLeft: 7,
//     marginBottom: 5,
//     backgroundColor: "black",
//     borderRadius: 10,
//   },
// });
