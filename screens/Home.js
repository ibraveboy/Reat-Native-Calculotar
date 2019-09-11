import React,{Fragment} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Dimensions,
    StatusBar,
  } from 'react-native';

class Home extends React.Component{

    state={
      btnVal:"0",
      prevVal:"",
      prevOp:"",
      textInput: {
        backgroundColor: "white",
        fontSize:100,
        flex:0.21,
        paddingTop:"15%",
        textAlign:"right",
        paddingRight:"2.5%",
      },
    }

    changeFontSizeIfLengthExceeds= ()=>{
     
      if(this.state.btnVal.length>13 && this.state.textInput.fontSize != 25){
        this.state.textInput={
            backgroundColor: "white",
            fontSize:25,
            flex:0.21,
            paddingTop:"15%",
            textAlign:"right",
            paddingRight:"2.5%",
          }
      }
      else if(this.state.btnVal.length>8 && this.state.btnVal.length<14 && this.state.textInput.fontSize != 50){
        this.state.textInput={
            backgroundColor: "white",
            fontSize:50,
            flex:0.21,
            paddingTop:"15%",
            textAlign:"right",
            paddingRight:"2.5%",
          }
      }
      else if(this.state.btnVal.length>5 && this.state.btnVal.length<9 && this.state.textInput.fontSize != 75){
        this.state.textInput={
            backgroundColor: "white",
            fontSize:75,
            flex:0.21,
            paddingTop:"15%",
            textAlign:"right",
            paddingRight:"2.5%",
          }
      }
      else if(this.state.btnVal.length < 6 && this.state.textInput.fontSize != 100){
        this.state.textInput={
          backgroundColor: "white",
          fontSize:100,
          flex:0.21,
          paddingTop:"15%",
          textAlign:"right",
          paddingRight:"2.5%",
        }
      }
    }

      btnPress=(val)=>{
        var regExp=new RegExp("[0-9]")
        if(regExp.test(val)){
          if(this.state.btnVal=="0" || this.state.btnVal.toLowerCase()=="infinity" )
            this.setState({
              btnVal:val
            })
          else{
            if(this.state.prevOp!="" && this.state.prevVal=="")
              this.setState({
                btnVal:val,
                prevVal:this.state.btnVal
              })
            else
              this.setState({
                btnVal:(this.state.btnVal+val)
              })
          }
        }else if(val == "."){
            if(!this.state.btnVal.includes(".")){
                this.setState({
                    btnVal:(this.state.btnVal+val)
                })
            }
        }else{

            // if calculator gets infinity

            if(this.state.btnVal.toLowerCase()=="infinity"){
                this.setState({
                    prevVal:"",
                    btnVal:"0",
                    prevOp:""
                })
                return false
            }

            // else without infinity 

          switch (val) {
            case "+":
              val=this.state.btnVal;
              if(this.state.prevOp==""){
                this.setState({
                  prevVal:val,
                  btnVal:"0",
                  prevOp:"+"
                })
              }else if(this.state.prevOp !="" && this.state.prevVal==""){
                this.setState({
                  prevVal:"",
                  btnVal:val,
                  prevOp:"+"
                })
              }else{
                let f=parseFloat(this.state.prevVal,10);
                let s=parseFloat(val,10);
                switch(this.state.prevOp){
                    case "+":
                        this.setState({
                            btnVal:(f+s).toString(),
                            prevOp:"+",
                            prevVal:"",
                        })
                        break;
                    case "-":
                        this.setState({
                            btnVal:(f-s).toString(),
                            prevOp:"+",
                            prevVal:"",
                        })
                        break;
                    case "x":
                        this.setState({
                            btnVal:(f*s).toString(),
                            prevOp:"+",
                            prevVal:"",
                        })
                        break;
                    case "/":
                        this.setState({
                            btnVal:(f/s).toString(),
                            prevOp:"+",
                            prevVal:"",
                        })
                        break;
                    default:
                        this.setState({
                            btnVal:this.state.btnVal,
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                }
              }
              break;

            case "-":

              if(this.state.prevOp==""){

                this.setState({
                  prevVal:this.state.btnVal,
                  btnVal:"0",
                  prevOp:"-"
                })

              }else if(this.state.prevOp !="" && this.state.prevVal==""){
                this.setState({
                  prevVal:"",
                  btnVal:this.state.btnVal,
                  prevOp:"-"
                })
              }else{

                let f=parseFloat(this.state.prevVal,10);
                let s=parseFloat(this.state.btnVal,10);
                switch(this.state.prevOp){
                    case "+":
                        this.setState({
                            btnVal:(f+s).toString(),
                            prevOp:"-",
                            prevVal:"",
                        })
                        break;
                    case "-":
                        this.setState({
                            btnVal:(f-s).toString(),
                            prevOp:"-",
                            prevVal:"",
                        })
                        break;
                    case "x":
                        this.setState({
                            btnVal:(f*s).toString(),
                            prevOp:"-",
                            prevVal:"",
                        })
                        break;
                    case "/":
                        this.setState({
                            btnVal:(f/s).toString(),
                            prevOp:"-",
                            prevVal:"",
                        })
                        break;
                    default:
                        this.setState({
                            btnVal:this.state.btnVal,
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                }

              }
              break;

            case "/":
              
              if(this.state.prevOp==""){

                this.setState({
                  prevVal:this.state.btnVal,
                  btnVal:"0",
                  prevOp:"/"
                })

              }else if(this.state.prevOp !="" && this.state.prevVal==""){
                this.setState({
                  prevVal:"",
                  btnVal:this.state.btnVal,
                  prevOp:"/"
                })
              }else{
                
                let f=parseFloat(this.state.prevVal,10);
                let s=parseFloat(this.state.btnVal,10);
                switch(this.state.prevOp){
                    case "+":
                        this.setState({
                            btnVal:(f+s).toString(),
                            prevOp:"/",
                            prevVal:"",
                        })
                        break;
                    case "-":
                        this.setState({
                            btnVal:(f-s).toString(),
                            prevOp:"/",
                            prevVal:"",
                        })
                        break;
                    case "x":
                        this.setState({
                            btnVal:(f*s).toString(),
                            prevOp:"/",
                            prevVal:"",
                        })
                        break;
                    case "/":
                        this.setState({
                            btnVal:(f/s).toString(),
                            prevOp:"/",
                            prevVal:"",
                        })
                        break;
                    default:
                        this.setState({
                            btnVal:this.state.btnVal,
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                }

              }
              break;

            case "x":
              
              if(this.state.prevOp==""){

                this.setState({
                  prevVal:this.state.btnVal,
                  btnVal:"0",
                  prevOp:"x"
                })

              }else if(this.state.prevOp !="" && this.state.prevVal==""){
                this.setState({
                  prevVal:"",
                  btnVal:this.state.btnVal,
                  prevOp:"x"
                })
              }else{
                
                let f=parseFloat(this.state.prevVal,10);
                let s=parseFloat(this.state.btnVal,10);
                switch(this.state.prevOp){
                    case "+":
                        this.setState({
                            btnVal:(f+s).toString(),
                            prevOp:"x",
                            prevVal:"",
                        })
                        break;
                    case "-":
                        this.setState({
                            btnVal:(f-s).toString(),
                            prevOp:"x",
                            prevVal:"",
                        })
                        break;
                    case "x":
                        this.setState({
                            btnVal:(f*s).toString(),
                            prevOp:"x",
                            prevVal:"",
                        })
                        break;
                    case "/":
                        this.setState({
                            btnVal:(f/s).toString(),
                            prevOp:"x",
                            prevVal:"",
                        })
                        break;
                    default:
                        this.setState({
                            btnVal:this.state.btnVal,
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                }

              }
              break;

            case "+/-":
              this.setState({
                prevVal:"",
                btnVal:(parseFloat(this.state.btnVal,10)*-1).toString(),
                prevOp:""
              })
              break;

            case "=":
                let f=parseFloat(this.state.prevVal,10);
                let s=parseFloat(this.state.btnVal,10);
                switch(this.state.prevOp){
                    case "+":
                        this.setState({
                            btnVal:(f+s).toString(),
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                    case "-":
                        this.setState({
                            btnVal:(f-s).toString(),
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                    case "x":
                        this.setState({
                            btnVal:(f*s).toString(),
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                    case "/":
                        this.setState({
                            btnVal:(f/s).toString(),
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                    case "=":
                        this.setState({
                            btnVal:this.state.btnVal,
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                    default:
                        this.setState({
                            btnVal:this.state.btnVal,
                            prevOp:"",
                            prevVal:"",
                        })
                        break;
                }
                
                break;
            case "C":
                this.setState({
                    btnVal:"0",
                    prevOp:"",
                    prevVal:"",
                })
              break; 
            default:
              break;
          }
        }
      }

    render(){
      this.changeFontSizeIfLengthExceeds()
        return(
        <Fragment>
            <StatusBar backgroundColor="skyblue" barStyle="light-content" hidden/>
            <SafeAreaView style={styles.calculatorMain}>
            <View style={styles.calculatorMain}>
                <Text style={this.state.textInput}>{this.state.btnVal}</Text>
                <View style={styles.buttonsWrapper}>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("C")}>
                    <Text style={styles.btn} >
                        C
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("+/-")}>
                    <Text style={styles.btn} >
                        +/-
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("%")}>
                    <Text style={styles.btn} >
                        %
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSide} onPress={()=>this.btnPress("x")}>
                    <Text style={styles.btn} >
                        x
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("7")}>
                        <Text style={styles.btn} >
                        7
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("8")}>
                        <Text style={styles.btn} >
                        8
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("9")}>
                        <Text style={styles.btn} >
                        9
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSide} onPress={()=>this.btnPress("-")}>
                        <Text style={styles.btn} >
                        -
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("4")}>
                        <Text style={styles.btn} >
                        4
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("5")}>
                        <Text style={styles.btn} >
                        5
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("6")}>
                        <Text style={styles.btn} >
                        6
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSide} onPress={()=>this.btnPress("+")}>
                        <Text style={styles.btn} >
                        +
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("1")}>
                        <Text style={styles.btn} >
                        1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("2")}>
                        <Text style={styles.btn} >
                        2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress("3")}>
                        <Text style={styles.btn} >
                        3
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSide} onPress={()=>this.btnPress("/")}>
                        <Text style={styles.btn} >
                        /
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnZero} onPress={()=>this.btnPress("0")}>
                        <Text style={styles.btn} >
                        0
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWrapper} onPress={()=>this.btnPress(".")}>
                        <Text style={styles.btn} >
                        .
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSide} onPress={()=>this.btnPress("=")}>
                        <Text style={styles.btn} >
                        =
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    calculatorMain: {
      display:"flex",
      flexDirection:"column",
      flex:1,
    },
    btnWrapper:{
      maxWidth:"20%",
      marginRight:"2.5%",
      marginLeft:"2.5%",
      marginTop:"1.5%",
      marginBottom:"1.5%",
      width:"20%", 
      minWidth:"20%",
      maxHeight:"17%",
      height:"17%",
      maxHeight:"17%",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#292b2c",
      borderRadius:Math.round(Dimensions.get('window').width) / 2,
      
    },
    btnSide:{
      maxWidth:"20%",
      marginRight:"2.5%",
      marginLeft:"2.5%",
      marginTop:"1.5%",
      marginBottom:"1.5%",
      width:"20%", 
      minWidth:"20%",
      maxHeight:"17%",
      height:"17%",
      maxHeight:"17%",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"darkorange",
      borderRadius:Math.round(Dimensions.get('window').width) / 2,
      
    },
    btnZero:{
      maxWidth:"45%",
      marginRight:"2.5%",
      marginLeft:"2.5%",
      marginTop:"1.5%",
      marginBottom:"1.5%",
      width:"45%", 
      minWidth:"45%",
      maxHeight:"17%",
      height:"17%",
      maxHeight:"17%",
      justifyContent:"center",
      backgroundColor:"#292b2c",
      borderRadius:Math.round(Dimensions.get('window').width) / 2,
      
    },
    btn: {
      fontSize:45,
      textAlign:"center",
      color:"white",
    },
    buttonsWrapper:{
      backgroundColor:"white",
      display:"flex",
      flexWrap:"wrap",
      flex:1,
      flexDirection:"row"
    },
    
  });

export default Home;