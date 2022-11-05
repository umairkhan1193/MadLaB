import { View, StyleSheet } from "react-native";


export default function Ludo(){
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <View style={[{ backgroundColor: "green" }, styles.box]}>
          <View style={[{backgroundColor:"darkgreen"},styles.innerbord]}>
            <View style={styles.insidebox}/>
            <View style={styles.insidebox}/>
            <View style={styles.insidebox}/>
            <View style={styles.insidebox}/>
        </View>
        </View>

        <View
          style={{
            height: 150,
            width: 75,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />
          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />
          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />
          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />
          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
        </View>

        <View style={[{ backgroundColor: "yellow" }, styles.box]}>
        <View style={[{backgroundColor:"orange"},styles.innerbord]}>
        <View style={styles.insidebox}/>
            <View style={styles.insidebox}/>
            <View style={styles.insidebox}/>
            <View style={styles.insidebox}/>

        </View>
        </View>

        <View
          style={{
            height: 75,
            width: 150,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "red" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
        </View>

        <View
          style={{
            borderWidth:37.5,
            borderLeftColor:"green",
            borderTopColor:"yellow",
            borderRightColor:"blue",
            borderBottomColor:"red" 
          }}
        >     
        </View>

        <View
          style={{
            height: 75,
            width: 150,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox}/>
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />
          <View style={styles.whitebox} />
        </View>

        <View style={[{ backgroundColor: "red" }, styles.box]}>
        <View style={[{backgroundColor:"darkred"},styles.innerbord]}>
        <View style={styles.insidebox}/>
        <View style={styles.insidebox}/>
        <View style={styles.insidebox}/>
        <View style={styles.insidebox}/>
            
            
        </View>
        </View>

        <View
          style={{
            height: 150,
            width: 75,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "red" }]} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "red" }]} />
          <View style={[styles.whitebox, { backgroundColor: "red" }]} />
          <View style={[styles.whitebox, { backgroundColor: "red" }]} />
          <View style={[styles.whitebox, { backgroundColor: "red" }]} />
          <View style={[styles.whitebox, { backgroundColor: "red" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
        </View>

        <View style={[{ backgroundColor: "blue" }, styles.box]}>
        <View style={[{backgroundColor:"darkblue"},styles.innerbord]}>
        <View style={styles.insidebox}/>
            <View style={styles.insidebox}/>
            <View style={styles.insidebox}/>
            <View style={styles.insidebox}/>
            
        </View>
        </View>
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    backgroundColor: "grey",
    width: 375,
    height: 375,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  innerbord:{
    height: 100,
    width: 100,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",

  },
  box: {
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  insidebox:{
    width: 30,
     height: 30,
     borderRadius: 15,
     backgroundColor: "#fff",
     marginLeft: 5,
     marginRight: 5,

  },
  whitebox: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: 1,
   
  },
});