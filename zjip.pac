function FindProxyForURL(url, host){
    if(host == ".*" ) {
    return "PROXY 2.kpxxx.eu.org:1051";
    }
    return "DIRECT";
}
