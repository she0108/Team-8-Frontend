const formatTime = (time : string = "10시간")=>{
    const tmp = time.split("시간")
    return tmp[0]
    
}
export default formatTime