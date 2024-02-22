function FindProxyForURL(url, host){
    if(host == "xxxx" ) {
    return "PROXY 192.168.2.82:8888";
    }
    return "DIRECT";
}
