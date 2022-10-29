var area_binario = document.getElementById('ibinario')
var area_decimal = document.getElementById('idecimal')

function revert(str){
    var split = str.split("")
    var revesresplit = split.reverse()
    var join = revesresplit.join("")
    return join
}

function transform() {
    let converter = area_decimal.value
    let oldValue = converter
    let conversor = ''
    if (Number(converter)){
        while (true){
            oldValue = converter
            if (converter != 0 && converter != 1){
                converter /= 2
                converter = Math.floor(converter)
                console.log(converter)
                if (converter * 2 == oldValue){
                    conversor += '0'
                }else {
                    conversor += '1'
                }
            }else {
                if (converter == 0){
                    conversor += '0'
                } else {
                    conversor += '1'
                }
                conversor = revert(conversor)
                break
            }
        }
        area_binario.value = conversor
    }
}